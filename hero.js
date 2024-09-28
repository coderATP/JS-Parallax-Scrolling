

export class Hero{
    constructor(game){
        this.game = game;
        this.x = 0,
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.speedX = this.speedY = 0;
        this.speedBuffer = 256;
        this.centreX = this.x + this.width * 0.5;
        this.centreY = this.y + this.height * 0.5;
        this.color = "red";
    }
    
    render(ctx){
        ctx.save()
        ctx.fillStyle = this.color || 'rgba(255, 255, 255, 1)';
        ctx.fillRect(
            -this.game.camera.viewportX+this.x,
            -this.game.camera.viewportY+this.y,
            this.width,
            this.height);
        ctx.restore();
    }
    
    update(deltaTime){
        this.updateCentre();
        this.handleInput();
        this.x += this.speedX * (deltaTime/1000) * this.speedBuffer;
        this.y += this.speedY * (deltaTime/1000) * this.speedBuffer;
        
        //lock x and y within world
        this.x = Math.max(0, Math.min(this.x, this.game.map.width - this.width));
        this.y = Math.max(0, Math.min(this.y, this.game.map.height  - this.height)); 
        
    }
    
    updateCentre(){
        this.centreX = this.x + this.width * 0.5;
        this.centreY = this.y + this.height * 0.5;
    }
    
    handleInput(){
        if(this.game.input.keys[0] == "right") this.speedX = 1;
        else if(this.game.input.keys[0] == "left") this.speedX = -1; 
        else this.speedX = 0;
        
        if(this.game.input.keys[0] == "up") this.speedY = -1;
        else if(this.game.input.keys[0] == "down") this.speedY = 1;
        else this.speedY = 0;
    }
}