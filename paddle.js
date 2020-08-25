import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import emailjs from "emailjs-com";
//import "./paddle_game.js";





//export default function ContactUs() {


    //function sendEmail(e) {

        //e.preventDefault();

    //emailjs.sendForm('gmail', 'bobs_burgers', e.target, 'user_wiralMJRew1ARhbdp2bzt')
    //    .then((result) => {
    //        console.log(result.text);
    //    }, (error) => {
    //        console.log(error.text);
    //    });

    //    e.target.reset()
  //  }





    return(
      //source: https://thoughtbot.com/blog/pong-clone-in-javascript
      //animation frame, plus monitors if the tab is active or not
      var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) { window.setTimeout(callback, 1000/60) };

        //canvas
        var canvas = document.createElement('canvas');
        var width = 400;
        var height = 600;
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext('2d');
        //score
        var score = 0;
        //drawing the score
        function drawScore() {
          ctx.font = "16px Arial";
          ctx.fillStyle = "#000000";
          ctx.fillText("Score: "+score, 8, 20);
      }
        //our 'step' function, using the animate method
        window.onload = function() {
      	document.body.appendChild(canvas);
      	animate(step);
        };

       //the step function is responsible for three things..
       //1. updates all our objects
       //2. renders the objects
       //3. it will use the requestAnimationFrame to call the step function
       var step = function() {
      	update();
      	render();
      	animate(step);
        };

        //to get something on the screen, let's implement the update as a no-op and
        //for our render function we'll set the background of our game to #FF00FF by using
        // fillStyle and fillRect methods provided by the context:
        var update = function() {
      };

      var render = function() {
        context.fillStyle = "#FF00FF";
        context.fillRect(0, 0, width, height);
      };

      //Paddles and the ball

      //well be using an x, and y position, a width and a height. plus another set of x and y for speed
      function Paddle(x, y, width, height) {
      	this.x = x;
      	this.y = y;
      	this.width = width;
      	this.height = height;
      	this.x_speed = 0;
      	this.y_speed = 0;
        }

        Paddle.prototype.render = function() {
      	context.fillStyle = "#0000FF";
      	context.fillRect(this.x, this.y, this.width, this.height);
        };

        //Since each paddle will be controlled independently, one by the player and one by the computer AI, let's
        //create objects to represent them. The x and y coordinates are chosen to put the player at the bottom
        // (the canvas's coordinate system's origin is in the upper left hand corner) and the computer is at the top

        function Player() {
      	this.paddle = new Paddle(175, 580, 50, 10);
       }

       function Computer() {
         this.paddle = new Paddle(175, 10, 50, 10);
       }

      //rendering padddles
      Player.prototype.render = function() {
      	this.paddle.render();
        };

        Computer.prototype.render = function() {
      	this.paddle.render();
        };

        //the last object is the ball, Since the ball will be a circle, the x,y coordinates will represent the center
        //of the circle and we'll give it a radius of 5
        function Ball(x, y) {
      	this.x = x;
      	this.y = y;
      	this.x_speed = 0;
      	this.y_speed = 3;
      	this.radius = 5;
        }

        Ball.prototype.render = function() {
      	context.beginPath();
      	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
      	context.fillStyle = "#000000";
      	context.fill();
        };

        //building objects from our render funciton
        var player = new Player();
      var computer = new Computer();
      var ball = new Ball(200, 300);

      var render = function() {
        context.fillStyle = "#FF00FF";
        context.fillRect(0, 0, width, height);
        player.render();
        computer.render();
        ball.render();
      };

      //Animation
      //Let's start adding movement. we'll animate the ball so it heads towards the players paddle
      //We'll do this by changing the update from a no-op and adding an update method to the ball:
      var update = function() {
      	ball.update();
        };

        Ball.prototype.update = function() {
      	this.x += this.x_speed;
      	this.y += this.y_speed;
        };

        //since the paddles are stationary, we can make the ball bounce back and forth between them
        //by modifying our update and check to see if the ball hits the left and right hand
        //sides or the top and bottom. We'll also need to pass both of the paddles into the update method
        var update = function() {
      	ball.update(player.paddle, computer.paddle);
        };

        Ball.prototype.update = function(paddle1, paddle2) {
      	this.x += this.x_speed;
      	this.y += this.y_speed;
      	var top_x = this.x - 5;
      	var top_y = this.y - 5;
      	var bottom_x = this.x + 5;
      	var bottom_y = this.y + 5;

      	if(this.x - 5 < 0) { // hitting the left wall
      	  this.x = 5;
      	  this.x_speed = -this.x_speed;
      	} else if(this.x + 5 > 400) { // hitting the right wall
      	  this.x = 395;
      	  this.x_speed = -this.x_speed;
      	}

      	if(this.y < 0 || this.y > 600) { // a point was scored
      	  this.x_speed = 0;
      	  this.y_speed = 3;
      	  this.x = 200;
      	  this.y = 300;
      	}

      	if(top_y > 300) {
      	  if(top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
      		// hit the player's paddle
      		this.y_speed = -3;
      		this.x_speed += (paddle1.x_speed / 2);
      		this.y += this.y_speed;
      	  }
      	} else {
      	  if(top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
      		// hit the computer's paddle
      		this.y_speed = 3;
      		this.x_speed += (paddle2.x_speed / 2);
      		this.y += this.y_speed;
      	  }
      	}
        };

        // the collision detection happening is standard Axis Aligned Bounding Boxes
        // or AABB. In the code it states that if the paddle is moving when it hits the ball, the x_speed is added to the ball
        // This will cause it to move faster or slower depending on the direction of the ball and the direction of the paddle

        //Controls
        var keysDown = {};

      window.addEventListener("keydown", function(event) {
        keysDown[event.keyCode] = true;
      });

      window.addEventListener("keyup", function(event) {
        delete keysDown[event.keyCode];
      });

      //the update method of the player can now update the position of its paddle depending on which key was pressed
      var update = function() {
      	player.update();
      	ball.update(player.paddle, computer.paddle);
        };

        Player.prototype.update = function() {
      	for(var key in keysDown) {
      	  var value = Number(key);
      	  if(value == 37) { // left arrow
      		this.paddle.move(-4, 0);
      	  } else if (value == 39) { // right arrow
      		this.paddle.move(4, 0);
      	  } else {
      		this.paddle.move(0, 0);
      	  }
      	}
        };

        Paddle.prototype.move = function(x, y) {
      	this.x += x;
      	this.y += y;
      	this.x_speed = x;
      	this.y_speed = y;
      	if(this.x < 0) { // all the way to the left
      	  this.x = 0;
      	  this.x_speed = 0;
      	} else if (this.x + this.width > 400) { // all the way to the right
      	  this.x = 400 - this.width;
      	  this.x_speed = 0;
      	}
        }

        //AI
        //Now we can control our paddle and the ball will bounce around accordingly;
        //however, the computer is not very good at the game yet so we'll need to add a very simple AI.
        // For this project the computer will try its best to position itself according t othe center of the ball
        //We'll give the computer player a max speed so that we can occasionly score a point. We'll
        //need to alter the main update function as well as update the computer player:

        var update = function() {
      	player.update();
      	computer.update(ball);
      	ball.update(player.paddle, computer.paddle);
        };

        Computer.prototype.update = function(ball) {
      	var x_pos = ball.x;
      	var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
      	if(diff < 0 && diff < -4) { // max speed left
      	  diff = -5;
      	} else if(diff > 0 && diff > 4) { // max speed right
      	  diff = 5;
      	}
      	this.paddle.move(diff, 0);
      	if(this.paddle.x < 0) {
      	  this.paddle.x = 0;
      	} else if (this.paddle.x + this.paddle.width > 400) {
      	  this.paddle.x = 400 - this.paddle.width;
      	}
        };
    )


}
