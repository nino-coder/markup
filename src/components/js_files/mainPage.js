import React, {Component} from 'react';
import mainPage from '../css_files/mainPage.css'
import CircularProgressBar from './circularProgressBar';
import LinearProgressBar from './linearProgressBar'
 export default class MainPage extends Component{
    render(){
        return(
            <div className="main-container">
                <div className="container">
                    <h4>მიმდინარე გაკვეთილი</h4>
                    <h2>სოციალური სტრუქტურები: გვარი, თემი, პირველყოფილი რელიგია და ხელოვნება. "სოციალურ-ეკონომიკური სისტემა"</h2>
                    <div className="progress-bars"> 
                        <div id="circular-progress-bar">
                            <CircularProgressBar style={{'margin-top':'30px'}}/>
                        </div>
                        <div id="linearProgressBar"
                         style={{'max-width': '500px'}}
                         >
                            <LinearProgressBar/>
                        </div>  
                    </div>
                    <button className="continue">გაგრძელება</button> 
                </div>   
            </div>
        );
    }
}