import React, { useState } from 'react'

const NewChatButton = () => {
    const [pressed, setPressed] = useState(false);
    const toggleHover = () => setPressed(!pressed);

    return (
        <div
            className={pressed ? 'p-2 mr-1 rounded-full bg-gray-600' : 'p-2 mr-1'}
            onMouseDown={toggleHover}
            onMouseUp={toggleHover}
        >
            <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-whatsApp-lightest">
                <path d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
            </svg>
        </div>
    )
}

export default NewChatButton
