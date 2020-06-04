class Form {

    constructor() {
        this.title= createElement('h2')
        this.title.html("quiz")
        this.input = createInput("Name");
        
        this.button = createButton('Submit');

        this.greeting = createElement ( "h3" ) ;
        this.greeting . html ( " 1) did you enjoy spending time with your family during the lockdown?" ) ;
         
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        
        this.greeting2 = createElement ( "h3" ) ;
        this.greeting2 . html ( " 2) do you try and avoid going outside as much as posible?" )  ;
       
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        
        this.greeting3 = createElement ( "h3" ) ;
        this.greeting3 . html ( " 3) Have you used your time productively and effectively ?" ) ;
       
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
    }


    display() {
        this.title.position(130, 0);
        this.input.position(650, 50)
        this.button.position(550,650)
        this.greeting . position ( 330 , 100 ) ;
        this.radio.position(550,160)
        this.greeting2 . position ( 330 , 250 ) ;
        this.radio1.position(550,310)
        this.greeting3 . position ( 330 , 400 ) ;
        this.radio2.position(550,460)

        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            this.greeting.hide();
            this.radio.hide();
            this.greeting2.hide();
            this.radio1.hide();
            this.greeting3.hide();
            this.radio2.hide();
           
           user.input = this.input.value();
            
            user.radio= this.radio.value();
            user.radio1= this.radio1.value();
            user.radio2= this.radio2.value();
           
            peopleCount += 1;
            user.index=peopleCount;
            this.greeting.html('thanks for the submission')
            this.greeting.position(200,200)
            user.update();
            user.updateCount(peopleCount);

            var thanks = createElement('h3')
            thanks.html('thanks for submission')
            thanks.position(500,200)
        });

    }
}