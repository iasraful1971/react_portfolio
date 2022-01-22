import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './contact.css';

 
;

const Contact = () => {
//add to firebase 
const [success, setSuccess] =useState("");


const [userData, setUserData] = useState({
  name:"",
  userEmail: "",
  message:""
});

let name, value;
const PostUserData =(e)=> {
name = e.target.name;
value = e.target.value;
setUserData({...userData,[name] : value});
}

const submitData = async (e) => {
  e.preventDefault();
  const {name , userEmail, message } = userData;
  if(name && userEmail && message){
   
  

  const res = fetch(
    "https://muhammadasraful-97c70-default-rtdb.firebaseio.com/portFolioMessageRecord.json",
    {
      method : "POST",
      headers: {
     "Content-Type":"application/json",
      },
      body: JSON.stringify({
        name , userEmail, message
      })
    }
  );
  if(res){
    setUserData({
      name:"",
      userEmail: "",
      message:""
    })
    setSuccess("Data stored success");

  }
  else {
    alert("please filled the data")
    setSuccess(" ")
 
  }
}
else {
  alert("please filled the data");
  setSuccess("")
}
};


//email js
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_dxu542v' , 'template_klh0xtn' ,e.target, 'user_rhvvoBuWanDjjjVLayQbC').then(res =>{
      console.log(res);
      
      
    }).catch(error =>console.log(error))
    
  }




  return (
    <>
       <div className="contact__container section__margin py-5">
       <div className="contact__heading">
           <h1>Get In Touch</h1>
       </div>
      <div className="form__container">
      <form method='POST' style={{marginBottom:'10px'}} onSubmit={sendEmail} >
       <Box
      sx={{
      
        maxWidth: '100%',
      }}
    >
      <TextField
        required
        value={userData.name}
        onChange={PostUserData}
        name="name"
        type="text"
        className="input"
        fullWidth label="Your Name"
        id="fullWidth" />
      </Box>
       
       <Box
      sx={{
        
        maxWidth: '100%',
      }}
    >
      <TextField 
            name="userEmail"
            required
            value={userData.UserEmail}
            onChange={PostUserData}
            type="email"
            className="input"
            style={{fontSize:'15px'}}
            fullWidth label="Your Email"
            id="fullWidth" />
    </Box>
      
      <textarea   
            required
           value={userData.message}
           onChange={PostUserData}
           className="text"
           name="message"
           id="" style={{width:'100%'}}
           placeholder="your message">
          </textarea>

         <input 
          onClick={submitData}
           className="submit"
           style={{width:'100%'}}
           type="submit"
           value="send" />
         </form>

        <div className="pt-2">
            {
              success &&<Alert severity="success">Successfully sent the message!</Alert>
            }
          
        </div>


        <a href="mailto:iasraful107@gmail.com" 
        rel="opener noreferrer"
        target="_blank"
        style={{fontSize:'14px', fontWeight:'600'}}
        >sanding to :- iasraful107@gmail.com</a>
      </div>
   </div>
    </>
  );
};

export default Contact;
