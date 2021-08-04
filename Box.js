class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.0,
          //'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.body.visibility=250;

      
    }
    
    display(){
       if (this.body.speed<3) { 
         var angle = this.body.angle;
          var pos= this.body.position;
           push(); 
           translate (pos.x, pos.y) ; 
           rectMode (CENTER);
            rect(0,0,this.width, this.height); 
            rotate (angle); 
            pop();
           } 
           else{ World.remove(world, this.body); 
            push(); 
            this.Visibility = this. Visibility - 5 ;
             tint(250, this.Visibility)
              rect (0,0, this.width, this.height); 
              pop();
              score= score+1;
             } 
             
            } 
            score() { if(this.body.Visibility<0 && this.body. Visibility >-105){
              score++;
              }
             }

    
  

  };
  