import React, { Component } from 'react';

import partyPopper from '../assets/party-popper.jpg';


// Defining a custom component/class
class AgeStats extends Component {

    calculate(date) {
        let today = new Date().getTime();
        let inputDate = new Date(date).getTime();
        let difference = Math.abs(today - inputDate);

        let days = Math.floor(difference / (1000 * 3600 * 24));
        let years = Math.floor(days/360);
        days -= years * 365;

        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, and ${days} days`;
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.calculate(this.props.date)}!</h4>
                <img src={partyPopper} alt="party-popper" className="party-popper"/>
            </div>
        )
    }
}

export default AgeStats;
