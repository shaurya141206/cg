var database,form,user;
var peopleCount = 0;

function setup() {
    createCanvas(1000, 1100);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();
user.getCount();
}

function draw() {
    background("lightpink");
    
  }