import trains from '../Data/Trains';




function TrainImage() {
 /*  const imgName = trains.map(train => train.desc); */
  const imgNr = trains.map(train => train.img);
    return (<>
    <div>
      <div>
        {imgNr.map((value) => {
          return <img src={ require(`../${value}`).default} alt= "pic"/>})
        };
      </div>
      <div>
        
      </div>
    </div>
    </>
    )
};

  

export default TrainImage;