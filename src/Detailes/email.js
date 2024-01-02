import React from 'react';
import emailjs from 'emailjs-com';
import { sendEmails} from '../redux/create_slice';
import { useDispatch, useSelector} from 'react-redux';

export default function ContactUs() {
  const dispatch=useDispatch()
  const sendemail=useSelector((state)=>state.userdetail.emailsend)
  console.log(sendemail)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_75o6pgf', 'template_hz6tzpp', e.target, 'SpZHCGmDtQP5l4zn1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" onKeyUp={(e)=>dispatch(sendEmails(e.target.value))}/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}