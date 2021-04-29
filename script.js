const word= document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingBtn = document.getElementById('setting-btn');
const setting = document.getElementById('setting');
const settingForm = document.getElementById('setting-form');
const difficultyselect = document.getElementById('difficulty');
const startGame = document.getElementById('start-game-container'); 


 const words =['hello','welcome','fitness','pepcoding','javascript','java','data','five','America','london','something','different','game','far','flower','laptop','computer','dell','google','amazon','microsoft' ];


 let score =0;

 let time =10;
 let difficulty = localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') :'Medium';


 difficultyselect.value =localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') :'Medium';

 text.focus();

 const timeInterval = setInterval(updateTime,1000);

 function getRandomWord(){
     return words[Math.floor(Math.random()*words.length)];
 }

//  console.log(getRandomWord());

function addWordDom(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
addWordDom();

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

function updateTime(){
    time--;
    timeEl.innerHTML= time+'s';
    if(time == 0){
        clearInterval(timeInterval);

        gameOver();
    }
}


function gameOver(){
    endgameEl.innerHTML=`
    <h1> Time out</h1>
    <p> your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display='flex';

}


text.addEventListener('input',e =>{
    const insertedText = e.target.value;
    // console.log(insertedText);

    if(insertedText == randomWord){
        addWordDom();
        updateScore();

        e.target.value ='';

        if(difficulty == 'Hard'){
            time += 2;
        }
            else if(difficulty == 'Medium'){
                time += 3;

            }else{
                time +=5;
            }
        

        updateTime();
    }
});

// seting btn
settingBtn.addEventListener('click',() => setting.classList.toggle('hide'));

// select

settingForm.addEventListener('change',e => {
difficulty = e.target.value;
// console.log(difficulty);
localStorage.setItem('difficulty',difficulty);

});