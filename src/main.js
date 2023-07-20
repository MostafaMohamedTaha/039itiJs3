//((((((((((((((((((object))))))))))))))))))
// let obj1={
//     name:"mo",age:11,address:'ca',emails:{
//         first :"a@g.com",
//         second :"b@g.com"
//     }
// }
//((((((((((((((((reg))))))))))))))))
// /[]/.test("") =>true / false

// /[]/.exec("") =>first match =>last match return array
// let a=/j.*t/
// let b="javascript sdfsdfsdf sdsdf sdfsdf javascript dsfsdfsd "
// console.log(a.exec(b))
//((((((((((((((((exception handling))))))))))))))))
// let divide = (n1, n2) => {
//     n1 = prompt("enter first number", "enter first number")
//     n2 = prompt("enter second number", "enter second number")
//     if (/\d+/.test(n1) == false || /\d+/.test(n2) == false) {

//         let typeErrorShow = new TypeError("must  inter only numbers")
//         throw typeErrorShow;
//     } else if (n2 == 0) {
//         let rangeErrorShow = new RangeError("must inter numbers not equal to zero")
//         throw rangeErrorShow;
//     } else {
//         document.getElementById("divide").innerHTML = n1 / n2
//         console.log(n1 / n2)
//     }
// }
// try{

// }catch(e){
//     alert(e.message)
//     alert(e.name)
// }
//((((((((((((((((Bom))))))))))))))))
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.outerHeight)
// console.log(window.outerWidth)


// function openNewWindow() {
//     openWindow = window.open(
//         "http://www.google.com",
//         "_blank",
//         "width=300",
//         "height=500",
//     )
// }
// function closeWindow () {

//     openWindow.close()
// }

// function changeColor(color){
//     openWindow.
// }
// function isClosed(){
//     alert(openWindow.closed)
// }

// // setInterval ,setTimeout
// function timeClock(){
//     incrementClockTimer = setInterval(incrementClock, 1000)
// }
// function incrementClock() {
//     let counter = 0;
//     counter = document.getElementById("clock").innerHTML
//     return counter++
// }
// function stopClock(){
//     clearInterval(incrementClockTimer)
// }
// var tStop
// function startTimeOut(){
//     setTimeout("alert('hello')",3000)
// }
// function stopTimeOut(){
//     clearTimeout(tStop)
// }

//navigator =>cookies || language || platform || geolocation || online

//location

// replace remove from history location || assign edit the location history

//(((((((((((((((((((((((event object)))))))))))))))))))))))
// e.target.value,e.type 
// onkeydown
// onkeyup
//prevent.default => javascript void(0)
// event.stopPropagation() =>prevent default for parent
var clear
function startClock() {
    alert("clock starts")
    clear = setInterval(incrementClock, 1000)
}

function incrementClock() {
    let date = new Date().toLocaleTimeString()

    // let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    
    document.getElementById("startClock").innerHTML = date
}
function stopClock() {
    clearInterval(clear)
    alert("clock stopped")
}
document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key == 'w') {
        alert('clock stopped!');
        clearInterval(clear)
    }
});
