var keyes = document.querySelectorAll('.k');
var keyes2 = document.querySelectorAll('.k audio');
var keye = document.querySelectorAll('.k h1');

console.log(keyes2[0]);
// var key2 = keye[0];
var m = Map;
for(var i = 0; i < keye.length; i++){
    m[keye[i].innerHTML.charCodeAt(0)] = i;
}

document.body.onkeydown = function(e){
    var x = e.keyCode;
    if(x in m){
        keyes2[m[x]].play();
        keyes[m[x]].classList.add('l');
        
    }
}
document.body.onkeyup = function(e){
    var x = e.keyCode;
    if(x in m){
        keyes[m[x]].classList.remove('l');
        keyes2[m[x]].pause();
        keyes2[m[x]].currentTime = 0;
    }
}

