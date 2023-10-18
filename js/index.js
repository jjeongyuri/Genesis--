$(function () {
    toggleS();
    mNav();
    movePic();

    // 모바일 네비게이션
    function mNav() {
        let navWidth = $('header>div>nav').innerWidth();
        // console.log(navWidth)
        $('.btnNav').on('click', function (e) {
            $('nav').animate({ left: '0' }, 500);
        });
        $('.close').on('click', function (e) {
            $('nav').css('left', '-' + navWidth + 'px');

        })
    }
    // 


    // 돋보기 부분
    let searchWide = $('#box input').innerWidth();
    let a = $('.search');
    // console.log(searchWide);
    $('#glass').on('click', function (e) {
        if (a.css('display') === 'none') {
            a.show(searchWide);
        }
        else {
            $('.search').hide(searchWide);
        }
    });
    // 


    // swiper
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
    //   


    // model toggle부분
    let toggleW = $('.toggle>ul').width();
    // console.log(toggleW)
    $('#iconedown').on('click', function (e) {
        $('.toggle').fadeIn(toggleW);
        $(this).hide();
        $('#iconeup').show();
    });
    $('#iconeup').on('click', function (e) {
        $('.toggle').fadeOut(toggleW);
        $(this).hide();
        $('#iconedown').show();
    });

    function toggleS() {
        $('.toggle>ul>li>a').addClass('select');

        $('.toggle>ul>li>a').on('click', function (e) {
            let a = $('.show>.all>li');
            let suv = $('[id*=SUV]');
            let sedan = $('[id*=SEDAN]');
            let b = suv.attr('id');
            let c = sedan.attr('id');
            let move = $(this).attr('href');


            if (move === '#' + c) {
                $('[id*=SUV]').css('display', 'none');
                $('[id*=SEDAN]').show();
                $('.toggle>ul>li>a').removeClass('select');
                $(this).addClass('select');
                $('.show>.all').attr('name', 'sedan');
            }
            else if (move === '#' + b) {
                // console.log(1); 
                $('[id*=SEDAN]').css('display', 'none')/* hide() */;
                $('[id*=SUV]').show();
                $('.show>.all').attr('name', 'suv');
            }
            else if (move === '#allpic') {
                // console.log(1);
                $('.all>li').show();
                $('.show>.all').attr('name', 'all');
            }
        })
    };


    function movePic() {
        // 갤러리 이동
        // 1. ul 길이를 구하기
        // 2. li 가 dispaly:none
        //  10 , 6 , 4

        let count = 0;
        $('.nextTo').on('click', function (e) {
            let allLi = $('.all').attr('name');
            if (allLi === 'sedan') {
                count = 6;
            }
            else if (allLi === 'suv') {
                count = 4;
            }
            else {
                count = 10;
            }
            // console.log(allLi, count)
            // console.log(count)
            let allLiWidth = $('.all>li').outerWidth(true);
            let liWidth = allLiWidth * count;
            let liWidthAll = allLiWidth * 4;
            console.log(liWidth,allLiWidth)
            // $('.all>li#SEDAN:first').appendTo('.all');
            // $('.all>li#SUV:first').appendTo('.all');
            $('.all>li:first').appendTo('.all');
            // $(liWidth).css('margin-left', '-' + allLiWidth + 'px');
        });

        $('.prevTo').on('click', function (e) {
            // let allLiWidth = $('.all>li').outerWidth(true);
            // let liWidth = allLiWidth * count;
            // console.log(liWidth)
            $('.all>li:last').prependTo('.all');
            // $(liWidth).css('margin-left', '-' + allLiWidth + 'px');
        });
    }

    // driving 이미지선택이동
    $('#show>#all>ul>li>img').on('click', function (e) {
        let pic = $(this).attr('src');
        $('#gallery>figure>img').attr('src', pic);
    });

    // driving 갤러리 이동
    let showWidth = $('#show>#all>ul>li').outerWidth(true);
    // console.log(showWidth)
    $('#show>#all>ul>li:last').prependTo('#show>#all>ul');
    $('#show>#all').css('margin-left', '-' + showWidth + 'px');

    $('.prev').on('click', function (e) {
        $('#show>#all').animate({ marginLeft: '-=' + showWidth + 'px' }, function () {
            $('#show>#all>ul>li:first').appendTo('#show>#all>ul');
            $('#show>#all').css('margin-left', '-' + showWidth + 'px');
        });
    })
    $('.next').on('click', function (e) {
        $('#show>#all').animate({ marginLeft: '+=' + showWidth + 'px' }, function () {
            $('#show>#all>ul>li:last').prependTo('#show>#all>ul');
            $('#show>#all').css('margin-left', '-' + showWidth + 'px');
        });
    })
    // 

    // tap메뉴 준비하기
    $('.qna>dl>dt:first').addClass('selected');
    $('.qna>dl>dd:not(:first)').hide();
    $('.qna>dl>dt').on('click', function () {
        // dd open 상태값 가져오기
        let display = $(this).next('dd').css('display');
        // console.log(display)
        // if문
        if (display === 'none') {
            $('.selected').next('dd').slideUp(300);
            $(this).next('dd').slideDown(300);
            $('.qna>dl>dt').removeClass('selected');
            $(this).addClass('selected');
        }
    })
    // 
});