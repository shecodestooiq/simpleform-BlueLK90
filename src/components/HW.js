import { useState } from "react";
import InputField from './InputField'
import TextAreaField from './TextAreaField'

function HW() {
    const [userName, setUserName] = useState('ex: John Doe')
    const [userEmail, setUserEmail] = useState('example@mail.com')
    const [userMessage, setUserMessage] = useState("What's on your mind ..")

    function userNameInput(name) {
        setUserName(name)
    }

    function userEmailInput(email) {
        setUserEmail(email)
    }
    
    function userMessageInput(msg) {
        setUserMessage(msg)
    }

    function alertFunc () {
        alert (`
        Name: ${setUserName}
        Email: ${setUserEmail}
        Message: ${setUserMessage}
        `)
    }

    return (
        <form className="main" onSubmit={alertFunc}>
            <InputField label='Name' type='text' value={userName} onChange={userNameInput} required='required' />
            <InputField label='Email' type='email' value={userEmail} onChange={setUserEmail} required='required' />
            <TextAreaField label='Message' value={userMessage} onChange={setUserMessage} required='required' />
            <button type="submit">Submit</button>
        </form>
      );
}
 
export default HW ;
