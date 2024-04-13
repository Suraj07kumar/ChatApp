import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/> 

    return (


        <ChatEngine
            height="100vh"
            projectID="c122e357-131d-4379-9b10-92a44f861d9d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}

            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
};

export default App;