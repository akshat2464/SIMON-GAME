let body=document.querySelector('body');
let h2=document.querySelector('.h2');
let boxs=document.querySelectorAll('.box');
let btn=['green','yellow','red','blue'];

let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

// Adding Event for Key-press to start the game
document.addEventListener('keypress',function(){
    if(started==false){
        started=true;

        levelUp();
    }
});

function gameFlash(box){
    box.classList.add('gameflash');
    setTimeout(function(){
        box.classList.remove('gameflash');
    },600);    
};
function userFlash(box){
    box.classList.add('userflash');
    setTimeout(function(){
        box.classList.remove('userflash');
    },250);    
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let random=Math.floor(Math.random()*4);
    let color=btn[random];
    let randbtn=document.querySelector(`.${color}`);
    gameSeq.push(color);
    gameFlash(randbtn);
};

let highest=0;
function highscore(){
    let high=document.querySelector('.highscore');
    if(level>highest){
        highest=level;
    }
    high.innerText=`Highest Socre:${highest}`;
};

function boxpress(){
    let box=this;
    userFlash(box);
    userColor=box.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};
for(boxs of boxs){
    boxs.addEventListener('click',boxpress);
}

function checkAns(seq){
    if(userSeq[seq]==gameSeq[seq]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over!😵<br><b>Your Score:${level}🫡 </b><br>Press Any key to re-start the game🤗`;
        highscore();
        resetGame();

        body.classList.add('warn');
        setTimeout(function(){
            body.classList.remove('warn');
        },200);
    }
}

function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
};
