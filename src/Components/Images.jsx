/* import trains from '../Data/Trains'; */



/* const imgNr = trains.map(train => train.img); */

function TrainImage(props) {
    return (
        <div>
            {/* <img src={ require(`../Images/${imgNr[i]}`).default } alt = "pic"/> */}
            <img src={ require(`../Images/01.jpg`).default } alt = "pic"/>
        </div>
    )


    
    /* for(let i=0; i<imgNr.length; i++){
        console.log(imgNr[i]);
        <img src="./ "
        
    }




        if('Brigadininkas' === props.bebras){            
            return (
                <div className = "">            
                    <b><Bebras bebras={props.bebras}/></b>
                </div>
        );
        }
    return (
        <div className = "kvadratas">        
        <Bebras bebras={props.bebras}/>
        </div>
    ); */
}
    
export default TrainImage;