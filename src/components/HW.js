import { useState } from "react";
import InputField from './InputField'
import TextAreaField from './TextAreaField'

function HW() {
    const [userName, setUserName] = useState('ex: John Doe')
    const [userEmail, setUserEmail] = useState('example@mail.com')
    const [userMessage, setUserMessage] = useState("What's on your mind ..")

    function alertFunc () {
        alert (`
        Name: ${userName}
        Email: ${userEmail}
        Message: ${userMessage}
        `)
    }

    return (
        <form className="main" onSubmit={alertFunc}>
            <InputField label='Name' type='text' value={userName} onChange={setUserName} required='required' />
            <InputField label='Email' type='email' value={userEmail} onChange={setUserEmail} required='required' />
            <TextAreaField label='Message' value={userMessage} onChange={setUserMessage} required='required' />
            <button type="submit">Submit</button>
        </form>
      );
}
 
export default HW ;
