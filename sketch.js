const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time, continent;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    getBackgroundImg();
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>12){
        text("Time : "+ hour%12 + ":" + minute + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12:"+minute+" AM",50,100);
    }else if(hour==12){
        text("Time : 12:"+minute+" PM",50,100);
    }else{
        text("Time : "+ hour%12 + ":" + minute + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    timezone = "America/Los_Angeles"

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/"+timezone);
    
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();
    
 

    
    //fetch time from responseJSON
    hour = responseJSON.datetime.slice(11,13);
    minute = responseJSON.datetime.slice(14,16);
    console.log(hour+":"+minute);
    

    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
