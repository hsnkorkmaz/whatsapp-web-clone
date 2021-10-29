import React, { Fragment, useState } from 'react'
import Intro from '../Components/Intro';
import LeftSide from './LeftSide';
import {getFriendById} from "../Components/Friends"
import Conversation from '../Components/Conversation';

const MainPage = () => {
    const [chatId, setChatId] = useState(null);
    let friend = null;


    const renderRightSide = () => {
        if (chatId === null) {
            return <Intro />
        }
        else {
            if (friend === null) {
                friend = getFriendById(chatId);
            }
            return <Conversation friend={friend} />
        }
    }



    return (
        <div className="flex mt-5 max-w-screen-2xl mx-auto bg-white height-100-38">
            <LeftSide setChatId={setChatId} />
            {renderRightSide()}
        </div>
    )
}

export default MainPage
