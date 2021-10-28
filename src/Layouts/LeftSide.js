import React from 'react'
import profilePicture from '../assets/images/hasan-profile.jpg'
import ChatList from '../Components/ChatList';
import NewChatButton from '../Components/NewChatButton';
import SearchChat from '../Components/SearchChat';
import SettingsButton from '../Components/SettingsButton';
import StatusButton from '../Components/StatusButton';

const LeftSide = (props) => {

    return (
        <div className="w-3/12 bg-w-900">
            <div className="flex justify-between items-center bg-w-700">
                <div className="flex-1 pt-3 pl-3 pb-3">
                    <img src={profilePicture} alt="profile" className="rounded-full h-10 w-10" />
                </div>
                <StatusButton />
                <NewChatButton />
                <SettingsButton />
            </div>
            <SearchChat />
            <ChatList  setChatId={props.setChatId} />
        </div>
    )
}

export default LeftSide
