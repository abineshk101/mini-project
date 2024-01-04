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

    emailjs.sendForm('service_723uvns', 'template_csw2gvh', e.target, 'F0OHQ__uJS6K9cMMN')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log("error",error);
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