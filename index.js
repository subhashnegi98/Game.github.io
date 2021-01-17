
const myfunc1 = () => {
    const play1 = Math.floor((Math.random()*6)+1);
    const player1dice = `img/dice${play1}.png`;
    document.getElementById('player1').setAttribute('src', player1dice);


document.getElementById("btn").addEventListener('click', function(){
    const play2 = Math.floor((Math.random()*6)+1);
    const player2dice = `img/dice${play2}.png`;
    document.getElementById('player2').setAttribute('src', player2dice);


    if(player1dice>player2dice)
    {
        document.querySelector('h1').innerHTML = `Player 1 Won`;
    }
    else if(player1dice<player2dice)
    {
        document.querySelector('h1').innerHTML = `Player 2 Won`;
    }
    else
    {
        document.querySelector('h1').innerHTML = `DRAW`;
    }
})
    
};


const myfunc2 = () => {
    const play2 = Math.floor((Math.random()*6)+1);
    const player2dice = `img/dice${play2}.png`;
    document.getElementById('player2').setAttribute('src', player2dice);


document.getElementById("btn1").addEventListener('click', function(){
    const play1 = Math.floor((Math.random()*6)+1);
    const player1dice = `img/dice${play1}.png`;
    document.getElementById('player1').setAttribute('src', player1dice);


    if(player1dice>player2dice)
    {
        document.querySelector('h1').innerHTML = `Player 1 Won`;
    }
    else if(player1dice<player2dice)
    {
        document.querySelector('h1').innerHTML = `Player 2 Won`;
    }
    else
    {
        document.querySelector('h1').innerHTML = `DRAW`;
    }
})
    
};

const myfun = () => {
    location.reload()
}
