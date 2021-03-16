const initBtnAnimate = ()=> {
    console.log("coucou")

    const buttons = document.querySelectorAll(".btn-animate")
    buttons.forEach((button)=> {
        button.addEventListener("click", (e)=>{
            console.log(button)
            button.classList.add("onclic")
            setTimeout(()=> {
                button.classList.remove("onclic")
                button.classList.add("validate")
                button.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
            },1000);
        })
    })
}

export {initBtnAnimate}