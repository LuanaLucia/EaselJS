let stage = new createjs.Stage("demoCanvas");

createjs.Ticker.on("tick", handleTick);

function handleTick(event){
    stage.update(event);
}

let data = {
    images: ["SantaClaus.png"],
    frames: { width: 64, height: 72 },
    animations: {
        run: [2, 6,"run", 0.6],
        jump: [9, 10, "stop", 0.5],
        stop: [0, 0, "stop", 0.7]
    }
};

let spriteSheet = new createjs.SpriteSheet(data);
let animation = new createjs.Sprite(spriteSheet, "run");

var btJump = new createjs.Shape();
btJump.graphics.beginFill("lightgreen").drawCircle(0, 0, 30);

btJump.x = 300;
btJump.y = 220;

var btStop = new createjs.Shape();
btStop.graphics.beginFill("#ff9999").drawCircle(0, 0, 30);

btStop.x = 300;
btStop.y = 160;

var btRun = new createjs.Shape();
btRun.graphics.beginFill("violet").drawCircle(0, 0, 30);

btRun.x = 300;
btRun.y = 100;

var txtRun = new createjs.Text("Go", "20px Arial", "#ff7700");
txtRun.x = 285;
txtRun.y = 105;
txtRun.textBaseline = "alphabetic";

var txtStop = new createjs.Text("Stop", "20px Arial", "#ff7700");
txtStop.x = 280;
txtStop.y = 165;
txtStop.textBaseline = "alphabetic";

var txtJump = new createjs.Text("Jump", "20px Arial", "#ff7700");
txtJump.x = 275;
txtJump.y = 225;
txtJump.textBaseline = "alphabetic";



btStop.addEventListener("click", () => animation.gotoAndPlay("stop"));
btRun.addEventListener("click", () => animation.gotoAndPlay("run"));
btJump.addEventListener("click", () => animation.gotoAndPlay("jump"));



function mouseClick(event){
    animation.gotoAndPlay("jump");
}

stage.addChild(btStop);
stage.addChild(btRun);
stage.addChild(btJump);

stage.addChild(txtStop);
stage.addChild(txtRun);
stage.addChild(txtJump);

stage.addChild(animation);
stage.update();