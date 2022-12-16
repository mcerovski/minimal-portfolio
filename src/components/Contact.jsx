import React from "react";
import Title from "./Title";

function Contact(){
    return (
    <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/e9c32837-8c27-4f90-8b0d-445e7a8a4fdd" method="POST" className="flex flex-col w-full md:w-7/12">
                <Title>Contact</Title>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-center" 
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-center" 
                />
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    rows="10"
                    className="pb-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none text-center"
                />
                <button
                    type="submit"
                    className="text-center mx-auto inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                    Work With Me
                </button>
            </form>
        </div>
    </div>
    )
}

export default Contact;