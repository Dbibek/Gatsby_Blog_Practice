import React from 'react'

 const Form = () => {
    return (
        <div>
     <form name='contact' 
     method='post'
     data-netlify='true'
     data-netlify-honeypot='bot-field'>
         <input name='name' 
        placeholder='Your Name' type="text"/>
         <button>send</button>
         </form>
        
        </div>
    )
}
export default Form