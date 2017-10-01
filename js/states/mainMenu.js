var MainMenu = {
    create:function(){
        this.background = game.add.sprite(0,0,"mainBackground")
        this.background.height = game.height
        this.background.width = game.width
        
        
        var bmd= game.add.bitmapData(game.width,game.height);
        bmd.ctx.beginPath();
        bmd.ctx.fillStyle = "#000";
        bmd.ctx.fillRect(0,0,game.width,game.height);
        
        this.overlay = game.add.sprite(0,0,bmd);
        this.overlay.alpha = 0.4
        
        this.logo = game.add.text(game.width / 2,50,"DUKDUK GAME\n   -kjdesigns-",{font:"24px Arial",fill:"#fff"})
        this.logo.anchor.setTo(0.5)
        
        this.level1 = game.add.sprite(100,100,"pLevel1")
        this.level1.anchor.setTo(0.5);
        this.level1.scale.setTo(0.2)
        this.level1.inputEnabled = true;
        this.level1.events.onInputDown.add(function(){
            game.state.start("Level1")
        },this)
        
        this.level1Lable = game.add.text(100,120,"LEVEL 1",{font:"18px Arial"})
        
        
        this.level2 = game.add.sprite(650,100,"pLevel2")
        this.level2.anchor.setTo(0.5);
        this.level2.scale.setTo(0.2)
        this.level2.inputEnabled = true;
        this.level2.events.onInputDown.add(function(){
            game.state.start("Level2")
        },this)
        
        this.level2Lable = game.add.text(650,120,"LEVEL 2",{font:"18px Arial"})
        
        
        this.level3 = game.add.sprite(100,250,"pLevel3")
        this.level3.anchor.setTo(0.5);
        this.level3.scale.setTo(0.2)
        this.level3.inputEnabled = true;
        this.level3.events.onInputDown.add(function(){
            game.state.start("Level3")
        },this)
        
        this.level3Lable = game.add.text(100,260,"LEVEL 3",{font:"18px Arial"})
        
        
        
        this.level4 = game.add.sprite(650,250,"pLevel4")
        this.level4.anchor.setTo(0.5);
        this.level4.scale.setTo(0.2)
        this.level4.inputEnabled = true;
        this.level4.events.onInputDown.add(function(){
            game.state.start("Level4")
        },this)
        
        this.level4Lable = game.add.text(650,260,"LEVEL 4",{font:"18px Arial"})
        
        
    },
    
}








