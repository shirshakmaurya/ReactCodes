import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
                {/* <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666"/>
        

        <h3>Some Restaurant</h3>
        <h4>Indian, Chinese</h4>
        <h4>4.4 stars</h4>
        <h4>40 Minutes</h4>
        </div>
    )
}


const Body = () =>{
    return (<div className="body">
    <div className="search"> Search </div>
    <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>

    </div>)
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)