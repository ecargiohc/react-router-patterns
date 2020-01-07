import React, {Component} from 'react';
import './Food.css';
import {Redirect} from 'react-router-dom';

class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return(
            <div className="Food">
                {/* conditional that 'redirects' whenever a number value is entered (using 'd' for RegEx): */}
                {/\d/.test(name) ? <Redirect to='/'/> 
                : <div><h1>I love to eat {name}</h1>
                <img src={url} alt={name}/></div>}
                <h2>I love {name}</h2>
                <img src={url} alt={name}/>
            </div>
        )
    }
}
export default Food;