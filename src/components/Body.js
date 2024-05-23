import Restocard from "./RestoCard";
import { useState,useEffect} from "react";
import resobj from "../utils/mockdata";

const Body = () => {
    const [lsres,setlsres] = useState(resobj);

    useEffect(()=>{
        fetchData();
    },[]);
const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.8176974&lng=83.3503512");
    const json= await data.json();
    console.log(json);
    setlsres(json.data.success.cards);
}
    return (
      <div className="body-container">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filterdlist=lsres.filter((res)=>res.info.avgRating >4.25);
            setlsres(filterdlist);
          }}

          >Top Rated Resturant</button>
        </div>
        <div className="res-container">
          {lsres.map((restaurant)=>(
            <Restocard key={restaurant.id} resdata={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;