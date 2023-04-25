function rain(){

    let count = 100;

    let container =
document.querySelector(".container")
    let i = 0;
    while(i<count){

        let drop = document.createElement("i");
        let posX =Math.floor(Math.random()*
        container.offsetWidth)
        
        let delay = Math.random()* -30;
        let duration = Math.random()* 10;

        drop.style.left = posX +"px";
        drop.style.animationDelay = delay +"s";
        container.appendChild(drop);
        i++

    }

}
rain()