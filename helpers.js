let counts = document.querySelectorAll('.counter');

function counter(){    
    let scrollTop = document.documentElement.scrollTop;
    let altura = counts[0].offsetTop;

    if(altura-scrollTop < 700){
counts.forEach((count) => {
    const updateCount = () => {
        let currentCount = parseInt(count.innerText);
        let targetCount = count.getAttribute('data-target');
        let increaseSpeed = 9;
        let increaseCount = parseInt(targetCount / increaseSpeed);
        
        if(currentCount < targetCount) {
            count.innerText = currentCount + increaseCount;
            setTimeout(updateCount, 120);
        }
        else{
            count.innerText = targetCount;
        }
    }
    updateCount();
    
})
}
}


window.addEventListener('scroll', counter)