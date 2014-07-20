$(document).ready(function(){
  $.fn.fullpage({
        //Turn off Keyboard Scrolling
        paddingBottom: '35px',
        verticalCentered: true,
        resize : true,
        scrollingSpeed: 550,
        easing: 'linear',
        menu: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        scrollOverflow: false,
        css3: false,
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,

        //events
        // onLeave: function(index, direction){},
        // afterLoad: function(anchorLink, index){},
        // afterRender: function(){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // onSlideLeave: function(anchorLink, index, slideIndex, direction){}
      });

  $('.toTwo').on("click", function(){
    $.fn.fullpage.moveTo(2)

    $("#name").typed({
      strings: ["John Doe"],
      typeSpeed: 100
    });
    $("#grade").typed({
      strings: ["^1500 12th Grade"],
      typeSpeed: 100
    });
    $("#bday").typed({
      strings: ["^3000 June 29, 1996"],
      typeSpeed: 100
    });
  }); 

  $('.toThree').on("click", function(){
    $.fn.fullpage.moveTo(3)

    $("#workexp").typed({
      strings: ["^50 Restaurant Hostess (December 2012 - Present)"],
      typeSpeed: 50
    });

    $("#extra").typed({
      strings: ["Freelance Graphic Designer"],
      typeSpeed: 50
    });
  });

    // $("#major").typed({
    //   strings: ["Nursing"],
    //   typeSpeed: 100
    // });

    // $("#major_explain").typed({
    //   strings: ["^500 Nursing allows me to pursue my passion of volunteering and caring for others"],
    //   typeSpeed: 45
    // });

$('.toFour').on("click", function(){
  $.fn.fullpage.moveTo(4)
}); 


$('.toFive').on("click", function(){
  $.fn.fullpage.moveTo(5)


  $("#favpart").typed({
    strings: ["^50 My favorite part about Hunter is the location. I love New York City."],
    typeSpeed: 30
  });
}); 

$('.toSix').on("click", function(){
  $.fn.fullpage.moveTo(6)


  $("#regret").typed({
    strings: ["^50 My biggest regret is messing up during my first two years of school. The only person it hurt was myself."],
    typeSpeed: 30
  });
}); 

$('.toSeven').on("click", function(){
  $.fn.fullpage.moveTo(7)


  $("#comfy").typed({
    strings: ["^50 I feel most comfortable at home because that's where I'm the most stress-free. When I leave the house, I get very homesick."],
    typeSpeed: 30
  });
});

$('.toEight').on("click", function(){
  $.fn.fullpage.moveTo(8)

});

});
