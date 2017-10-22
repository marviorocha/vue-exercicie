new Vue ({
  el:"#app",

  data:{
    playerHealth:100,
    mosterHealth:100,
    gameIsrunning: false
  },
  methods:{
      startGame: function(){
        this.gameIsrunning = true;
        this.mosterHealth = 100;
        this.playerHealth = 100;
      },
      attack: function() {

       this.mosterHealth -= this.calculeteDamage(10,3);

       if(this.checkWin()){
         return
       }

       this.mosterAttack();

        },

        specialattack:function(){

          this.mosterHealth -= this.calculeteDamage(10,20);
          if(this.checkWin()){
            return
          }
           this.mosterAttack();
        },

        mosterAttack: function(){
          this.playerHealth -= this.calculeteDamage(5,12);
          if (this.playerHealth <= 0) {
            alert("You Lost!")
          }
          this.checkWin();
        },

        heal: function(){
          if(this.playerHealth >= 90){
              this.playerHealth += 10;
          }else {
              this.playerHealth =100;
          }
           this.mosterAttack();

        },

        giveUp: function(){
          this.gameIsrunning = false;
        },

        calculeteDamage: function(max, min){
        return Math.max(Math.floor(Math.random() * max) + 1, min)
        },

        checkWin: function(){
          if(this.mosterHealth <=0 ){
           if (confirm('You Win! Play New Game')) {
             this.startGame();
           }else {
             this.gameIsrunning = false;
           }
           return true;
         } else if (this.playerHealth <=0 ) {
           if (confirm('You Lost! Play New Game')) {
             this.startGame();
           }else {
             this.gameIsrunning = false;
           }
           return true;

         }
          return false;
        }


  }

}); // end vue instacie
