import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Register = () => {

    const {createUser}=useContext(AuthContext)
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>console.error(err))
    }
    console.log()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form onSubmit={handleSubmit}>
            <div className="mt-4">
                <div>
                    <label className="block" htmlFor="Name">Full Name</label>
                            <input type="text" placeholder="Name" 
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div>
                    <label className="block" htmlFor="PhotURL">PhotoURL</label>
                            <input type="text" placeholder="PhotoURL"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" name='password' placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required autoComplete='true'/>
                </div>
                <div className="mt-4">
                    <label className="block">Confirm Password</label>
                            <input type="password" name='confirm-password' placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required autoComplete='true'/>
                </div>
                <span className="text-xs text-red-400">Password must be same!</span>
                <div className="flex">
                    <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
               
            </div>
         
        </form>
        <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </div>
    </div>
</div>
    );
};

export default Register;