import { CDN_URL } from "../utils/constants";

const Restocard = ({ resdata }) => {
    const { name, avgRating, cuisines, sla } = resdata.info;

    return (

      <div className="res-card">
        <div className="res-logo">
          <img className="logo" src={CDN_URL+resdata.info.cloudinaryImageId} />

          <h3>{name}</h3>
          <h4>Rating: {avgRating}</h4>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{sla.slaString}</h4>
        </div>
      </div>

    );
  }; 

  export default Restocard;