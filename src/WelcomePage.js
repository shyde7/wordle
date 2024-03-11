import './App.css';
import wordleLogo from './assets/wordleLogo.png'; // Import the image
import React from 'react';

function WelcomePage(){

    function returnWordleLogo(){
        return <img src={wordleLogo} alt="Wordle Logo" />;  }
    
      function howToPlayOnPress(){}
         


      function logInOnPress(){
          console.log("Log In button pressed");
      }
    
      function startGameOnPress(){
        console.log("Start Game button pressed");
      }

        function returnNumOfWordleGames(){
            let numOfWordleGames = 1212212;
            
            return numOfWordleGames;
        }

        function returnTodaysDate(){
            let today = new Date();
            let month = today.getMonth()+1;
        
            switch(month){
              case 1:
                month = "January";
                break;
              case 2:
                month = "February";
                break;
              case 3:
                month = "March";
                break;
              case 4:
                month = "April";
                break;
              case 5:
                month = "May";
                break;
              case 6:
                month = "June";
                break;
              case 7:
                month = "July";
                break;
              case 8:
                month = "August";
                break;
              case 9:
                month = "September";
                break;
              case 10:
                month = "October";
                break;
              case 11:
                month = "November";
                break;
              case 12:
                month = "December";
                break;
              default:
                month = "January";
            }
            
            let date = month + " " +today.getDate() + ", " + today.getFullYear();
            return date;
        }

    return (

        <div className="welcome-page">
          {returnWordleLogo()}
          <h1>Slurdle</h1>
          <p> Get 6 chances to guess a 5-letter slur.</p>
    
    
          <div className = "welcome-page-button-container">
            <button onClick = {howToPlayOnPress} className = "how-to-play" > How to Play</button>
            <button className = "log-in">Log In </button>
            <button className = "start-game">Start Game</button>
          </div>
    
          <div className = "welcome-page-footer">
          <h1> {returnTodaysDate()} </h1>
          <p> No. {returnNumOfWordleGames()} </p>
          <p> Wordle Clone by Sean Hyde</p>
          </div>
    
        </div>
      );
}

export default WelcomePage;
