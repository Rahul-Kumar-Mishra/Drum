/*
 var onOff = 1;
 function reset(){


    document.getElementById('reset').style.backgroundColor = "green";

    // if(onoff==1){
    // document.getElementById('reset').style.backgroundColor = "green";
    // //onOff = false;
    // }
    // else{
    // onOff = true;
    // }
}
*/



document.addEventListener("keypress", function(event){
    //alert("key presed is: " + event.key);
    makeSound(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var p1 = new Audio("TomOne.mpeg");
            p1.play();
            break;

        case "a":
            var p2 = new Audio("tomTwo.mpeg");
            p2.play();
            break;

        case "s":
            var p3 = new Audio("tomThree.mpeg");
            p3.play();
            break;

        case "d":
            var p4 = new Audio("tomFour.mpeg");
            p4.play();
            break;

        case "j":
            var p5 = new Audio("tomFive.mpeg");
            p5.play();
            break;

        case "k":
            var p6 = new Audio("tomSix.mpeg");
            p6.play();
            break;

        case "l":
            var p7 = new Audio("tomSeven.mpeg");
            p7.play();
            break;
    
        
    }
    
}





function tom1(){
    var t1 = new Audio("TomOne.mpeg");
    t1.play();
}

function tom2(){
    var t2 = new Audio("tomTwo.mpeg");
    t2.play();
}

function tom3(){
    var t3 = new Audio("tomThree.mpeg");
    t3.play();
}

function tom4(){
    var t4 = new Audio("tomFour.mpeg");
    t4.play();
}

function tom5(){
    var t5 = new Audio("tomFive.mpeg");
    t5.play();
}

function tom6(){
    var t6 = new Audio("tomSix.mpeg");
    t6.play();
}

function tom7(){
    var t7 = new Audio("tomSeven.mpeg");
    t7.play();
}




