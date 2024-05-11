import React from "react";
import ReactDOM from "react-dom/client"

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://i0.wp.com/www.hesol.co.in/wp-content/uploads/2016/10/food-delivery-app-supplychain-optimization-hesol-consulting.jpg?fit=805%2C500&ssl=1"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Sign Up</li>
                <li>Sign in</li>
            </ul>
            </div>
        </div>
    )
}
const Restocard=(props)=>{
    const{resdata}=props;
   
    return(
        <div className="res-card">
            <div className="res-logo">
            <img className="logo" src=
            {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId}
            />
            <h3>{resobj.info.name} </h3>
            <h4>Rating:{resobj.info.avgRating}</h4><h4>{resobj.info.cuisines.join(",")}</h4>
            <h4>{resobj.info.sla.slaString}</h4>
            </div> 
           
            
            
            
        </div>
    )
}
const resobj=[
  {
    "info": {
      "id": "289728",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "f6yo5hhqjb4inxrpp0ys",
      "locality": "SRMT Mall",
      "areaName": "Kakinada",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4,
      "parentId": "10804",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-11 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-srmt-mall-kakinada-kakinada-289728",
      "type": "WEBLINK"
    }
  }
];

const Body=()=>{
    return (
        <div className="body-container">
        <div className="search" >
            <input placeholder="search"></input>Search</div>
        <div className="res-container">
        <Restocard resdata={resobj}/>
        
        </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
    <div className="app">
        <Header/>
        <Body/>

    </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);