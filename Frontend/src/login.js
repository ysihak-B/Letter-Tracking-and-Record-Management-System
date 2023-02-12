import React from 'react'
import logo from './images/logo.png'


function login(params) {
    return(
        <div>
            <div className="bg-blue-500 w-full h-1/2 absolute">
                <div className="pt-10 pb-10 ml-40"><img src={logo} alt="logo" /></div>
            </div>
            <div className="bg-white rounded-lg shadow-md relative top-40 hover:shadow-lg overflow-hidden mr-80 ml-80 pb-10 pt-20 pl-10 pr-10">
                <h1 className="pb-10 font-bold text-xl">Sign in</h1>
                <form className="" onsubmit="">
                    <div className="pb-5">
                        <lebel className="">Enter username or email address</lebel>
                        <input className="block border-2 rounded hover:border-blue-500 w-80" type="text" placeholder="username or email address" />
                    </div>
                    <div className="pb-5">
                        <lebel className="">Enter password</lebel>
                        <input className="block border-2 rounded hover:border-blue-500 w-80" type="text" placeholder="password" />
                    </div>
                    <button type="submit" className="border-2 rounded bg-blue-500 pl-5 w-80" >Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default login