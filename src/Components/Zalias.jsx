import React from 'react';

class Zalias extends React.Component {

    render(){
        return (
            <button className="spauskGreen" onClick={this.props.clickToChangeColor}>Žalia!</button>
        );
    }
}

export default Zalias;