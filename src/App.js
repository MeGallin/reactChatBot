import React, { Component } from "react";
import ChatBot from "../node_modules/react-simple-chatbot";
import HomeComponent from "./components/home/HomeComponent";
import { ThemeProvider } from "../node_modules/styled-components/";

import "./App.css";

class App extends Component {
  render() {
    const theme = {
      background: "#f5f8fb",
      fontFamily: "Arial",
      headerBgColor: "#7F377C",
      headerFontColor: "#fff",
      headerFontSize: "15px",
      botBubbleColor: "red",
      botFontColor: "#fff",
      userBubbleColor: "#F9969F",
      userFontColor: "#4a4a4a",
      textAlign: "center"
    };

    const steps = [
      {
        id: "1",
        message: "What is your name please?",
        trigger: "user"
      },
      {
        id: "user",
        user: true,
        trigger: 3
      },
      {
        id: "3",
        message: ({ previousValue, steps }) => {
          return "Hi {previousValue} welcome to my new app";
        },
        trigger: ({ value, steps }) => {
          return 4;
        }
      },
      {
        id: "4",
        message: "Bye",
        end: true
      }
    ];
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Voice"
            speechSynthesis={{ enable: true, lang: "en" }}
            steps={steps}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
