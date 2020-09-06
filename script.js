score = 0;
cross = true;

// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);




audiogo = new Audio('sm.wav')
setTimeout(() => {
    audio.play()
}, 1000);




document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 100 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 100) + "px";
    }
}


setInterval(() => {
    dino = document.querySelector('.dino')
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
   
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetx = Math.abs(dx-ox)
    offsety = Math.abs(dy-oy)
    // console.log(offsetx,offsety)
    if(offsetx< 100 && offsety<50){
        gameOver.innerHTML = "Game Over-Reload to Play Again"
        obstacle.classList.remove('obstacleani')
        audiogo.play()
        setTimeout(() => {
            audiogo.pause();
        }, 2500);
    }

    else if(offsetx<145 && cross){
        score+=1;
        updatescore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);

        setTimeout(() => {
            
        
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newdur = anidur - 0.05;
            obstacle.style.animationDuration = newdur + 's'
            console.log('new dur is : ',newdur)
        }, 500);
    }   

}, 10);


function updatescore(score){
    scoreCont.innerHTML = "Your Score is :"+ score
}