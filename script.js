/* =======================================
   BANGLE CHAMPIONSHIP
   Version 1.0
======================================= */

/* ========= EDIT THESE ========= */

const SETTINGS = {

    title: "🏆 Bangle Championship",

    ending:
        "The committee thanks you for participating.\n\nYour decision has been recorded. 😌",

    commentary: [

        "⚽ WHAT A MATCH!",

        "🏟️ The crowd goes wild!",

        "🔥 Absolute domination!",

        "😱 Last minute winner!",

        "🏆 A legendary performance!",

        "💥 Extra time decides it!",

        "👏 What a comeback!"

    ],

    contestants: [

        {
            name:"Emerald Green",
            emoji:"💚"
        },

        {
            name:"Ruby Red",
            emoji:"❤️"
        },

        {
            name:"Royal Blue",
            emoji:"💙"
        },

        {
            name:"Pearl White",
            emoji:"🤍"
        },

        {
            name:"Black",
            emoji:"🖤"
        },

        {
            name:"Golden",
            emoji:"💛"
        },

        {
            name:"Pink",
            emoji:"🩷"
        },

        {
            name:"Purple",
            emoji:"💜"
        }

    ]

};

/* ========= VARIABLES ========= */

let currentRound = [];

let nextRound = [];

let matchIndex = 0;

let roundNumber = 1;

/* ========= ELEMENTS ========= */

const home =
document.getElementById("home-screen");

const match =
document.getElementById("match-screen");

const commentary =
document.getElementById("commentary-screen");

const winner =
document.getElementById("winner-screen");

const startBtn =
document.getElementById("startBtn");

const nextBtn =
document.getElementById("nextBtn");

const restartBtn =
document.getElementById("restartBtn");

const title =
document.getElementById("title");

const roundTitle =
document.getElementById("roundTitle");

const option1 =
document.getElementById("option1");

const option2 =
document.getElementById("option2");

const text1 =
document.getElementById("text1");

const text2 =
document.getElementById("text2");

const emoji1 =
document.getElementById("emoji1");

const emoji2 =
document.getElementById("emoji2");

const commentaryText =
document.getElementById("commentaryText");

const winnerName =
document.getElementById("winnerName");

/* ========= INITIALIZE ========= */

title.innerText = SETTINGS.title;

currentRound =
[...SETTINGS.contestants];

/* ========= START ========= */

startBtn.onclick = () => {

    show(match);

    loadMatch();

};

/* ========= LOAD MATCH ========= */

function loadMatch(){

    if(currentRound.length===2){

        roundTitle.innerText="🏆 Final";

    }

    else if(currentRound.length===4){

        roundTitle.innerText="⚔️ Semi Final";

    }

    else{

        roundTitle.innerText="🏟️ Quarter Final";

    }

    const a=currentRound[matchIndex];

    const b=currentRound[matchIndex+1];

    text1.innerText=a.name;

    text2.innerText=b.name;

    emoji1.innerText=a.emoji;

    emoji2.innerText=b.emoji;

}

/* ========= BUTTONS ========= */

option1.onclick=()=>winnerSelected(currentRound[matchIndex]);

option2.onclick=()=>winnerSelected(currentRound[matchIndex+1]);

/* ========= WINNER ========= */

function winnerSelected(player){

    nextRound.push(player);

    commentaryText.innerText=

    player.emoji+" "+player.name+

    "\n\n"+

    SETTINGS.commentary[
        Math.floor(Math.random()*SETTINGS.commentary.length)
    ];

    show(commentary);

}

/* ========= NEXT ========= */

nextBtn.onclick=()=>{

    matchIndex+=2;

    if(matchIndex>=currentRound.length){

        if(nextRound.length===1){

            winnerName.innerText=

            nextRound[0].emoji+

            " "+nextRound[0].name;

            show(winner);

            return;

        }

        currentRound=[...nextRound];

        nextRound=[];

        matchIndex=0;

        roundNumber++;

    }

    show(match);

    loadMatch();

};

/* ========= RESTART ========= */

restartBtn.onclick=()=>{

    currentRound=[...SETTINGS.contestants];

    nextRound=[];

    matchIndex=0;

    roundNumber=1;

    show(home);

};

/* ========= SHOW SCREEN ========= */

function show(screen){

    document
    .querySelectorAll(".screen")
    .forEach(s=>s.classList.remove("active"));

    screen.classList.add("active");

}
