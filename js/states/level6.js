var Level6 = {
    preload:function(){
        game.load.image("vbackground","assets/vbackground.png")
        game.load.image("vb","assets/vb.png")
        game.load.image("vahna","assets/vahna.png")
        game.load.image("icon","assets/icon.png")
        
    },
    create:function(){
       this.background= game.add.sprite(0,0,"vbackground")
        this.background.width =game.width
        this.background.height=game.height
        
        this.player=game.add.sprite(0,200,"vahna");
        this.player.scale.setTo(0.5)
        this.game.physics.arcade.enable(this.player)
        this.player.body.collideWorldBounds = true;
        
        this.player.body.setSize(100, 500, 230, 20)
        
        this.missles= game.add.group()
        
        this.test = game.add.sprite(100,0,"icon")
        this.coins = game.add.group()
        
        this.bullittimer=game.time.events.loop(1000,function(){
            var randomY = Math.floor(Math.random() * this.game.height);
            
            var bullit=game.add.sprite(game.width,randomY,"vb")
            this.game.physics.arcade.enable(bullit)
            bullit.body.allowGravity=false
            bullit.body.velocity.x= -300
            this.missles.add(bullit)
        },this)
        
        
        this.cointimer=game.time.events.loop(1000,function(){
            var randomY = Math.floor(Math.random() * this.game.width);
            
            var coin=game.add.sprite(0,0,"icon")
            //this.game.physics.arcade.enable(coin)
           //coin.body.allowGravity=false
           //coin.body.velocity.x= -300
            this.coins.add(coin)
        },this)
        
        
        
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        
        
        
    },
    update:function(){
        this.game.physics.arcade.collide(this.player,this.missles,null,function(player,missile){
            missile.kill()
        },this)
        
        if(this.cursors.left.isDown){
            this.player.scale.setTo(-0.5,0.5)
            this.player.body.velocity.x = -300
        }
        if(this.cursors.right.isDown){
            this.player.body.velocity.x = 300
            this.player.scale.setTo(0.5)
        }
        if(this.cursors.up.isDown){
            this.player.body.velocity.y = -300
        }
        
            
           
    },
   render:function(){
       game.debug.body(this.player);
   }
    
}
