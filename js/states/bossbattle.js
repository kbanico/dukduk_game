var Level6 ={
    preload:function(){
        game.load.image("octopus","assets/squid.png")
        game.load.image("background","assets/ocean.png")
        game.load.image("brown","assets/brown.png")
        game.load.image("rain","assets/rain.png")
        this.game.load.image("left","assets/left.png")
        this.game.load.image("right","assets/right.png")
        this.game.load.image("a","assets/a.png")
    },
    create:function(){
       
        
        this.background = game.add.sprite(0,0,"background")
        this.background.height = game.height;
        this.background.width = game.width
       
        
        
        this.player = game.add.sprite(100,400,"player")
        this.player.scale.setTo(.5)
        game.physics.arcade.enable(this.player)
        this.player.anchor.setTo(0.5)
        //this.player.body.allowGravity = false
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.player.body.collideWorldBounds = true
        this.player.customProperties = {}
        
        //group of tiles
        this.tiles = game.add.group();
        this.createPlatform(4,250,300,"brown",this.tiles)
        this.createPlatform(3,50,500,"brown",this.tiles)
        this.createPlatform(3,550,500,"brown",this.tiles)
        
        
        this.squid = game.add.sprite(10,10,"octopus")
        this.squid.scale.setTo(.5   )
        game.physics.arcade.enable(this.squid)
        this.squid.body.allowGravity = false
        this.squid.body.velocity.x = 200;
        this.squid.body.collideWorldBounds = true
        this.squid.body.bounce.x = 1
        this.squid.body.velocity.y = 200;
        
        this.emitter = game.add.emitter(0,0,100);
        this.emitter.makeParticles("rain");
        this.emitter.maxParticleSpeed = new Phaser.Point(-100,50);
        this.emitter.minParticleSpeed = new Phaser.Point(-200,-50);
        
        this.createOnScreenControls();
        
        this.author = game.add.text(game.world.centerX,15,"Game Created By: Rae Gascon")
        this.author.anchor.setTo(0.5)
     
    },
    update:function(){
        this.physics.arcade.overlap(this.player,this.squid,function(){
            if(this.squid.scale.x < 0.00){
                this.squid.kill()
            }
            if(this.squid.body.touching.up)
                {
                    console.log("playertouchingsquid")
                    this.squid.body.enable = false;
                    this.squid.scale.x-=0.1
                    this.squid.scale.y-=0.1
                    this.squid.alpha = 0.5
                    var tween = game.add.tween(this.squid)
                    tween.to({x:Math.floor(Math.random() * game.width),y:Math.floor(Math.random() * game.height)}).start()
                    tween.onComplete.add(function(){
                        this.squid.alpha = 1;
                        this.squid.body.enable = true;
                    },this)
                
                }else{
                    this.player.body.enable = false;
                    this.player.alpha = 0.5;
                    var tween = game.add.tween(this.player)
                    tween.to({x:Math.floor(Math.random() * game.width),y:Math.floor(Math.random() * game.height)}).start()
                    tween.onComplete.add(function(){
                        this.player.alpha = 1;
                        this.player.body.enable = true;
                    },this)
                    
                }
            
            
            
        },null,this);
        
        //this.physics.arcade.collide(this.squid,this.tiles)
        this.physics.arcade.collide(this.player,this.tiles)
        
        
        
        this.player.body.velocity.x = 0
        //this.player.body.velocity.y = 0
        
        if(this.squid.y >= 400){
            this.squid.body.velocity.y = -100
        }else if(this.squid.y <= 10){
            this.squid.body.velocity.y = 100
        }
        
        if (this.cursors.up.isDown || this.player.customProperties.jump){
            this.player.body.velocity.y = -300
            this.emitter.y = this.player.y + 30;
            this.emitter.x = this.player.x;
            this.emitter.emitParticle();
        
        }
          if(this.cursors.down.isDown){
              this.player.body.velocity.y = 300
          }
          if(this.cursors.right.isDown || this.player.customProperties.goRight){
              this.player.body.velocity.x = 300
               this.player.scale.x = .5
          } 
        if(this.cursors.left.isDown || this.player.customProperties.goLeft){
            this.player.body.velocity.x = -300
            this.player.scale.x = -.5
        }
        
       if(this.squid.y<=10){
           this.squid.y = 30
       }else if(this.squid.y > game.height - 50){
           this.squid.y = game.height - 70
       }
        
    },
    createPlatform:function(numTiles,x,y,key,group){
        var tile = null;
        for(var i = 0; i < numTiles; i++){
            tile = game.add.sprite(x + (i * 63), y,key)
            tile.scale.setTo(0.5)
            game.physics.arcade.enable(tile)
            tile.body.allowGravity = false;
            tile.body.immovable = true;
            group.add(tile)
            
        }
    },
    createOnScreenControls:function(){
        this.right = game.add.button(100,game.height - 150,"right")
        this.left = game.add.button(0,game.height - 150,"left")
        this.a = game.add.button(game.width -150,game.height-120,"a")
        
        this.left.events.onInputDown.add(function(){
        this.player.customProperties.goLeft = true
    },this) 
    
        this.left.events.onInputUp.add(function(){
        this.player.customProperties.goLeft = false
    },this) 
        
        
        this.left.events.onInputOver.add(function(){
        this.player.customProperties.goLeft = true
    },this) 
    
        this.left.events.onInputOut.add(function(){
        this.player.customProperties.goLeft = false
    },this) 
        
    
        this.right.events.onInputDown.add(function(){
        this.player.customProperties.goRight = true
    },this) 
    
        this.right.events.onInputUp.add(function(){
        this.player.customProperties.goRight = false
    },this) 
        
        this.right.events.onInputOver.add(function(){
        this.player.customProperties.goRight = true
    },this) 
    
        this.right.events.onInputOut.add(function(){
        this.player.customProperties.goRight = false
    },this) 
        
        
        this.a.events.onInputDown.add(function(){
        this.player.customProperties.jump = true
    },this) 
    
        this.a.events.onInputUp.add(function(){
        this.player.customProperties.jump = false
    },this) 
        
        
         this.a.events.onInputOver.add(function(){
        this.player.customProperties.jump = true
    },this) 
    
        this.a.events.onInputOut.add(function(){
        this.player.customProperties.jump = false
    },this) 
    
        
    }
    
}