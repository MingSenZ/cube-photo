var bigWrap=document.querySelector('.bigWrap');
var smallWrap=document.querySelector('.smallWrap');
var degBig=30;
var degSmall=45;
setInterval(function(){
    degBig+=5;
    bigWrap.style.transform='rotateX('+degBig+'deg) rotateY('+degBig+'deg)';
    console.log(1)
},100)
setInterval(function(){
    degSmall+=8;
    smallWrap.style.transform='translateZ(150px) rotateY('+degBig+'deg) rotateX('+degBig+'deg)';
},100)