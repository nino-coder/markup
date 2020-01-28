import React, {Component} from 'react'
import linearProgressBar from '../css_files/linearProgressBar.css'
import { FaInfoCircle } from 'react-icons/fa';

export default class LinearProgressBar extends Component{
    constructor(props) {
        super(props)
        this.state= {
          percentage:64,
          hover:false,
        }
        this.hoverOn=this.hoverOn.bind(this);
        this.hoverOff=this.hoverOff.bind(this);
      }
    hoverOn(){
        this.setState({hover:true});
    }
    hoverOff(){
        this.setState({hover:false});
    }
    render(){
        return(
            <>
            <div >
            <div style={{'whiteSpace':'nowrap'}}>
            <p>პროგრესი</p>
           <FaInfoCircle id="info"
            onMouseOver={this.hoverOn}
            onMouseOut={this.hoverOff}/></div>
            {this.state.hover ? (
                <span className='info-hover-progress'>
                    <p>მიმდინარე გაკვეთილის რამდენი პროცენტი გაქვს შესრულებული</p>
                </span>
            ) : null}
            </div>
             <strong><p className="percentage">{this.state.percentage}  %</p></strong>
            <div className="progress-bar">
                <div className="linear-progress-bar" style={{"width":`${this.state.percentage}%`}}></div>
          </div>
          </>
        );
    }
}