import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] =  useState('');
    const [password, setPassword]  = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID':"c122e357-131d-4379-9b10-92a44f861d9d",'User-Name': username, 'User-Secret': password} 

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        }catch (error){
            setError('Oops,User not Found');
        }
    }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="username" required />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="password" required />
            <div align="center">
                <button type="submit" className="button">
                    <span>Start Chatting</span>
                </button>
            </div>
            <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
