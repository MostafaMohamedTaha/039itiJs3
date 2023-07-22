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
// ((((((((((((((((((((((((((start 1 text box))))))))))))))))))))))))))
let keyCode = (e) => {
    e.preventDefault()
    let key = e.keyCode>=65 && e.keyCode <=90 ? e.keyCode : "please enter string";
    alert(`the code of the key you entered is ${key}`)
}
let mouseKey = () => {
    let mouseKey = document.querySelector("#mouseKey");
    mouseKey.addEventListener("mouseup", (e) => {
        let showMouseKey = document.querySelector("#showMouseKey");
        switch (e.button) {
            case 0:
                showMouseKey.textContent = "Left button clicked.";
                break;
            case 1:
                showMouseKey.textContent = "Middle button clicked.";
                break;
            case 2:
                showMouseKey.textContent = "Right button clicked.";
                break;
            default:
                showMouseKey.textContent = `Unknown button code: ${e.button}`;
        }
    });
}
// ((((((((((((((((((((((((((end 1 text box))))))))))))))))))))))))))
// ((((((((((((((((((((((((((start 2 clock))))))))))))))))))))))))))
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
// ((((((((((((((((((((((((((end 2 clock))))))))))))))))))))))))))
// ((((((((((((((((((((((((((start 3 img))))))))))))))))))))))))))
let startGame = () => {
    let handleImageClick = document.getElementById("handleImage")
    let counter = 0
    handleImageClick.addEventListener("click", handler = function () {
        counter = counter + 1
        document.getElementById("handleImageCounter").innerHTML = `Counter => ${counter}`
        // alert(`counter =>${counter}`)
    })
    let finish = setTimeout(() => {
        handleImageClick.removeEventListener("click", handler)
        alert(`your score = ${counter}`)
        document.addEventListener("mouseup", alert('Game Over'))
    }, 3000)
}
// ((((((((((((((((((((((((((end 3 img))))))))))))))))))))))))))
// ((((((((((((((((((((((((((start 3 questions))))))))))))))))))))))))))
// If you’ll use the first method, event handlers, the difference is that if you add two event handlers for the same button click, the second event handler will overwrite the first and only that event will trigger.


// const button = document.querySelector(".btn")
// button.onclick = function() {
//   console.log("Hello!");
// };
// // OR
// button.onclick = () => {
//   console.log("Hello!");
// };
// event handle
// const button = document.querySelector(".btn")
// button.addEventListener("click", function(event) {
//   console.log("Hello!");
// })
// // OR
// button.addEventListener("click", event => {
//   console.log("Hello!");
// })


// (((((((((((((((((((((((((((summary 1)))))))))))))))))))))))))))
// handle override eventListener listen to all events

// ((((((((((((((((((((((((((((((((((q2))))))))))))))))))))))))))))))))))
// ii.	Will addEventListener() will overwrite the other handler function attached to that button before? no listen and do
// ((((((((((((((((((((((((((((((((((q3))))))))))))))))))))))))))))))))))
// iii.	How does addEventListener() handles the event bubbling in better way?
// run time listen to the event and handle every thing
// ((((((((((((((((((((((((((end 3 questions))))))))))))))))))))))))))

// (((((((((((((((((((((((((start form username)))))))))))))))))))))))))
let submitUsername = () => {
    usernameInputValue = document.getElementById("usernameGet").value
    localStorage.setItem("inputValue", usernameInputValue);
    console.log(usernameInputValue)
}
document.getElementById("usernameWelcome").innerHTML=` welcome ${localStorage.getItem("inputValue")}`
// (((((((((((((((((((((((((end form username)))))))))))))))))))))))))
// (((((((((((((((((((((((((start scroll down)))))))))))))))))))))))))
// document.getElementById("scrollPage").addEventListener("load", () => {
//     let i
//     var handle = setInterval(function () {
//         window.scrollBy(0, 1000);
//         i++;
//         if (i === 20) {
//             clearInterval(handle);
//         }
//     }, 1000);
// })
// (((((((((((((((((((((((((end scroll down)))))))))))))))))))))))))
//