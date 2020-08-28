import React from 'react';
import './App.css';



function Wyr() {
  return (
    <div class="game">
    <p id="one">Would you rather?</p>
    <button onclick="changeColor('blue');">Never be able to speak</button>
    or
    <button onclick="changeColor('red');">Never be able to read</button>
    
   <p id="two">Would you rather?</p>
    <button onclick="colorChange('blue');"> Have one real get out of jail free card</button>
    or
    <button onclick="colorChange('red');">A key that opens any door</button>
      
      <p id="three">Would you rather?</p>
    <button onclick="three('blue');">Know the history of every object you touched</button>
    or
    <button onclick="three('red');">be able to talk to animals</button>
      
      <p id="four">Would you rather?</p>
    <button onclick="four('blue');">Be able to talk to land animals</button>
    or
    <button onclick="four('red');">Animals that live under the water</button>
      
      <p id="mom">Would you rather?</p>
    <button onclick="mom('blue');">Have all traffic lights you approach be green</button>
    or
    <button onclick="mom('red');">Never have to stand in line again</button>
      
      <p id="tea">Would you rather?</p>
    <button onclick="tea('blue');">Give up all drinks except for water</button>
    or
    <button onclick="tea('red');">Give up eating anything that was cooked in an oven</button> 
      
      <p id="future">Would you rather?</p>
      <button onclick="future('blue');">Be able to see 10 minutes into your own future</button>
        or
      <button onclick="future('red')">10 minutes into the future of anyone but yourself</button>
      
      <p id="job">Would you rather?</p>
      <button onclick="job('blue');">Have an easy job working for someone else</button>
        or
      <button onclick="job('red')">Work for yourself but work incredibly hard</button>
      
       <p id="famous">Would you rather?</p>
      <button onclick="famous('blue')">Be the first person to explore a planet</button>
        or
      <button onclick="famous('red');">Be the inventor of a drug that cures a deadly disease</button>
      
      <p id="age">Would you rather?</p>
      <button onclick="age('blue');">Go back to age 5 with everything you know now</button>
        or
      <button onclick="age('red');">Know now everything your future self will learn</button>
      
      <p id="power">Would you rather?</p>
      <button onclick="power('blue');">Be able to control animals (but not humans) with your mind</button>
        or
      <button onclick="power('red');">Control electronics with your mind</button>
      
      <p id="mind">Would you rather?</p>
      <button onclick="mind('blue');">See what was behind every closed door</button>
        or
      <button onclick="mind('red');">Be able to guess the combination of every safe on the first try</button>
      
      <p id="speed">Would you rather?</p>
      <button onclick="speed('blue');">Be able to dodge anything no matter how fast it’s moving</button>
        or
      <button onclick="speed('red');">Be able to ask any three questions and have them answered accurately</button>
      
      <p id="ok">Would you rather?</p>
      <button onclick="ok('blue');">Be forced to dance every time you heard music</button>
        or
      <button onclick="ok('red');">Forced to sing along to any song you heard</button>
      
      <p id="final">Would you rather?</p>
      <button onclick="final('blue');">Have all your clothes fit perfectly</button>
        or
      <button onclick="final('red');">Have the most comfortable pillow, blankets, and sheets in existence</button>
    </div>
    
  );
function wouldYouRather() {
    function changeColor(newColor) {
        var elem = document.getElementById('one');
        elem.style.color = newColor;
      }
      
      function colorChange(newColor) {
        var elem = document.getElementById('two');
        elem.style.color = newColor;
      }
      
      function three(newColor) {
        var elem = document.getElementById('three');
        elem.style.color = newColor;
      }
      
      function four(newColor) {
        var elem = document.getElementById('four');
        elem.style.color = newColor;
      }
      
      function mom(newColor) {
        var elem = document.getElementById('mom');
        elem.style.color = newColor;
      }
      
      function tea(newColor) {
        var elem = document.getElementById('tea');
        elem.style.color = newColor;
      }
      
      function future(newColor) {
        var elem = document.getElementById('future');
        elem.style.color = newColor;
      }
      
      function job(newColor) {
        var elem = document.getElementById('job');
        elem.style.color = newColor;
      }
      
      function famous(newColor) {
        var elem = document.getElementById('famous');
        elem.style.color = newColor;
      }
      
      function age(newColor) {
        var elem = document.getElementById('age');
        elem.style.color = newColor;
      }
      
      function power(newColor) {
        var elem = document.getElementById('power');
        elem.style.color = newColor;
      }
      
      function mind(newColor) {
        var elem = document.getElementById('mind');
        elem.style.color = newColor;
      }
      
      function speed(newColor) {
        var elem = document.getElementById('speed');
        elem.style.color = newColor;
      }
      
      function ok(newColor) {
        var elem = document.getElementById('ok');
        elem.style.color = newColor;
      }
      
      function final(newColor) {
        var elem = document.getElementById('final');
        elem.style.color = newColor;
      }
} 
}

export default Wyr;