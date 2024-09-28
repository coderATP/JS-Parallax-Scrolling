
export class AssetManager{
    constructor(game){
        this.game = game;
        this.imagePaths = [
            "assets/backgrounds/NATURE/NATURE_1/1.png", // 0
            "assets/backgrounds/NATURE/NATURE_1/2.png", // 1
            "assets/backgrounds/NATURE/NATURE_1/3.png", // 2
            "assets/backgrounds/NATURE/NATURE_1/4.png", // 3
            "assets/backgrounds/NATURE/NATURE_1/5.png", // 4
            "assets/backgrounds/NATURE/NATURE_1/6.png", // 5
            "assets/backgrounds/NATURE/NATURE_1/7.png", // 6
            "assets/backgrounds/NATURE/NATURE_1/8.png", // 7

            "assets/backgrounds/NATURE/NATURE_1/map.png", // 8
            
            ];
        this.soundPaths = [

            ];
        this.images = [];
        this.sounds = [];
        
        this.imageDimensions = [
            [576, 324],
            [576, 324],
            [576, 324],
            [576, 324],
            [576, 324],
            [576, 324],
            [576, 324],
            [576, 324],
            [1920, 1080]
            
            ];
        
        this.loadedAssets = 0;
        this.assetsToLoad = this.soundPaths.length + this.imagePaths.length;
        this.loadImages();
        this.loadSounds();
       
        }
    
    loadImages(){
        this.imagePaths.forEach(path=>{ this.images.push( new Image() ) });
        
        this.images.forEach((img, i)=>{
            img.src = this.imagePaths[i];
            img.addEventListener('load', ()=>{
                this.loadedAssets+= 1;
                this.game.ui.loading_startBtn.innerText = this.loadedAssets + " out of " + this.assetsToLoad + " assets loaded...";
            })
        })
        
       this.loadedAssets = 0;
    }
    
    loadSounds(){
        this.soundPaths.forEach(path=>{ this.sounds.push( new Audio() ) });
        this.sounds.forEach((sound, i)=>{
            sound.src = this.soundPaths[i];
            sound.addEventListener('loadstart', ()=>{
                this.loadedAssets+= 1;
                this.game.ui.loading_startBtn.innerText = this.loadedAssets + " out of " + this.assetsToLoad + " assets loaded...";
            })
        })
        
       this.loadedAssets = 0;
    }
};