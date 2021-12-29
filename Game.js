class Game{
    constructor(){
    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState==0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            
        
            form=new Form();
            form.display();
        }
        car1=createSprite(300,200);
        car1.addImage("car1",car1img);
        car2=createSprite(500,200);
        car2.addImage("car2",car2img);
        car3=createSprite(700,200);
        car3.addImage("car3",car3img);
        car4=createSprite(900,200);
        car4.addImage("car4",car4img);
        cars=[car1,car2,car3,car4]
        
        obstacle=createSprite(-700,300,50,50);
        obstacle.addImage("pez",pez);
        obstacle.velocityX=3;

        obstacle1=createSprite(width,0,50,50);
        obstacle1.addImage("pez4",pez4);
        obstacle1.velocityX=-3;

        obstacle2=createSprite(width,-300,50,50);
        obstacle2.addImage("pez4",pez4);
        obstacle2.velocityX=-3;

        obstacle3=createSprite(-700,-600,50,50);
        obstacle3.addImage("pez",pez);
        obstacle3.velocityX=3;
//aqui se acomodan los lugares de los peces
    }
    play(){
        background(track);
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();
     if(allPlayers!==undefined){
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index=0;
        var x=40;
        var y;

        for(var plr in allPlayers){
            index=index+1
           
            x=x+300;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index==player.index){
                fill("red")
                ellipse(x,y,60,60)
                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
            }
            if(obstacle.isTouching(cars[index-1])
            ||obstacle1.isTouching(cars[index-1])
            ||obstacle2.isTouching(cars[index-1])
            ||obstacle3.isTouching(cars[index-1])){
                cars[index-1].x=250;
                cars[index-1].y=0;
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                player.distance=0;
            }
        }
     }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10
            player.update();
        }
        if(player.distance>4000){
            gameState=2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank)
            clear();
        gameEnd=new GameEnd();
        gameEnd.display();
        }
        drawSprites();
    }
    end(){
        console.log(player.rank);
        console.log("maybe");
    }
}