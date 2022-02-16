import React from 'react'
import './ForgotPass.css';

function ForgotPass() {
    return (
        <div
            id='fPassDivId'
            style=
            {
                { textAlign: 'center' }
            }>
            <h1 id='fPassId'>Forgot Password</h1>
            <span>New Password</span><br />
            <div
                id='fPassSpanDivId'
                style={
                    { display: 'inline-grid' }
                }
            >
                <label style={

                    { marginTop: '1em' },
                    {fontWeight:'350'},
                    {fontSize:'small'}
                }>
                    EMAIL
                </label>
                <input
                    type="email"
                    id="fPassInputId"
                    name="email"
                    placeholder='hello@reallysite.com'
                    style={
                        { marginTop: '.8em' },
                        { marginBottom: '.8em' }
                    }
                >
                </input>
                <button
                    id='fPassButton'
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ForgotPass