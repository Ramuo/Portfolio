const skillEl = document.querySelectorAll('.skill')

window.addEventListener('load', ()=>{
    skillEl.forEach(item =>{
        let numElement = item.querySelector('.num');
        let num = parseInt(numElement.innerText)
        let count = 0;
        time = 2000 / num;

        setInterval(()=>{
            if(count == num){
                clearInterval();
            }else{
                count += 1;
                numElement.innerText = count;
            }
            
        }, time)
        let circle = item.querySelector('.circle');
        circle.style.strokeDashoffset = 503 - (503 * (num / 100 ));
        let dots = item.querySelector('.dots');
        dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
        if(num == 100){
            dots.style.opacity = 0;

        }
    })
})