class GameEnd { 

constructor() { 
    //this.logoImage ="https://img.freepik.com/vector-gratis/fondo-game-over-distorision_23-2148087864.jpg?size=338&ext=jpg";
// this.logo = createImg(this.logoImage);
  this.story=createElement('h1'); 
  this.over=createElement('h1');
}
display(){
    this.story.position(width / 2.3, height / 4); 
    this.story.html("Place "+player.rank);
    // this.logo.position(width / 2.4, 10);
    this.over.position(width / 2.3, height / 5); 
    this.over.html("GAME OVER ");
}

 }

