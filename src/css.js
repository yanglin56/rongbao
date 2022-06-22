const string = `
. rongbao * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

. rongbao *::before,
. rongbao *::after {
    box-sizing: border-box;
}

.rongbao {
    position: relative;
    background: #dfe1b4;
    min-height:50vh;
}

.head {
    border: 1px solid #eef0ef;
    width: 290px;
    height: 260px;
    position: absolute;
    left: 50%;
    margin-left: -135px;
    top: 150px;
    border-radius: 240px 240px 200px 210px;
    z-index: 3;
    background: #eef0ef;
}

.nose {
    background: #161514;
    width: 24px;
    height: 8px;
    position: relative;
    left: 50%;
    top: 320px;
    margin-left: -6px;
    border-radius: 0px 0px 25px 25px;
    z-index: 4;
}

.yuan {
    position: absolute;
    width: 24px;
    height: 10px;
    top: -10px;
    left: 0px;
    border-radius: 10px 10px 0 0;
    background: #161514;
}

.ear {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 130px;
    margin-left: -50px;
    background: linear-gradient(90deg, rgba(194, 49, 27, 1) 0%, rgba(109, 24, 15, 1) 11%, rgba(43, 19, 14, 1) 35%, rgba(22, 19, 20, 1) 100%);
    border-radius: 50% 40%;
}

.ear::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    /* border: 3px solid red; */
    border-radius: 58% 40% 6% 38%;
    position: relative;
    top: -8px;
    left: 30px;
    transform: rotate(30deg);
    background: #dfe1b4;
}

.ear.left {
    transform: translateX(-100px);
}

.ear.right {
    transform: translateX(120px);
    margin-top: -10px;
}

.ear.right::before {
    transform: rotate(60deg);
    margin-top: -2px;
    margin-left: 12px;
}

.eye {
    border: 3px solid #000000;
    /* width: 84px; */
    width: 90px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 240px;
    border-radius: 50% 0% 50% 50%;
    z-index: 5;
    background: linear-gradient(90deg, rgba(229, 70, 44, 1) 0%, rgba(24, 15, 13, 1) 0%, rgba(22, 19, 20, 1) 14%, rgba(43, 19, 14, 1) 38%, rgba(109, 24, 15, 1) 62%, rgba(229, 70, 44, 1) 100%);
}

.eye::before {
    content: '';
    display: block;
    border: 2px solid #161514;
    width: 40px;
    height: 40px;
    z-index: 8;
    border-radius: 60% 50% 60% 50%;
    position: relative;
    top: 34px;
    left: 20px;
    transform: rotate(0deg);
    background: #374049;
}

.eye::after {
    content: '';
    display: block;
    border: 1px solid #161514;
    width: 26px;
    height: 30px;
    z-index: 8;
    border-radius: 60% 50% 60% 50%;
    position: relative;
    top: 0px;
    left: 28px;
    transform: rotate(30deg);
    background: #131311;
}

.eye.left {
    transform: translateX(-106px) rotate(-42deg);
}

.eye.right {
    transform: translateX(30px) rotate(-42deg);
}

.eye.right::before {
    margin-top: -8px;
    margin-left: -14px;
}

.eye.right::after {
    margin-top: 0px;
    margin-left: -16px;
}

.mouth {
    width: 60px;
    height: 20px;
    z-index: 4;
    position: absolute;
    left: 50%;
    top: 340px;
    margin-left: -25px;
}

.mouth .up .lip.left {
    border: 2px solid black;
    width: 28px;
    height: 10px;
    border-radius: 0 0 50% 50%;
    border-top-color: transparent;
    margin-top: -3px;
    position: relative;
}

.mouth .up .lip.left::before {
    content: '';
    display: block;
    width: 28px;
    height: 10px;
    background: #eef0ef;
    position: absolute;
    top: -8px;
    left: -10px;
    transform: rotate(-4deg);
}

.mouth .up .lip.right {
    border: 2px solid black;
    width: 28px;
    height: 10px;
    border-radius: 0 0 50% 50%;
    border-top-color: transparent;
    margin-top: -10px;
    margin-left: 25px;
    position: relative;
}

.mouth .up .lip.right::before {
    content: '';
    display: block;
    width: 50px;
    height: 10px;
    background: #eef0ef;
    position: absolute;
    top: -6px;
    left: -2px;
    transform: rotate(2deg);
}

.body {
    border: 3px solid #c5593f;
    width: 220px;
    height: 270px;
    position: relative;
    left: 50%;
    top: 300px;
    margin-left: -100px;
    border-radius: 50% 50% 40px 40px;
    /* border-bottom-color: transparent; */
    background: #eef0ef;
    z-index: 1;
}

.face {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 320px;
    z-index: 4;
    border-radius: 30% 30% 50% 50%;
    background: #f6cfc2;
    filter: blur(5px)
}

.face.left {
    transform: translate(-90px);
}

.face.right {
    transform: translate(90px);
}

.body::before {
    content: '';
    display: block;
    border: 3px solid #6c91b7;
    width: 140px;
    height: 120px;
    margin-top: 180px;
    margin-left: -30px;
    border-radius: 0 0 50% 50%;
    transform: rotate(30deg);
    background: #6c91b7;
}

.body::after {
    content: '';
    display: block;
    border: 3px solid #6c91b7;
    width: 140px;
    height: 120px;
    margin-top: -120px;
    margin-left: 90px;
    border-radius: 0 0 50% 50%;
    background: #6c91b7;
}

.hand {
    border: 3px solid #0d0c0a;
    width: 58px;
    height: 110px;
    position: relative;
    left: 50%;
    top: 130px;
    margin-left: -50px;
    border-radius: 60% 10% 30% 50%;
    background: #0d0c0a;
    z-index: 2;
}

.hand.left {
    transform: translate(-100px) rotate(18deg);
}

.hand.right {
    transform: translate(160px) rotate(160deg);
    margin-top: -110px;
}

.foot {
    border: 3px solid #0d0c0a;
    width: 100px;
    height: 80px;
    position: relative;
    left: 50%;
    margin-left: -120px;
    border-radius: 60% 50% 50% 50%;
    background: #0d0c0a;
}

.foot.left {
    transform: translate(20px) translateY(180px);
}

.foot.right {
    transform: translate(120px) translateY(100px);
}

.clothes1 {
    border: 80px solid green;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: -200px;
    border-color: transparent transparent transparent green;
    transform: rotate(10deg);
}

.clothes {
    border: 3px solid #d35035;
    width: 120px;
    height: 160px;
    position: relative;
    left: 50%;
    top: -220px;
    transform: translate(-60px) rotate(50deg);
    background: #d35035;
    z-index: 2;
}

.clothes::before {
    content: '';
    display: block;
    border: 2px solid #d35035;
    width: 30px;
    height: 20px;
    transform: translateY(122px) rotate(50deg);
    margin-top: 0px;
    margin-left: -20px;
    background: #d35035;
}

.clothes::after {
    content: '';
    display: block;
    border: 2px solid #d35035;
    width: 50px;
    height: 100px;
    margin-top: -36px;
    margin-left: 88px;
    border-radius: 0 10px 0 0;
    transform: rotate(25deg);
    background: #d35035;
}

.trousers {
    border: 1px solid #6c91b7;
    width: 220px;
    height: 110px;
    position: relative;
    left: 50%;
    top: -250px;
    margin-left: -100px;
    background: #6c91b7;
    z-index: 1;
}

.trousers::before {
    content: '';
    display: block;
    border: 2px solid #6c91b7;
    width: 26px;
    height: 40px;
    transform: translate(180px) rotate(20deg);
    margin-top: -30px;
    background: #6c91b7;
}

.trousers::after {
    content: '';
    display: block;
    border: 1px solid #6c91b7;
    width: 26px;
    height: 40px;
    transform: translate(6px);
    margin-top: -130px;
    background: #6c91b7;
}

.trousers .pocket {
    border: 2px solid rgb(226, 94, 94);
    width: 50px;
    height: 60px;
    border-radius: 10% 50% 50% 20px;
    background: #c5593f;
}

.trousers .pocket.left {
    transform: translate(-22px) rotate(25deg);
    margin-top: 28px;
}

.trousers .pocket.right {
    transform: translate(185px) rotate(188deg);
    margin-top: -54px;
}
`
export default string;