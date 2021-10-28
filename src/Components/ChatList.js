import React from 'react'
import Chat from './Chat'
import {friendsList} from "./Friends"

const ChatList = (props) => {

    return (
        <div>
           {
                friendsList.map((friend, index, []) => (
                    <Chat 
                    id={friend.Id}
                    key={index} 
                    setChatId={props.setChatId}
                    sender={friend.Name}
                    date={friend.Messages[friend.Messages.length - 1].Date}
                    message={friend.Messages[friend.Messages.length - 1].Message}
                    />
                ))
           }
        </div>
    )
}

export default ChatList
