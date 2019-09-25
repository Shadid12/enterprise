import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

class Chat extends Component {

    componentDidMount() {
        addResponseMessage("Hey are you available ?");
    }
    
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    }

    render() {
        return (
            <div>
            <Widget
                handleNewUserMessage={this.handleNewUserMessage}
                title="Schedule"
                subtitle="Week Schedule Planner"
            />
            </div>
        )
    }
};



export default Chat;