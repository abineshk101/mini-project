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
      <textarea name="message"  />
      <input type="submit" value="Send" />
    </form>
  );
}

// import React from 'react';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { feedback: 'hiii', name: 'sangeetha', email: 'sangeethakesavan76@gmail.com' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <form className="test-mailing">
//         <h1>Let's see if it works</h1>
//         <div>
//           <textarea
//             id="test-mailing"
//             name="test-mailing"
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.feedback}
//             style={{ width: '100%', height: '150px' }}
//           />
//         </div>
//         <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//       </form>
//     )
//   }

//   handleChange(event) {
//     this.setState({ feedback: event.target.value })
//   }

//   handleSubmit() {
//     // TODO
//   }
// }
