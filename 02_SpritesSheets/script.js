let stage = new createjs.Stage("demoCanvas");

createjs.Ticker.on("tick", handleTick);

function handleTick(event){
    stage.update(event);
}

let data = {
    images: ["SantaClaus.png"],
    frames: { width: 64, height: 72 },
    animations: {
        run: [2, 6]
    }
};

let spriteSheet = new createjs.SpriteSheet(data);
let animation = new createjs.Sprite(spriteSheet, "run");

stage.addChild(animation);
stage.update();
