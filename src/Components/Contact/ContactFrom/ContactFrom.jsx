import React from 'react'
import "./ContactFrom.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFrom = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className='contact_form_main_div_page'>
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <form action="https://formspree.io/f/xqkreznb" method='post'>
            <div>
                <input type="text" name='Name' placeholder='Enter your name' required/>
            </div>
            <div>
                <input type="email" name='Email' placeholder='Enter your Email' required/>
            </div>
            <div>
                <textarea name='Message' placeholder='Message' required cols="30" rows="10"></textarea>
            </div>
            <button>submit</button>
        </form>

        <button onClick={notify}>hey</button>
    </div>
  )
}

export default ContactFrom