import React from 'react'
import './SignUp.css';
import {
    BrowserRouter as
        Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function SignUp() {

    function SetUserType() {

        alert("Surprise motherfucker!!!!");
    }

    return (

        <div className="LoginApp">
            <div className="filter">

                <div>
                    <nav>
                        <div id='header1SignUp'><p>CROMAP</p></div>
                        <div id='header2SignUp'><p>Improving Farm Efficiencies</p></div>
                        {/* <a href="/html/">HTML</a> | */}
                    </nav>

                </div>
                <div>
                    <form>
                        <div className="motherDivSignUp">
                            <div
                                className="heading"
                                id='signUpHeaderId'
                            ><h1>Create a new Account</h1></div>
                            <div
                                id='divId1'
                            ><span>Already Registered? Log in <Link to='/login'>here</Link></span></div>
                            <div id="motherSeparater">
                                <div className="separator" style={{ marginBottom: "2em" }, { margintTop: "2em" }}>
                                    <div className="separate">
                                        <label htmlFor="fname">FIRST NAME</label><br />
                                        <input type="fname" id="fname" name="fname" />
                                    </div>
                                    <div className="separate">

                                        <label htmlFor="lname">LAST NAME</label><br />
                                        <input type="lname" id="lname" name="lname" />
                                    </div>
                                </div>

                                <div className="separator" style={{ marginBottom: "0em" }}>
                                    <div className="separate">
                                        <label htmlFor="email">ENTER VALID EMAIL</label><br />
                                        <input type="email" id="email" name="email" />
                                    </div>

                                    <div className="separate">
                                        <label htmlFor="password">CREATE PASSWORD</label><br />
                                        <input type="password" id="password" name="password" />
                                    </div>
                                </div>

                                <div className="separator">
                                    <div className="separate">
                                        <label>CONFIRM PASSWORD</label><br />
                                        <input type="cpassword" id="cpassword" name="cpassword" />
                                    </div>

                                    <div className="separate">
                                        <label>SELECT USER TYPE</label><br />
                                        <select name="userType" id="userType">
                                            <option value="farmer" selected>Farmer</option>
                                            <option value="GExpert">GIS Expert</option>
                                            <option value="PMaker">Policy Maker</option>
                                        </select>
                                    </div>

                                </div>
                                <div
                                    className="separate"
                                    id='TncDiv'
                                >
                                    <input
                                        type="checkbox"
                                        id="TnC"
                                        name="TnC"
                                        value="True"
                                    />&nbsp;&nbsp;
                                    <label>
                                        I agree to the
                                        <a>Terms and Conditions</a>,
                                        <a> User Agreement </a>
                                        and
                                        <a> Privacy Policy</a>
                                    </label>
                                </div>
                                <div
                                    className="separate"
                                    id='SignUpButtonDivId'
                                    style={
                                        { marginBottom: "1em" }
                                    }>
                                    <button
                                        style={
                                            { borderRadius: "0.8em" }
                                        }
                                        type="submit"
                                        value="submit"
                                        className="btn btn-light login_button">
                                        Sign Up
                                    </button>
                                </div>


                                <div
                                    id='orDiv'
                                >
                                    <span
                                        id="or">
                                        OR
                                    </span>
                                </div>
                                <div
                                    id='signUpPageContinueWithGoogleDivId'
                                >
                                    <button
                                        id='login-with-google-btn-id'
                                        className="login-with-google-btn "
                                        type="" >
                                        Continue with Google
                                    </button>
                                </div>
                                <br />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}


export default SignUp