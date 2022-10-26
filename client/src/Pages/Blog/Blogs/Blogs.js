import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs=[
        {
            id:1,
            question:' what is cors?',
            answer:'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.'
        },
        {
            id:2,
            question:' Why are you using firebase? What other options do you have to implement authentication ?',
            answer:'Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.'
        },
        {
            id:3,
            question:' How does the private route work?',
            answer:'Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.'
        },
        {
            id:4,
            question:' What is Node? How does Node work?',
            answer:'Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept'
        },
        
    ]
    return (
        <div>
            <div>
                <h1 className='text-5xl'>Know Something Import</h1>
            </div>
            <div className='grid grid-cols-1 mt-10 mb-10'>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}/>)
            }
            </div>
            
        </div>
    );
};

export default Blogs;