function prevClick(){

  var activeImg = $('.active');

  if(activeImg.hasClass('first')){

    var prevImg = $('img.last');

    activeImg.removeClass('active');
    prevImg.addClass('active');


  } else{

    var prevImg = activeImg.prev('img');

    activeImg.removeClass('active');
    prevImg.addClass('active');


  }

  var activeDot = $('.attiva');

  if(activeDot.hasClass('first')){

    var prevDot = $('i.last');

    activeDot.removeClass('attiva');
    prevDot.addClass('attiva')

  } else{

    var prevDot = activeDot.prev('i');

    activeDot.removeClass('attiva');
    prevDot.addClass('attiva');

  }

}

function nextClick(){

  var activeImg = $('.active');

  if (activeImg.hasClass('last')){

    var nextImg = $('img.first');

    activeImg.removeClass('active');
    nextImg.addClass('active');


  } else{

    var nextImg = activeImg.next('img');

    activeImg.removeClass('active');
    nextImg.addClass('active');

  }

  var activeDot = $('.attiva');

  if(activeDot.hasClass('last')){

    var nextDot = $('i.first');

    activeDot.removeClass('attiva');
    nextDot.addClass('attiva')
  } else{

    var nextDot = activeDot.next('i');

    activeDot.removeClass('attiva');
    nextDot.addClass('attiva')

  }

}

function init(){

  $('.next, .nav').click(nextClick);
  $('.prev').click(prevClick);


}

$(document).ready(init);
