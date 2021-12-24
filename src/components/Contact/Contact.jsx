import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import React from 'react';
import './contact.css';

 
;

const Contact = () => {


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
      <form style={{marginBottom:'10px'}} onSubmit={sendEmail} >
       <Box
      sx={{
      
        maxWidth: '100%',
      }}
    >
      <TextField name="name" type="text" className="input" fullWidth label="Your Name" id="fullWidth" />
    </Box>
       
       <Box
      sx={{
        
        maxWidth: '100%',
      }}
    >
      <TextField name="userEmail"  type="email" className="input" style={{fontSize:'15px'}} fullWidth label="Your Email" id="fullWidth" />
    </Box>
      
      <textarea   className="text" name="message" id="" style={{width:'100%'}} placeholder="your message"></textarea>
        <input className="submit" style={{width:'100%'}} type="submit" value="send" />
       </form>
        <a href="mailto:iasraful107@gmail.com" 
        rel="opener noreferrer"
        target="_blank"
        style={{fontSize:'14px', fontWeight:'600'}}
        >iasraful107@gmail.com</a>
      </div>
   </div>
    </>
  );
};

export default Contact;
