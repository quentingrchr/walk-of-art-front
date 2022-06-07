
import React from "react"
import { Cards } from "./../src/components/cards/index"
import { Notification } from "./../src/components/notification"


const Home: React.FC = () => {
    return (
        // <Cards/> 
        <>

    <Notification/>
    <br />
    <Notification type="validate"/>
    <br />
    <Notification type="refused"/>
        </>
    )
}

export default Home
