import React from 'react';
import Raudonas from './Raudonas';
import Zalias from './Zalias'

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'green'} 
    }

    changeColorYellow = () => {
        this.setState(state => {
            let color = 'yellow';
            
            return(
                {bg: color}
            )
        });
    }
    changeColorGreen = () => {
        this.setState(state => {
            let color = 'green';
            
            return(
                {bg: color}
            )
        });
    }
    changeColorRed = () => {
        this.setState(state => {
            let color = 'red';
            
            return(
                {bg: color}
            )
        });
    }
    render() {
        return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <button className="spauskYellow" onClick={this.changeColorYellow}>Geltona!</button>
            <Zalias clickToChangeColor={this.changeColorGreen}></Zalias>
            <Raudonas clickToChangeColor={this.changeColorRed}></Raudonas> 
        </div>
        )
    }
}   
export default App;