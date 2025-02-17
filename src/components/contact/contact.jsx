import { useState } from "react"
import "./contact.scss"



function Contact(){

    const [message,Setmessage] = useState(false)


    const handleSubmit =(e) => {
        e.preventDefault()
        Setmessage(true)
    }
    

    return(
        <div className="contact" id = "contact">

            <div className="left">
                <img src="assets/shake.svg" alt="" />

            </div>


            <div className="right">
                <h2>
                    Contact 
                </h2>
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="message"></textarea>
                    <button type ="submit">Send</button>

                    {message && <span>Thanks, I'll respond ASAP :)</span>}
                </form>

            </div>


            
        </div>
    )




}







export default Contact 