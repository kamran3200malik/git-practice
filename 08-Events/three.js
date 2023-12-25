let intvl;

const randomColor=function () {
    const hex= "0123456789ABCDEF"
    let color='#'
    for (let i = 0; i < 6; i++) {
         color += hex[Math.floor(Math.random()*16)]     
    }
    return color
}
console.log(randomColor());

const startChangingColor=function () {
    if (!intvl) {
        intvl = setInterval(chngBg,1000)
    }
    
    function chngBg() {
    document.body.style.backgroundColor=randomColor()
        
    }
}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

function stopChangingColor() {
    clearInterval(intvl)
    intvl=null;
    console.log("stop");
}