import React from 'react'


const returnMessageByType = (message) => {
    if (message.Type == 'Sent') {
        return (
            <div className="text-right mr-20 mb-3 mt-3">
                <div className="text-white inline-block" >
                    <div className="flex flex-row">
                        <div style={{ background: 'rgba(5,97,98,1)' }}
                            className="rounded-tl-md rounded-bl-md rounded-br-md text-sm
                                p-2 text-left">
                            {message.Message}
                        </div>
                        <div>
                            <svg viewBox="0 0 8 13" width="8" height="13" style={{ color: 'rgba(5,97,98,1)' }}>
                                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="text-left ml-20">
                <div className="text-white inline-block" >
                    <div className="flex flex-row">
                        <div>
                            <svg viewBox="0 0 8 13" width="8" height="13" style={{ color: 'rgba(38,45,49,1)' }}>
                                <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                                <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
                            </svg>
                        </div>
                        <div style={{ background: 'rgba(38,45,49,1)' }}
                            className="rounded-tr-md rounded-bl-md rounded-br-md text-sm
                                p-2 text-left">
                            {message.Message}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}


const MessageItem = ({ message }) => {
    return (
        <div>
            {returnMessageByType(message)}
        </div>
    )
}

export default MessageItem
