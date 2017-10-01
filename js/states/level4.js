var Level4 = {
    preload:function(){
        game.load.image("shell1", "assets/shell1.png")
        game.load.image("goomba", "assets/goomba.png")
        game.load.image("shell2", "assets/shell2.png")
        
    },
    create:function(){
     this.background= game.add.sprite(0,0,"beach")
        this.background.width = game.width  
        
       
    
        
        
        this.ghost = game.add.sprite(50,80,"goomba")
        this.ghost.scale.setTo(0.5)
        this.game.physics.arcade.enable(this.ghost)
        this.ghost.body.allowGravity = false
        this.ghost.body.velocity.x=100
        this.ghost.body.velocity.y = 100
        this.ghost.body.collideWorldBounds = true
        this.ghost.body.bounce.x = 1
        this.ghost.body.bounce.y = 1
        
        this.cursors = game.input.keyboard.createCursorKeys()
        
        this.hut1 = game.add.sprite(10,465,"hut")
        this.hut1.scale.setTo(0.2)
        
        
        this.hut2 = game.add.sprite(300,465,"hut")
        this.hut2.scale.setTo(0.2)
        
        this.hut3 = game.add.sprite(650,465,"hut")
        this.hut3.scale.setTo(0.2)
        
        this.player = game.add.sprite(9,9,"player")
        this.player.scale.setTo(0.5)
        this.game.physics.arcade.enable(this.player)
        this.player.body.collideWorldBounds = true;
        
        
        this.shells = game.add.group()
        this.enemyShells = game.add.group()
        this.damageCounter = 1000
        
        this.enemytimer = game.time.events.loop(3000,function(){
            this.fightback()
        },this)
        
        this.player.customProperties = {goRight:false,goLeft:false,attack:false}
        createOnScreenControlsLevel4(this.player);
        
        
    },
    update:function(){
        this.game.physics.arcade.overlap(this.ghost,this.shells,function(ghost,shell){
         shell.kill()
        this.damageCounter -= 1
            console.log("currentDamage " + this.damageCounter)
            if(this.damageCounter <= 0){
                ghost.kill()
                game.time.events.add(3000,function(){
                    game.state.start("Level5")
                },this)
            }
        },null,this)
        this.player.body.velocity.x =0
        if(this.cursors.right.isDown || this.player.customProperties.goRight){
            this.player.body.velocity.x = 300
            this.player.scale.setTo(0.5)
        } else if (this.cursors.left.isDown || this.player.customProperties.goLeft){
            this.player.body.velocity.x = -300
            this.player.scale.setTo(-0.5,0.5)
        }else if (this.cursors.up.isDown || this.player.customProperties.attack){
            this.shootShells()
        }
    },
    shootShells: function(){
        var shell = game.add.sprite(this.player.x,this.player.y,"shell1")
        shell.scale.setTo(0.2)
        game.physics.arcade.enable(shell)
        shell.body.velocity.y = -800
        shell.checkWorldBounds = true
        shell.outOfBoundsKill = true
        this.shells.add(shell)   
    },
    fightback:function(){
        var shell = game.add.sprite(this.ghost.x,this.ghost.y,"shell2")
        shell.scale.setTo(0.2)
         game.physics.arcade.enable(shell)
        shell.body.velocity.y = -600
        shell.checkWorldBounds = true
        //shell.outOfBoundsKill = true
        this.enemyShells.add(shell)  
        
        game.time.events.add(2000,function(){
            this.enemyShells.forEachAlive(function(e){
            e.kill()            
        })
        },this)
    },
    
    
}
