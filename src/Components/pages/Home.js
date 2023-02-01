import React from "react";
import MyFooter from "../MyFooter";
import Carousel from "../Carousel";
import UpcomingEvents from "../UpcomingEvents";
function Home(){
    return (
        <div>
        <Carousel/>
        <br/>
        <UpcomingEvents/>
        <br/>
        <MyFooter/>
        </div>
    )
}
export default Home;