var PreloadState = {
    preload:function(){
        this.preloadBg = this.game.add.sprite(game.world.centerX,game.world.centerY,"ibb2");
       
        this.preloadBar = this.game.add.sprite(game.world.centerX,game.world.centerY,"ibb") ;
        this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.spritesheet("player","assets/player.png",130,170);
        this.game.load.spritesheet("crab","assets/crab_spritesheet.png",400,348)
        
        //load tilemap image
        this.game.load.tilemap("level1","assets/levels/level1.json",null,Phaser.Tilemap.TILED_JSON)
        this.game.load.image("gameTiles","assets/tileset.png");
        this.game.load.image("minecraftTiles","assets/spritesheet_tiles.png");
        
        //this.game.load.image("crab","assets/crab.png");
        
        this.game.load.atlasXML('items', 'assets/spritesheet_items.png', 'assets/spritesheet_items.xml');

        this.game.load.image("environment","assets/Environment.png");
        this.game.load.image("hut","assets/Hut.png")
        
        this.game.load.image("goodjob","assets/goodjob.png")
        
        //sounds
          
        this.game.load.audio("drill","assets/sounds/drill.ogg");
        this.game.load.audio("oh_yeah","assets/sounds/oh_yeah.ogg");
        this.game.load.audio("blue","assets/sounds/blue.ogg");
        this.game.load.audio("brown","assets/sounds/brown.ogg");
        this.game.load.audio("green","assets/sounds/green.ogg");
        this.game.load.audio("red","assets/sounds/red.ogg");
        this.game.load.audio("pink","assets/sounds/pink.ogg");
        
        
    },
    create:function(){
        this.game.state.start("Level1");
    }
}