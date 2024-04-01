import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";


const Login = () => {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        // sign in from context api
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero min-h-[calc(100vh-68px)] bg-base-200">
            <div className="hero-content flex-col ">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h1>For new man to <Link className="text-red-400" to={'/register'}>Register page</Link></h1>
                    </form>
                    <div className="ms-8 mb-5 flex gap-2">
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost bg-slate-500">Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-ghost bg-slate-500">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;