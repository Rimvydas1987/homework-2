import React from 'react';
import trains from "../Data/Trains";
import TrainImage from "./Images"

/* const imgName = trains.map(train => train.desc); */


function App(props) {
    return (<>
            {trains.map((b, i) => <TrainImage key ={i} img={b.img} desc={b.desc}/>)}
    </>
    );
}
    
export default App;