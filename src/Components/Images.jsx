
function TrainImage(promp) {
 
    return (
        <div className="col-12 col-xl-3 col-md-4 col-sm-6">
            <img className="img " src={promp.img} alt={promp.sesc}/>
            <span>{promp.desc}</span>
        </div>
    )
};

  

export default TrainImage;