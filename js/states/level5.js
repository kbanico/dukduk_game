var Level5 = {
    preload:function(){
        game.load.image("jungle","assets/jungle 2.png")
        this.game.load.spritesheet("spider","assets/spider1.png",605,650)
        game.load.image("uglyrae","assets/uglyweb.png")
        this.game.load.image("fireweb","assets/fireweb.png")
        
    },
    create:function(){
        this.background=game.add.sprite(0,0, "jungle")
        this.background.width=game.width
        
        this.spider= game.add.sprite(0,0,"spider")
        this.game.physics.arcade.enable(this.spider)
        this.spider.scale.setTo(0.5)
        this.spider.animations.add("crawl",[0,1,0,1],5,true)
        this.spider.body.allowGravity= false
        this.spider.animations.play("crawl")
        
        this.spider.body.bounce.setTo(1)
        this.spider.body.velocity.x= 300
        this.spider.body.collideWorldBounds= true
        this.spider.body.velocity.y = 300
        
        
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
       
        this.player = game.add.sprite(300,5,"player");
        this.player.scale.setTo(.5,.5)
        this.player.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        
        //this.player.animations.add("walk",[0,1,2,0,1,2],10,true)
        
        this.player.body.setSize(100,100,20,60)
        this.player.customProperties = {}
        
        
        
        
        
         this.enemytimer = game.time.events.loop(3000,function(){
            this.shootweb()
        },this)
        
        
        
        
    },
    update:function(){
       this.player.body.velocity.x =0
       
        if(this.cursors.right.isDown || this.player.customProperties.goRight){
            this.player.body.velocity.x = 300
            this.player.scale.setTo(0.5)
            this.player.animations.play("walk")
        } else if (this.cursors.left.isDown || this.player.customProperties.goLeft){
            this.player.body.velocity.x = -300
            this.player.scale.setTo(-0.5,0.5)
            this.player.animations.play("walk")
        }else {
             this.player.animations.stop()
        }
    },
    shootweb:function(){
        var web = game.add.sprite(this.spider.x,this.spider.y,"fireweb")
        this.game.physics.arcade.enable(web)
        
    }
    
}
