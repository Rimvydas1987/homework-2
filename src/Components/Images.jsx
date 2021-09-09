import trains from '../Data/Trains';


const imgName = trains.map(train => train.desc);


function TrainImage(props) {
    const imgNr = trains.map(train => train.img);
    return (
        <div>
            {imgNr.map((value) => {
              return <img src={ require(`../${value}`).default} alt= "pic"/>})}
            <div></div>
        </div>
    )


   /*  for(let i=0; i<imgNr.length; i++){
        console.log(imgNr[i])
    }
    return (
        <div>
            <img src={ require(`../${imgNr[i]}`).default } alt = "pic"/>
            <div>{imgName[i]}</div>
        </div>
    ) */
    }




    /* render: function() {
        const elements = ['one', 'two', 'three'];
        return (
          <ul>
            {elements.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        )
      } */






export default TrainImage;