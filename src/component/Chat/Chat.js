import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  setQuickButtons,
} from "react-chat-widget";
import "./style.css";

import "react-chat-widget/lib/styles.css";

const buttons = [
  { label: "first", value: "1" },
  { label: "second", value: "2" },
];

export default class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome, How can I help you ?");
    setQuickButtons(buttons);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  handleQuickButtonClicked = (data) => {
    console.log(data);
    setQuickButtons(buttons.filter((button) => button.value !== data));
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          // profileAvatar={'text'}
          title="Travel"
          subtitle="Visitor Assistant"
        />
      </div>
    );
  }
}
