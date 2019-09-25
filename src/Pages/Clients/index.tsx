import React from 'react'
import InteractiveList from '../../Components/List'
import ChatCOmponent from '../../Pages/Chat'

export default function ClientPage (props: any) {
    return (
        <div>
            <InteractiveList />
            <ChatCOmponent  />
        </div>
    )
}
