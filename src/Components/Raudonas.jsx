import React from 'react';

class Raudonas extends React.Component {

    render(){
        return (
            <button className="spauskRed" onClick={this.props.clickToChangeColor}>Raudona!</button>
        );
    }
}

export default Raudonas;