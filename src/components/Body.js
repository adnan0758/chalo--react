import Restocard from "./RestoCard";
import { useState,useEffect} from "react";
import  resobj from "../utils/mockdata";

const Body = () => {
    const [lsres,setlsres] = useState(resobj);

    useEffect(()=>{
        fetchData();
    },[]);
const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.93249124556291&lng=83.42679720371962");
    const json= await data.json();
    console.log(json);
    setlsres(json.data.cards);
};
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
            <Restocard key={restaurant.info.id} resdata={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body