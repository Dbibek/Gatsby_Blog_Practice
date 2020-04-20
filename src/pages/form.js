
import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import  formStyles from '../pages/form.module.scss'

export default class Form extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email)
        .then(data=>console.log('dataa', data))
        
    //         .then(({ msg, result }) => {
    //             console.log('msg', `${result}: ${msg}`);

    //             if (result !== 'success') {
    //                 throw msg;
    //             }
    //             alert(msg);
    //         })
    //         .catch((err) => {
    //             console.log('err', err);
    //             alert(err);
    //         });
     }

    render() {
        return (
            <div>
                <div>
                    <form className={formStyles.EmailListForm} onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Name"
                            name="name"
                        />
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                            required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+`?\.[a-z]{2,4}$'
                            
                        />
                        <p id='error'>please enter valid email</p>
                       
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        );
    }
}