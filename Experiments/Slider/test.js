var interval = $('.sec').width();

$('.sec').click(function(){
    var num = $(this).attr('id').charAt(3);
    var slideLeft = interval*(num-1) + 'px';
    $('#slider').animate({
        left: slideLeft,
    }, 1000, function(){});
    
    var newText = 'section ' + num;
    $('#text').fadeOut(500, function(){
        $('#text').text(newText);
        $('#text').fadeIn(500);
    });
})

// $('#sec1').click(function(){
//     $('#slider').animate({
//         left: '0px',
//     }, 1000, function(){});
//     $('#text').fadeOut(500, function(){
//         $('#text').text('section 1');
//         $('#text').fadeIn(500);
//     });
        
// });

// $('#sec2').click(function(){
//     $('#slider').animate({
//         left: '200px',
//     }, 1000, function(){});
//     $('#text').fadeOut(500, function(){
//         $('#text').text('section 2');
//         $('#text').fadeIn(500);
//     });
       
// });

// $('#sec3').click(function(){
//   $('#slider').animate({
//       left: '400px',
//   }, 1000, function(){});
//   $('#text').fadeOut(500, function(){
//         $('#text').text('section 3');
//         $('#text').fadeIn(500);
//   });
   
// });