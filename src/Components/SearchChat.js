import React from 'react'

const SearchChat = () => {
    return (
        <div className="bg-whatsApp-dark pb-2 pt-2 pr-3 pl-3">
                    <div className="flex items-center space-x-4 p-3 h-7 bg-whatsApp-light rounded-full text-whatsApp-lightest">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                        </svg>
                        <input type="text"
                            placeholder="Search or start new chat"
                            className="placeholder-whatsApp-lightest bg-transparent outline-none w-full text-sm focus:outline-none" />
                    </div>
            </div>
    )
}

export default SearchChat
