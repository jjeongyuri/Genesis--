
    // 갤러리 SEDAN클릭 이동
        // let Cwidth = '388.33px';
        // $('.all>li#SEDAN:last').prependTo('.all');
        // $('.all').css('margin-left','-'+Cwidth+'px');       

$('.nextTo').on('click', function (e) {
    if (count < 6) {
        console.log(count);
        $('.all').animate({ marginLeft: '-=' + Cwidth + 'px' }, function () {
            $('.all>li:first').appendTo('.all');
            $('.all').css('margin-left', '-' + Cwidth + 'px');
        });
    }
    count++;
});


$('.prevTo').on('click', function (e) {
    if (count < 6 && count > 0) {
        $('.all').animate({ marginLeft: '+=' + Cwidth + 'px' }, function () {
            $('.all>li:last').prependTo('.all');
            $('.all').css('margin-left', '-' + Cwidth + 'px');
        });
        count--;
    }
});

// 갤러리 SUV클릭 이동
    // let Cwidth = 388.33;

    // let count = 0;
    // $('.nextTo').on('click',function(e){
    //     // $('.all>li#SUV:last').prependTo('.all');
    //     // $('.all').css('margin-left','-'+Cwidth+'px');  
    //     if(count<1){
    //             $('.all').animate({marginLeft:'-='+Cwidth+'px'},function(){
    //                 $('.all>li:first').appendTo('.all');
    //                 $('.all').css('margin-left','-'+Cwidth+'px');
    //             }); 
    //     }
    //         count++;
    // });


    //     $('.prevTo').on('click',function(e){
    //         if(count === 1){
    //         $('.all').animate({marginLeft:'+='+Cwidth+'px'},function(){
    //             $('.all>li:last').prependTo('.all');
    //             $('.all').css('margin-left','-'+Cwidth+'px');
    //         }); 
    //         count--;
    //     }
    // });

    //  model 갤러리
    // let liWidth = $('.all>li').outerWidth(true);
    // console.log(liWidth)
    // $('.all>li:last').prependTo('.all');
    // $('.all').css('margin-left','-'+liWidth+'px');

    // $('.nextTo').on('click',function(e){
    //     $('.all').animate({marginLeft:'-='+liWidth+'px'},function(){
    //         $('.all>li:first').appendTo('.all');
    //         $('.all').css('margin-left','-'+liWidth+'px');
    //     }); 
    // });
    // $('.prevTo').on('click',function(e){
    //     $('.all').animate({marginLeft:'+='+liWidth+'px'},function(){
    //         $('.all>li:last').prependTo('.all');
    //         $('.all').css('margin-left','-'+liWidth+'px');
    //     }); 
    // });