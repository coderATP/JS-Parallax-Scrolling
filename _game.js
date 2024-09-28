import { AssetManager } from "./assetManager.js"
import { Camera } from "./camera.js"
import { Input } from "./input.js"
import { Map } from "./map.js"
import { UI } from "./ui.js"
import { Rectangle } from "./rectangle.js"
import { Hero } from "./hero.js"
import { MapLayer } from "./layer.js"


export class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.tileSize = 40;
        this.rows = Math.ceil(this.height/this.tileSize);
        this.columns = Math.ceil(this.width/this.tileSize);
        
        //UI, INPUT AND ASSETMANAGER INSTANCES
        this.ui = new UI();
        this.ui.fullscreenBtn.addEventListener('click', ()=>{
            this.toggleFullscreen();
        });
        this.input = new Input(this);
        this.assetManager = new AssetManager(this);

        //MAP, PLAYER AND CAMERA
        this.map = new Map(this);
        //this.backdrop = new Map(this);
        //this.background = new Map(this);
        
        this.player = new Hero(this);
        this.camera = new Camera(this);
        this.camera.follow(this.player);
        
        //layers
        this.layer0 = new MapLayer(this, 0.3);
        this.layer0.setWorld(this.assetManager.images[0]);
        this.layer1 = new MapLayer(this, 0.3);
        this.layer1.setWorld(this.assetManager.images[1]);
        this.layer2 = new MapLayer(this, 0.8);
        this.layer2.setWorld(this.assetManager.images[2]);
        this.layer3 = new MapLayer(this, 0.3);
        this.layer3.setWorld(this.assetManager.images[3]);
        this.layer4 = new MapLayer(this, 0.8);
        this.layer4.setWorld(this.assetManager.images[4]);
        this.layer5 = new MapLayer(this, 0.8);
        this.layer5.setWorld(this.assetManager.images[5]);
        this.layer6 = new MapLayer(this, 0.8);
        this.layer6.setWorld(this.assetManager.images[6]);
        this.layer7 = new MapLayer(this, 0.8);
        this.layer7.setWorld(this.assetManager.images[7]);
        
        this.layers = [this.layer0, this.layer1, this.layer2, this.layer3, this.layer4, this.layer5, this.layer6, this.layer7 ]
        //game rows and columns
        this.rows = undefined;
        this.columns = undefined;
        //collisionBlock instance
        //collisonblocks data
        //PAUSE AND PLAY
        this.paused = false;
        //DEBUG MODE
        this.debug = false;
        //BATTLE ZONE DIMENSION
        //this is temporary; later, each enemy type will have different battle zone ranges
        this.battleZone = 250; //a square battle zone, 300 width x 300 height
        //ENEMY POOLS
        
        //LEVELS
        // all enemies for the entire game duration created here:
        
        
        //STATE MACHINES
        //hero and enemy state machines

        //AUDIO INPUT
                
        //TOGGLE FULLSCREEN AND DEBUG MODES
        this.ui.fullscreenBtn.addEventListener('click', ()=>{
            this.toggleFullscreen();
        });
        this.ui.play_specialBtn.addEventListener('mouseup', () => {
            this.debug = !this.debug;
        });
        
    }
    
    render(ctx, deltaTime){
        ctx.clearRect(0,0, this.width, this.height);
        this.layers.forEach(layer=>{layer.render(ctx)})
        this.map.render(ctx)
        this.player.render(ctx);
    }

    update(ctx, deltaTime){
        this.camera.update(deltaTime);
        this.player.update(deltaTime);
    }
    toggleFullscreen(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }else if(document.exitFullscreen){
            document.exitFullscreen();
        }
    } 
}