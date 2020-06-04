class User {
    constructor(){
        this.index = null;
        this.email = null
        this.input = null;
        this.radio = null;
        this.radio1 = null;
        this.radio2 = null;
    }
  
    getCount(){
        var playerCountRef = database.ref('peopleCount');
        playerCountRef.on("value",(data)=>{
          peopleCount = data.val();
        })
      }
    
  
    updateCount(count){
      database.ref('/').update({
        peopleCount: count
      });
    }
  
     update(){
      var peopleIndex = "players/people" + this.index;
      database.ref(peopleIndex).set({
        input: this.input,
        email: this.email,
        radio : this.radio,
         radio1 : this.radio1,
         radio2 : this.radio2
      
      });
    }
   
  }