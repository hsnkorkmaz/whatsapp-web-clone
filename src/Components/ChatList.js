import React from 'react'
import Chat from './Chat'

const ChatList = () => {
    return (
        <div>
            <Chat sender={"Adam Smith"} date={"16:15"} message={"Hi, How is going?"} />
            
            <Chat sender={"Tommy"} date={"Friday"} message={":)"} />
            
            <Chat sender={"Nils Nilsson"} date={"Tuesday"} message={"Take care :)"} />
            
            <Chat sender={"Ivan"} date={"14.10.2021"} message={"Lets meet!"} />
            
            <Chat sender={"Big Brother"} date={"10.10.2021"} message={"Call me asap"} />
        </div>
    )
}

export default ChatList
