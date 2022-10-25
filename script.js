/*$(document).ready(function(){
    $('#body').scrollLeft($(this).height())
})
*/

document.body.style.webkitTouchCallout = "none";

document.querySelector("#paper0").addEventListener("click", changePosition);

function changePosition() {
  const flexContainer = document.querySelector(".flex-container");
  const startDiv = document.querySelector("#div10");
  if (document.querySelector("#paper0").classList.contains("paper-up")) {
    document.querySelector("#paper0").classList.remove("paper-up");
    document.querySelector("#paper0").classList.add("paper-remove");
    document.querySelector("body").classList.remove("bodylocked");
    document.querySelector("#infosymbol").classList.remove("info-hidden");
    document.querySelector("#infosymbol").classList.add("info");
    setTimeout(function () {
      //flexContainer.style.overflow = "auto";
      const leftPos = startDiv.offsetLeft;
      //document.querySelector("body").scrollLeft = -leftPos;
      scrollTo(document.body, -leftPos, 1000, () => {
        console.log();
      });
      /*startDiv.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });*/
    }, 100);
  }
}

function scrollTo(element, to = 0, duration = 1000, scrollToDone = null) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 10;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollLeft = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else {
      if (scrollToDone) scrollToDone();
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

/*else {
    document.querySelector("#paper0").classList.remove("paper-down");
    document.querySelector("#paper0").classList.add("paper-up");
  }
}*/


document.querySelector("#infosymbol").addEventListener("click", infoRuta);

function infoRuta() {
  if (document.querySelector("#inforuta").classList.contains("unvisible")) {
    document.querySelector("#inforuta").classList.remove("unvisible");
    document.querySelector("#inforuta").classList.add("visible");
    document.querySelector("#infosymbol").classList.remove("info");
    document.querySelector("#infosymbol").classList.add("info-close");
    const papers = document.querySelectorAll('.paper')
    for (const p of papers){
      p.classList.add('paper-hidden');
    }
  } else {
    document.querySelector("#inforuta").classList.remove("visible");
    document.querySelector("#inforuta").classList.add("unvisible");
    document.querySelector("#infosymbol").classList.remove("info-close");
    document.querySelector("#infosymbol").classList.add("info");
    const papers = document.querySelectorAll('.paper')
    for (const p of papers){
      p.classList.remove('paper-hidden');

  } 
}
}

document.querySelector("#inforuta").addEventListener("click", infoRutaClose);

function infoRutaClose() {
  if (document.querySelector("#inforuta").classList.contains("visible")) {
    document.querySelector("#inforuta").classList.remove("visible");
    document.querySelector("#inforuta").classList.add("unvisible");
    document.querySelector("#infosymbol").classList.remove("info-close");
    document.querySelector("#infosymbol").classList.add("info");
    const papers = document.querySelectorAll('.paper')
    for (const p of papers){
      p.classList.remove('paper-hidden');

  }
  }
}




var touchsurface = document.getElementById('paper1'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe() {
  if (document.querySelector("#paper1").classList.contains("paper-nere")) {
    document.querySelector("#paper1").classList.remove("paper-nere");
    document.querySelector("#paper1").classList.add("paper-upp");
    document.querySelector("#pil1").classList.remove("pil-upp");
    document.querySelector("#pil1").classList.add("pil-ner");
  } else {
    document.querySelector("#paper1").classList.remove("paper-upp");
    document.querySelector("#paper1").classList.add("paper-nere");
    document.querySelector("#pil1").classList.remove("pil-ner");
    document.querySelector("#pil1").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe(swiperightBol)
        e.preventDefault()
    }, false)

                             
 var touchsurface = document.getElementById('paper2'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe2() {
  if (document.querySelector("#paper2").classList.contains("paper-nere")) {
    document.querySelector("#paper2").classList.remove("paper-nere");
    document.querySelector("#paper2").classList.add("paper-upp");
    document.querySelector("#pil2").classList.remove("pil-upp");
    document.querySelector("#pil2").classList.add("pil-ner");
  } else {
    document.querySelector("#paper2").classList.remove("paper-upp");
    document.querySelector("#paper2").classList.add("paper-nere");
    document.querySelector("#pil2").classList.remove("pil-ner");
    document.querySelector("#pil2").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe2(swiperightBol)
        e.preventDefault()
    }, false)                            
                             
        



var touchsurface = document.getElementById('paper3'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe3() {
  if (document.querySelector("#paper3").classList.contains("paper-nere")) {
    document.querySelector("#paper3").classList.remove("paper-nere");
    document.querySelector("#paper3").classList.add("paper-upp");
    document.querySelector("#pil3").classList.remove("pil-upp");
    document.querySelector("#pil3").classList.add("pil-ner");
  } else {
    document.querySelector("#paper3").classList.remove("paper-upp");
    document.querySelector("#paper3").classList.add("paper-nere");
    document.querySelector("#pil3").classList.remove("pil-ner");
    document.querySelector("#pil3").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe3(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper4'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe4() {
  if (document.querySelector("#paper4").classList.contains("paper-nere")) {
    document.querySelector("#paper4").classList.remove("paper-nere");
    document.querySelector("#paper4").classList.add("paper-upp");
    document.querySelector("#pil4").classList.remove("pil-upp");
    document.querySelector("#pil4").classList.add("pil-ner");
  } else {
    document.querySelector("#paper4").classList.remove("paper-upp");
    document.querySelector("#paper4").classList.add("paper-nere");
    document.querySelector("#pil4").classList.remove("pil-ner");
    document.querySelector("#pil4").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe4(swiperightBol)
        e.preventDefault()
    }, false)



var touchsurface = document.getElementById('paper5'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe5() {
  if (document.querySelector("#paper5").classList.contains("paper-nere")) {
    document.querySelector("#paper5").classList.remove("paper-nere");
    document.querySelector("#paper5").classList.add("paper-upp");
    document.querySelector("#pil5").classList.remove("pil-upp");
    document.querySelector("#pil5").classList.add("pil-ner");
  } else {
    document.querySelector("#paper5").classList.remove("paper-upp");
    document.querySelector("#paper5").classList.add("paper-nere");
    document.querySelector("#pil5").classList.remove("pil-ner");
    document.querySelector("#pil5").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe5(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper6'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe6() {
  if (document.querySelector("#paper6").classList.contains("paper-nere")) {
    document.querySelector("#paper6").classList.remove("paper-nere");
    document.querySelector("#paper6").classList.add("paper-upp");
    document.querySelector("#pil6").classList.remove("pil-upp");
    document.querySelector("#pil6").classList.add("pil-ner");
  } else {
    document.querySelector("#paper6").classList.remove("paper-upp");
    document.querySelector("#paper6").classList.add("paper-nere");
    document.querySelector("#pil6").classList.remove("pil-ner");
    document.querySelector("#pil6").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe6(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper7'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe7() {
  if (document.querySelector("#paper7").classList.contains("paper-nere")) {
    document.querySelector("#paper7").classList.remove("paper-nere");
    document.querySelector("#paper7").classList.add("paper-upp");
    document.querySelector("#pil7").classList.remove("pil-upp");
    document.querySelector("#pil7").classList.add("pil-ner");
  } else {
    document.querySelector("#paper7").classList.remove("paper-upp");
    document.querySelector("#paper7").classList.add("paper-nere");
    document.querySelector("#pil7").classList.remove("pil-ner");
    document.querySelector("#pil7").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe7(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper8'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe8() {
  if (document.querySelector("#paper8").classList.contains("paper-nere")) {
    document.querySelector("#paper8").classList.remove("paper-nere");
    document.querySelector("#paper8").classList.add("paper-upp");
    document.querySelector("#pil8").classList.remove("pil-upp");
    document.querySelector("#pil8").classList.add("pil-ner");
  } else {
    document.querySelector("#paper8").classList.remove("paper-upp");
    document.querySelector("#paper8").classList.add("paper-nere");
    document.querySelector("#pil8").classList.remove("pil-ner");
    document.querySelector("#pil8").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe8(swiperightBol)
        e.preventDefault()
    }, false)



var touchsurface = document.getElementById('paper9'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe9() {
  if (document.querySelector("#paper9").classList.contains("paper-nere")) {
    document.querySelector("#paper9").classList.remove("paper-nere");
    document.querySelector("#paper9").classList.add("paper-upp");
    document.querySelector("#pil9").classList.remove("pil-upp");
    document.querySelector("#pil9").classList.add("pil-ner");
  } else {
    document.querySelector("#paper9").classList.remove("paper-upp");
    document.querySelector("#paper9").classList.add("paper-nere");
    document.querySelector("#pil9").classList.remove("pil-ner");
    document.querySelector("#pil9").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe9(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper10'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe10() {
  if (document.querySelector("#paper10").classList.contains("paper-nere")) {
    document.querySelector("#paper10").classList.remove("paper-nere");
    document.querySelector("#paper10").classList.add("paper-upp");
    document.querySelector("#pil10").classList.remove("pil-upp");
    document.querySelector("#pil10").classList.add("pil-ner");
  } else {
    document.querySelector("#paper10").classList.remove("paper-upp");
    document.querySelector("#paper10").classList.add("paper-nere");
    document.querySelector("#pil10").classList.remove("pil-ner");
    document.querySelector("#pil10").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe10(swiperightBol)
        e.preventDefault()
    }, false)


var touchsurface = document.getElementById('paper11'),
    startY,
    dist, 
    threshold = 150, 
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe11() {
  if (document.querySelector("#paper11").classList.contains("paper-nere")) {
    document.querySelector("#paper11").classList.remove("paper-nere");
    document.querySelector("#paper11").classList.add("paper-upp");
    document.querySelector("#pil11").classList.remove("pil-upp");
    document.querySelector("#pil11").classList.add("pil-ner");
  } else {
    document.querySelector("#paper11").classList.remove("paper-upp");
    document.querySelector("#paper11").classList.add("paper-nere");
    document.querySelector("#pil11").classList.remove("pil-ner");
    document.querySelector("#pil11").classList.add("pil-upp");
  }
}

touchsurface.addEventListener('touchstart', function(e){
         var touchobj = e.changedTouches[0]
        dist = 0
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleSwipe11(swiperightBol)
        e.preventDefault()
    }, false)

document.querySelector("#paper1").addEventListener("click", changePosition1);

function changePosition1() {
  if (document.querySelector("#paper1").classList.contains("paper-nere")) {
    document.querySelector("#paper1").classList.remove("paper-nere");
    document.querySelector("#paper1").classList.add("paper-upp");
  } else {
    document.querySelector("#paper1").classList.remove("paper-upp");
    document.querySelector("#paper1").classList.add("paper-nere");
  }
}

document.querySelector("#paper2").addEventListener("click", changePosition2);

function changePosition2() {
  if (document.querySelector("#paper2").classList.contains("paper-nere")) {
    document.querySelector("#paper2").classList.remove("paper-nere");
    document.querySelector("#paper2").classList.add("paper-upp");
  } else {
    document.querySelector("#paper2").classList.remove("paper-upp");
    document.querySelector("#paper2").classList.add("paper-nere");
  }
}

document.querySelector("#paper3").addEventListener("click", changePosition3);

function changePosition3() {
  if (document.querySelector("#paper3").classList.contains("paper-nere")) {
    document.querySelector("#paper3").classList.remove("paper-nere");
    document.querySelector("#paper3").classList.add("paper-upp");
  } else {
    document.querySelector("#paper3").classList.remove("paper-upp");
    document.querySelector("#paper3").classList.add("paper-nere");
  }
}

document.querySelector("#paper4").addEventListener("click", changePosition4);

function changePosition4() {
  if (document.querySelector("#paper4").classList.contains("paper-nere")) {
    document.querySelector("#paper4").classList.remove("paper-nere");
    document.querySelector("#paper4").classList.add("paper-upp");
  } else {
    document.querySelector("#paper4").classList.remove("paper-upp");
    document.querySelector("#paper4").classList.add("paper-nere");
  }
}

document.querySelector("#paper5").addEventListener("click", changePosition5);

function changePosition5() {
  if (document.querySelector("#paper5").classList.contains("paper-nere")) {
    document.querySelector("#paper5").classList.remove("paper-nere");
    document.querySelector("#paper5").classList.add("paper-upp");
  } else {
    document.querySelector("#paper5").classList.remove("paper-upp");
    document.querySelector("#paper5").classList.add("paper-nere");
  }
}

document.querySelector("#paper6").addEventListener("click", changePosition6);

function changePosition6() {
  if (document.querySelector("#paper6").classList.contains("paper-nere")) {
    document.querySelector("#paper6").classList.remove("paper-nere");
    document.querySelector("#paper6").classList.add("paper-upp");
  } else {
    document.querySelector("#paper6").classList.remove("paper-upp");
    document.querySelector("#paper6").classList.add("paper-nere");
  }
}

document.querySelector("#paper7").addEventListener("click", changePosition7);

function changePosition7() {
  if (document.querySelector("#paper7").classList.contains("paper-nere")) {
    document.querySelector("#paper7").classList.remove("paper-nere");
    document.querySelector("#paper7").classList.add("paper-upp");
  } else {
    document.querySelector("#paper7").classList.remove("paper-upp");
    document.querySelector("#paper7").classList.add("paper-nere");
  }
}

document.querySelector("#paper8").addEventListener("click", changePosition8);

function changePosition8() {
  if (document.querySelector("#paper8").classList.contains("paper-nere")) {
    document.querySelector("#paper8").classList.remove("paper-nere");
    document.querySelector("#paper8").classList.add("paper-upp");
  } else {
    document.querySelector("#paper8").classList.remove("paper-upp");
    document.querySelector("#paper8").classList.add("paper-nere");
  }
}

document.querySelector("#paper9").addEventListener("click", changePosition9);

function changePosition9() {
  if (document.querySelector("#paper9").classList.contains("paper-nere")) {
    document.querySelector("#paper9").classList.remove("paper-nere");
    document.querySelector("#paper9").classList.add("paper-upp");
  } else {
    document.querySelector("#paper9").classList.remove("paper-upp");
    document.querySelector("#paper9").classList.add("paper-nere");
  }
}

document.querySelector("#paper10").addEventListener("click", changePosition10);

function changePosition10() {
  if (document.querySelector("#paper10").classList.contains("paper-nere")) {
    document.querySelector("#paper10").classList.remove("paper-nere");
    document.querySelector("#paper10").classList.add("paper-upp");
  } else {
    document.querySelector("#paper10").classList.remove("paper-upp");
    document.querySelector("#paper10").classList.add("paper-nere");
  }
}

document.querySelector("#paper11").addEventListener("click", changePosition11);

function changePosition11() {
  if (document.querySelector("#paper11").classList.contains("paper-nere")) {
    document.querySelector("#paper11").classList.remove("paper-nere");
    document.querySelector("#paper11").classList.add("paper-upp");
  } else {
    document.querySelector("#paper11").classList.remove("paper-upp");
    document.querySelector("#paper11").classList.add("paper-nere");
  }
}
