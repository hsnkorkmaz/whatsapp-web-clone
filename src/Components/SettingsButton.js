import React, { useState } from 'react'

const SettingsButton = () => {
    const [pressed, setPressed] = useState(false);
    const toggleHover = () => setPressed(!pressed);

    return (
        <div
            className={pressed ? 'p-2 mr-1 rounded-full bg-gray-600' : 'p-2 mr-1'}
            onMouseDown={toggleHover}
            onMouseUp={toggleHover}
        >
            <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current text-whatsApp-lightest">
                <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
            </svg>
        </div>
    )
}

export default SettingsButton
