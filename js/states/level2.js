var Level2 = {
    init:function(){
               
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;  
    },
    preload:function(){
        game.load.image("wackacrab","assets/wackacrab.png");
        game.load.image("shovel","assets/shovel.png")
    },
    create:function(){
        
       
        this.background = game.add.sprite(0,0,"wackacrab")
        this.background.height = game.height
        this.background.width = game.width
   
        this.positions = [{x:210,y:150},{x:500,y:150},{x:210,y:280},{x:210,y:380},{x:500,y:280},{x:500,y:380}]

        
       
        this.shovel = game.add.sprite(300,150,"shovel")
        this.shovel.inputEnabled = true;
        this.shovel.input.enableDrag(true)
        
         this.game.physics.arcade.enable(this.shovel)

        
        
        this.shovel.body.allowGravity = false;
        this.shovel.body.setSize(50,50,70,50)
       
       
        //this.showRandomCrab()
        this.crabTimer = game.time.events.loop(2000,this.showRandomCrab,this)
        
        //add a crab group
        this.crabGroup = this.game.add.group()
        this.score = 0
        this.scoreLabel = game.add.text(20,20,"your score is : " + this.score)
        
        
    },
    update:function(){
        this.game.physics.arcade.overlap(this.crabGroup,this.shovel,null,this.removeCrab,this)
        if(this.score >= 50){
            this.scoreLabel.text = "you win, oh yeah!"
            game.time.events.add(3000,function(){game.state.start("Level3")},this)
        }
    },
    removeCrab:function(shovel,crab){
        crab.kill()
        this.score++
        this.scoreLabel.text = "your score is : " + this.score
    },
   /* render:function(){
        this.game.debug.body(this.shovel)
        //this.game.debug.body(this.crab)
        
    },*/
    showRandomCrab:function(){
         // random genration
        var randomPopUp = game.rnd.integerInRange(0,5)
        console.log(randomPopUp);
        crab = game.add.sprite(this.positions[randomPopUp].x,this.positions[randomPopUp].y,"crab")
        this.game.physics.arcade.enable(crab)
        crab.scale.setTo(0.3)
        crab.body.allowGravity = false;
         crab.body.setSize(200,200,30,70)
        var animation = game.add.tween(crab)
        this.crabGroup.add(crab)
        animation.to({x:game.width,y:game.height},5000).start()
    }
}