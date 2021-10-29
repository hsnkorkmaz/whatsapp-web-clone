import React from 'react'
import SettingsButton from './SettingsButton'
import bgTile from '../assets/images/bg-chat-tile-dark.png'

const Conversation = (props) => {
    return (
        <div className="w-9/12 flex flex-col">
            <div className="flex justify-between items-center bg-w-700">
                <div className="mt-3 ml-3 mb-3">
                    <svg viewBox="0 0 212 212" width="40" height="40">
                        <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                        <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                    </svg>
                </div>
                <div className="truncate ml-3 mr-1 border-w-400 w-full text-whatsApp-lightest">
                    <div className="flex items-center justify-between mr-2 ">
                        <div className="text-sm text-white">{props.friend.Name}</div>
                        <div><SettingsButton /></div>
                    </div>
                </div>
            </div>
            <div className="flex-1" style={{ backgroundImage: `url(${bgTile})` }}>
                <div className="flex flex-col">
                    <div className="text-right mr-20 mb-3 mt-3">
                        <div className="text-white inline-block" >
                            <div className="flex flex-row">
                                <div style={{ background: 'rgba(5,97,98,1)' }}
                                    className="rounded-tl-md rounded-bl-md rounded-br-md text-sm
                                p-2 text-left">
                                   Hi this is a test
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
                                    selamlar deneme denemes
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
