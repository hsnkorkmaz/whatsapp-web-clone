import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MainPage = () => {
    return (
        <div className="flex mt-5 max-w-screen-2xl mx-auto bg-white height-100-38">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default MainPage
