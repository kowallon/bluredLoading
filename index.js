const text = document.querySelector(".loading-text")
const bg = document.querySelector(".background")

let load = 0

let interval = setInterval(blur, 30)


function blur(){
    load ++

    if(load > 99){
        clearInterval(interval)
    }

    text.textContent = `${load}%`
    text.style.opacity = scale(load, 0, 101, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
       
}


const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}