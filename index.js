(function() {
  'use strict';
//will refactor
 const stopButton = document.getElementById('stopButton')
 const stopLight = document.getElementById('stopLight')
 const slowButton = document.getElementById('slowButton')
 const slowLight = document.getElementById('slowLight')
 const goButton = document.getElementById('goButton')
 const goLight = document.getElementById('goLight')

 
 stopButton.addEventListener('click', function() {
if(!stopLight.classList.contains('stop')) {
  stopLight.classList.add('stop')
  console.log(`${stopButton.innerText} bulb is on`)
}else{
  stopLight.classList.remove('stop')
  console.log(`${stopButton.innerText} bulb is off`)
}})
slowButton.addEventListener('click', function() {
  if(!slowLight.classList.contains('slow')) {
    slowLight.classList.add('slow')
    console.log(`${slowButton.innerText} bulb is on`)
  }else{
    slowLight.classList.remove('slow')
    console.log(`${slowButton.innerText} bulb is off`)
  }})
  goButton.addEventListener('click', function() {
    if(!goLight.classList.contains('go')) {
      goLight.classList.add('go')
      console.log(`${goButton.innerText} bulb is on`)
    }else{
      goLight.classList.remove('go')
      console.log(`${goButton.innerText} bulb is off`)
    }})

stopButton.addEventListener('mouseenter',function() {
  console.log(`Entered ${stopButton.innerText} button`)
})
stopButton.addEventListener('mouseleave',function() {
  console.log(`Exited ${stopButton.innerText} button`)
})

slowButton.addEventListener('mouseenter',function() {
  console.log(`Entered ${slowButton.innerText} button`)
})
slowButton.addEventListener('mouseleave',function() {
  console.log(`Exited ${slowButton.innerText} button`)
})
goButton.addEventListener('mouseenter',function() {
  console.log(`Entered ${goButton.innerText} button`)
})
goButton.addEventListener('mouseleave',function() {
  console.log(`Exited ${goButton.innerText} button`)
})

/*
const buttonContainer = document.querySelector('#controls');
const stopLight =  document.querySelector('#stopLight');
console.log(buttonContainer);



buttonContainer.addEventListener('click', function(e) {
    if (e.target.id === 'stopButton') {
        stopLight.classList.toggle('stop')
    }

    if (e.target.id === 'slowButton') {
      slowLight.classList.toggle('slow')
    }

    if (e.target.id === 'goButton') {
      goLight.classList.toggle('go')
    }
})
*/



})();
