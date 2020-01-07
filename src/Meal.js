import React, {Component} from 'react';

class Meal extends Component {
    render() {
        const foodName = this.props.match.params.foodName;
        const drinkName = this.props.match.params.drinkName;
        const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
        return(
            <div>
                <h2>a perfect meal: {foodName} with {drinkName}</h2>
                <img src={foodUrl} />
                <img src={drinkUrl} />
                <h3>Bon Appetit :)</h3>
            </div>
        )
    }
}
export default Meal;