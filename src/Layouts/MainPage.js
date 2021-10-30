import React, { useState,useEffect } from 'react'
import Intro from '../Components/Intro';
import LeftSide from './LeftSide';
import { getFriendById } from "../Components/Friends"
import Conversation from '../Components/Conversation';

const MainPage = () => {
    const [chatId, setChatId] = useState(null);
    const [friend, setFriend] = useState(null);



useEffect (() => {
    renderRightSide(chatId);
}, [friend]);



    const renderRightSide = (id) => {
        if (id === null) {
            return <Intro />
        }
        else {
            if (friend === null) {
               setFriend(getFriendById(id));
            }
            if(friend !== null && friend.Id !== id){
                setFriend(getFriendById(id));
            }

            return <Conversation friend={friend} setFriend={setFriend} />
        }
    }

    return (
        <div className="flex mt-5 max-w-screen-2xl mx-auto bg-white height-100-38">
            <LeftSide setChatId={setChatId} />
            {renderRightSide(chatId)}
        </div>
    )
}

export default MainPage
