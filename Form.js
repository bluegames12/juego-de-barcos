class Form {
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.reset = createButton('reset');
        this.greeting = createElement('h2');
    }
   hide(){
       this.greeting.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();
   }

    display(){
        
        this.title.html("Boat Racing Game");
        this.button.class("playButton");
        this.reset.class("resetButton");
        this.input.class("inputButton");
         this.title.position(width/2, 0);
          this.input.position(width/2, 160);
          this.reset.position(displayWidth-100,20);
           this.button.position(width/2, 200);
           this.button.mousePressed(()=>{
               this.input.hide();
               this.button.hide();
               player.name=this.input.value();
               playerCount+=1;
               player.index=playerCount ;
               player.update();
               player.updateCount(playerCount);
               this.greeting.html("Hi "+player.name);
               this.greeting.position(130, 160);
              // gameState=1
           })
           this.reset.mousePressed(()=>{
              game.update(0);
              Player.updateCarsAtEnd(0);
              player.updateCount(0);
           })

    }
}