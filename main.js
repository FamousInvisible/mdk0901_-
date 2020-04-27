const numeric = document.querySelectorAll(".numeral"),
screen = document.querySelector(".screen"),
operators = document.querySelectorAll(".operator"),
eval_f = document.querySelector(".eval"),
clear = document.querySelector(".clear");
let result = "",
cleaner = false;

numeric.forEach(element => {
    element.addEventListener("click", ()=>{
        if(cleaner)
            clear_screen()
        if(element.textContent != "."){
            if(screen.textContent == "0")
                screen.textContent = ""
            screen.textContent = screen.textContent+element.textContent
        }
        else if(screen.textContent.indexOf(".")==-1)
            screen.textContent = screen.textContent+element.textContent
    })
})

operators.forEach(element => {
    element.addEventListener("click", ()=>{
        if(cleaner)
            clear_screen()
        result += screen.textContent
        result += element.textContent
        screen.textContent = "0"
    })
})

clear.addEventListener("click", clear_screen)
eval_f.addEventListener("click", resulter)

function clear_screen(){
    screen.textContent = "0"
    result = ""
    cleaner = false
}

function resulter(){
    result += screen.textContent;
    screen.textContent = eval(result);
    cleaner = true;
}

clear_screen()