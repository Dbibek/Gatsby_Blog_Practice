
import React from 'react'
import {Link} from 'gatsby'
import Head from './head'
import formStyle from '../pages/form.module.scss'

 const Greeting = (props) => {
    return (
       <div className={formStyle.EmailListForm}>
           <Head title='greetings'/>
            <h1>Thank you ,{props.name} for Subscribing</h1>
            <p>You'll be getting my information about blogs in your inbox.</p>
           <Link to='/blog'> <button >Go Back</button></Link>
       </div>
       

    )
}
export default Greeting