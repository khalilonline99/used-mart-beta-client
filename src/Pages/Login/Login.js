import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider/Authprovider';

const Login = () => {

    const { user, login, googleLogin, auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [errorMessage, setErrorMessage] = useState("");
    const [spinner, setSpinner] = useState(false);

    const from = location.state?.from?.pathname || "/";


    const handleUserLogin = (event) => {
        event.preventDefault()
        setSpinner(true);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                setErrorMessage("");

                fetch('https://used-mart-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("eduProToken", data)
                    })

                form.reset();
                setSpinner(false)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message)
                if (error) {
                    setSpinner(false)
                }
            });
    }


    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (event) => {
        event.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // fetch('https://used-mart-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'Content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem("eduProToken", data)
                //     })
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            {/* <Helmet>
                <title>Edupro | Home</title>
            </Helmet> */}

            {/* loading spinner */}
            {
                spinner ?

                    <div className='mx-auto mt-5' role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                    :
                    <></>
            }

            <h2 className="text-2xl font-semibold text-gray-700 mb-5">Login</h2>

            <form onSubmit={handleUserLogin}>
                <div className="flex flex-col w-2/4 mx-auto">

                    <div>
                        <label className="text-gray-700">Email Address</label>
                        <input id="emailAddress" type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder='your email here' />
                    </div>

                    <div>
                        <label className="text-gray-700">Password</label>
                        <input id="password" type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder='Password' />
                    </div>


                    <div className="form-control mt-6 mx-auto">

                        <button className="btn btn-outline btn-primary w-44" type="submit">Login</button>
                    </div>


                </div>

            </form>

            <div>
                {/* Error message show */}
                {
                    errorMessage === "" ?

                        <></>
                        :
                        <div className="mx-auto w-3/4 p-0 mt-5">
                            <div className="alert alert-warning">
                                <div>
                                    <span>{errorMessage}</span>
                                </div>
                            </div>
                        </div>
                }
                <form>
                    <button className="btn btn-outline btn-primary my-3" onClick={handleGoogleLogin}>Login with Google</button>
                </form>
                <div className='mt-3'>
                    <h2>Dont have account? <Link className='link link-info' to='/register'>Register Here</Link></h2>
                </div>
            </div>
        </section>
    );
};

export default Login;