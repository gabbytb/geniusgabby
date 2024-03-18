import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';





const LoginUser = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [user, setUser] = useState({ username: "", password: "" });
    const [loginErrMsg, setLoginErrMsg] = useState(null);
   
    function handleOnKeyUp(e) {
        console.clear();
        console.log(`COLLECTING USER DETAILS.....\nUsername: ${user.username} \nPassword: ${user.password}`);
    }

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user, [name]: value
        })
    }


    const handleLogin = async () => {
        axios.post("https://api.travelbeta.com/api/v1/auth/login", user)
        .then(response => {
            const { success, data, message } = response.data;
            if (!success) {
                setLoginErrMsg(message);
                console.log("Account with this details does not exist: ", message);
                return;                    
            } else {
                localStorage.setItem("user", JSON.stringify(data));

                console.log("Success: ", success);
                console.log("Data: ", data);
                console.log("Message: ", message);

                setTimeout(() => {
                    const redirToAdmin = "/admin/dashboard";
                    window.location = redirToAdmin;        // Goto Admin Dashboard after Logging in
                }, 1500);
            }
        })
        .catch(error => {
            console.log("Cannot Login. Please check your Internet connection: ", error);
        });
    };


    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));    

    
    useEffect(() => {
        document.title = "Log-in | Oyebanji Gabriel";
        const loginUrl = "/user/login";
        if (isLoggedIn) {
            if (loginUrl === window.location.origin) {
                setTimeout(() => {
                    navigate("/admin/dashboard");
                }, 1500);
            };
            setTimeout(() => {
                navigate("/admin/dashboard");   
            }, 1500);
        }
    }, [isLoggedIn]);



    return (
        <div className="Registration">
            <Header />
            <main className="mb-3">
                <h1 className="page-title w-100 text-align-center mx-auto mt-0 mb-5 py-4 bg-dark text-white text-center fs-6 fw-bold">Log in</h1>
  
                {/* <div className={`alert ${loginErrMsg ? 'alert-shown d-flex justify-content-center' : 'alert-hidden'}`}>
                    <h2 className="">{loginErrMsg}</h2>
                </div> */}
                <div className={`alert justify-content-center ${loginErrMsg ? 'alert-shown d-flex justify-content-center' : 'alert-hidden custom-notify-user'}`}>
                    <strong className="alert fs-6 mb-0 lh-base alert-danger">{loginErrMsg}</strong>
                </div>                    
            

                <div className="d-flex container justify-content-center mb-5">
                    <div className="row flex-column log-in px-4 py-5 mx-0 shadow rounded rounded-4 bg-white w-xl-25 w-md-75">
                            
                        <div id="loginForm" className="loginForm d-flex flex-column row-gap-4 px-0 mb-4">
                            
                            <label htmlFor="username">Username
                                {/* <input type="text" className="form-control" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyUp={handleOnKeyUp} /> */}
                                <input type="text" name="username" className="form-control" placeholder="Enter username" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
                            </label>      
                            
                            <label htmlFor="password">Password
                                {/* <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handleOnKeyUp}/> */}
                                <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
                            </label>                         
  
                            {
                                isLoggedIn ? ( <div className=""><p className="">You are already logged in. Redirecting to the dashboard...</p></div>) : (<button onClick={handleLogin} className="form-control">Login</button>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
      );
  };
    
  export default LoginUser;




























      // const handleLogin = async () => {
    //     axios.post("https://api.travelbeta.com/api/v1/auth/login", 
    //     { 
    //         username, 
    //         password 
    //     })
    //     .then(response => {
    //         const { success, data, message } = response.data;
    //         if (!success) {
    //             setLoginErrMsg(message);
    //             console.log("Account with this details does not exist: ", message);
    //             return;                    
    //         } else {
    //
    //             localStorage.setItem("user", JSON.stringify(data));
    //             // console.log("Success: ", success);
    //             // console.log("Data: ", data);
    //             // console.log("Message: ", message);
    //             window.location.replace("http://127.0.0.1:3000/admin/dashboard");        // Goto Admin Dashboard after Logging in
    //
    //         }
    //     })
    //     .catch(error => {
    //         console.log("Cannot Login. Please check your Internet connection: ", error);
    //     });
    // };
