import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }
    };
    
    handleChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    };

    handleClick = () => {
        // do something
        alert("your food has been saved to the DB")
        // redirect to someplace else:
        this.props.history.push(`/food/${this.state.searchQuery}`)
            // this way, react router REDIRECTS us to wherever is next in the 'history'
    };

    render() {
        return ( 
            <div>
                <h2>Look up a Food!</h2>
                <input type="text" 
                placeholder="search for food"
                value={this.state.searchQuery}
                onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.searchQuery}`}>Go!</Link>
                <button onClick={this.handleClick}>Save New Food</button>
            </div>
        )
    }
}
export default FoodSearch; 