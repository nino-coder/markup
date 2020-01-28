import React, {Component} from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaInfoCircle } from 'react-icons/fa';
import circularProgressBar from '../css_files/circularProgressBar.css'

export default class CircularProgressBar extends Component{
    constructor(props) {
        super(props)
        this.state= {
          currentPoint:5.9,
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
            <div style={{ "marginLeft": "35px"}}>
                <div style={{'position':"relative"}} >
                <div style={{'whiteSpace':'nowrap'}}>
                <p className="level">ცოდნის დონე</p>
                <FaInfoCircle className="info"
                onMouseOver={this.hoverOn}
                onMouseOut={this.hoverOff}/></div>
                {this.state.hover ? (
                    <span className='info-hover'>
                      <p>  რა ქულაზე იცი მიმდინარე გაკვეთილი</p>
                    </span>
                ) : null}
                </div>
                <CircularProgressbar
                    value={this.state.currentPoint}
                    text={`${this.state.currentPoint}`}
                    maxValue={10}
                    strokeWidth={15} 
                />
            </div>
        );
    }
}