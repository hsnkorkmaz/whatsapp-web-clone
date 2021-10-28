import React from 'react'

export const friendsList = [
    {
        Id: 1,
        Name: "Adam Smith",
        Messages: [
            {
                Type: "Sent",
                Message: "Hello",
                Time: new Date(2021, 10, 28, 12, 0, 0, 0),
            },
            {
                Type: "Received",
                Message: "How are you?",
                Time: new Date(2021, 10, 28, 12, 5, 0, 0),
            },
            {
                Type: "Sent",
                Message: "I am fine",
                Time: new Date(2021, 10, 28, 12, 10, 0, 0),
            }
        ],
    },
    {
        Id: 2,
        Name: "Tommy",
        Messages: [
            {
                Type: "Sent",
                Message: "Hello",
                Time: new Date(2021, 10, 28, 12, 0, 0, 0),
            },
            {
                Type: "Received",
                Message: "How are you?",
                Time: new Date(2021, 10, 28, 12, 5, 0, 0),
            },
            {
                Type: "Sent",
                Message: "I am fine",
                Time: new Date(2021, 10, 28, 12, 10, 0, 0),
            }
        ],
    },
    {
        Id: 3,
        Name: "Nils",
        Messages: [
            {
                Type: "Sent",
                Message: "Hello",
                Time: new Date(2021, 10, 28, 12, 0, 0, 0),
            },
            {
                Type: "Received",
                Message: "How are you?",
                Time: new Date(2021, 10, 28, 12, 5, 0, 0),
            },
            {
                Type: "Sent",
                Message: "wohooo",
                Time: new Date(2021, 10, 28, 12, 10, 0, 0),
            }
        ],
    },
    {
        Id: 4,
        Name: "Ivan",
        Messages: [
            {
                Type: "Sent",
                Message: "Hello",
                Time: new Date(2021, 10, 28, 12, 0, 0, 0),
            },
            {
                Type: "Received",
                Message: "How are you?",
                Time: new Date(2021, 10, 28, 12, 5, 0, 0),
            },
            {
                Type: "Sent",
                Message: "No way!",
                Time: new Date(2021, 10, 28, 12, 10, 0, 0),
            }
        ],
    },
];


export const getFriendById = (Id) => {
    return friendsList.find((friend) => {
        return friend.Id === Id;
    })
}