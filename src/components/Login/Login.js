import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles);

export default function Login() {

    const [active, setActive] = useState('')
    console.log(active)

    const handleChange =(e) => {
        e.preventDefault() 
        if(active=='right-panel-active') {
            setActive('')
        }
        else {setActive('right-panel-active')}
        
    }
    return (
        <>
        {/* Background */}
        <section>
     <div class={cx("leaf")}>
     <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"></img></div>
     {/* <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div> */}
            
     </div>
     
     <div class={cx("leaf", "leaf1")}>
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"></img></div>
     <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
            
     </div>
     
     <div class={cx("leaf","leaf2")}>
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
    <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
     <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"></img></div>
     <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
            
     </div>
     </section>


        <div className={cx("body")}>
        <div className={cx("title")}>SpotiFong</div>
            <div className={cx("container", active)}>
                {/* REGISTER CONTAINER */}
                <div className={cx("form-container","register-container")}>
                    <form className={cx("form-content")}>
                        <h1>Register here.</h1>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Password"></input>
                        <button>Register</button>
                        <span>or use your account</span>
                        <div className={cx("social-container")}>
                            <a href="#">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-google"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    <Link to="/">Back</Link>
                    </form>   
                </div>

                {/* LOGIN CONTAINER */}
                <div className={cx("form-container","login-container")}>
                    <form className={cx("form-content")}>
                        <h1>Login here</h1>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <div class={cx("login-content")}>
                            <div class={cx("checkbox")}>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                ></input>
                                <label>Remember me</label>
                            </div>
                            <div className="pass-link">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <button>Login</button>
                        <span> or use your account</span>
                        <div className={cx("social-container")}>
                            <a href="#">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-google"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <Link to="/">Back</Link>
                    </form>
                </div>
                <div className={cx("overlay-container")}>
                    <div className={cx("overlay")}>
                        <div className={cx("overlay-panel", "overlay-left")}>
                            <h1 className="title">Helo friends</h1>
                            <p>
                                If you have an account, login here and have fun
                            </p>
                            <button onClick={(e) => handleChange(e)} className="ghost" id="login">
                                Login
                                {/* icon */}
                            </button>
                        </div>
                        <div className={cx("overlay-panel","overlay-right")}>
                            <h1 className="title"> Start your journy now</h1>
                            <p>
                                If you don't have an account yet, join us and
                                start your journey
                            </p>
                            <button onClick={(e) => handleChange(e)} className="ghost" id="register">
                                Register
                                {/* icon */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
