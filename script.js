/* ===========================
   BANGLE CHAMPIONSHIP 2026
   style.css
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    font-family:'Poppins',sans-serif;

    background:#07111d;

    overflow:hidden;

    color:white;

}

/* Animated Background */

.background{

    position:fixed;

    inset:0;

    background:
    radial-gradient(circle at top,#154c79 0%,transparent 40%),
    radial-gradient(circle at bottom,#0b1e33 0%,transparent 35%),
    linear-gradient(135deg,#050b16,#07111d,#0b1626);

    z-index:-2;

}

.background::after{

    content:"";

    position:absolute;

    inset:0;

    background-image:
    radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px);

    background-size:35px 35px;

    opacity:.25;

    animation:moveBg 20s linear infinite;

}

@keyframes moveBg{

    from{

        transform:translateY(0);

    }

    to{

        transform:translateY(35px);

    }

}

/* Container */

.container{

    width:100%;

    max-width:500px;

    margin:auto;

    min-height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:25px;

}

/* Screens */

.screen{

    display:none;

    width:100%;

    animation:fade .45s ease;

}

.screen.active{

    display:block;

}

@keyframes fade{

    from{

        opacity:0;

        transform:translateY(18px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* Home */

.trophy{

    font-size:85px;

    text-align:center;

    animation:float 2.5s ease-in-out infinite;

}

@keyframes float{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-10px);

    }

}

#title{

    text-align:center;

    font-size:38px;

    margin-top:15px;

    font-weight:700;

}

.subtitle{

    margin-top:12px;

    text-align:center;

    color:#d3d3d3;

    font-size:15px;

}

.description{

    margin-top:30px;

    text-align:center;

    line-height:1.8;

    font-size:18px;

}

/* Buttons */

.primary-btn{

    width:100%;

    margin-top:40px;

    border:none;

    border-radius:18px;

    padding:17px;

    font-size:18px;

    cursor:pointer;

    background:linear-gradient(135deg,#1db954,#14a348);

    color:white;

    font-weight:600;

    transition:.25s;

    box-shadow:0 8px 20px rgba(0,0,0,.35);

}

.primary-btn:hover{

    transform:translateY(-2px);

}

/* Match Card */

.match-card{

    margin-top:35px;

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.15);

    backdrop-filter:blur(14px);

    border-radius:22px;

    padding:25px;

}

#roundTitle{

    text-align:center;

    font-size:30px;

}

.color-btn{

    width:100%;

    border:none;

    border-radius:18px;

    padding:20px;

    background:rgba(255,255,255,.09);

    color:white;

    font-size:21px;

    cursor:pointer;

    transition:.25s;

    display:flex;

    align-items:center;

    justify-content:center;

    gap:12px;

}

.color-btn:hover{

    background:#1db954;

    transform:scale(1.03);

}

.emoji{

    font-size:28px;

}

.vs{

    text-align:center;

    margin:22px 0;

    font-size:32px;

    font-weight:bold;

    color:#ffd700;

}

/* Commentary */

#commentary-screen{

    text-align:center;

}

#commentary-screen h2{

    font-size:42px;

}

#commentaryText{

    margin-top:35px;

    font-size:24px;

    line-height:1.8;

}

/* Winner */

#winner-screen{

    text-align:center;

}

.winner-trophy{

    font-size:95px;

    animation:float 2s ease infinite;

}

#winnerName{

    margin-top:20px;

    font-size:42px;

    color:#ffd700;

}

.ending{

    margin-top:30px;

    line-height:1.8;

    color:#dddddd;

}

/* Confetti Placeholder */

#confetti{

    height:60px;

}

/* Mobile */

@media(max-width:480px){

    #title{

        font-size:31px;

    }

    #roundTitle{

        font-size:24px;

    }

    .color-btn{

        font-size:18px;

        padding:18px;

    }

    .primary-btn{

        font-size:17px;

    }

}
