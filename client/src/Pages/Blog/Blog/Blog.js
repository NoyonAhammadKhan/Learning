import React from 'react';

const Blog = (props) => {
    const {question, answer}=props.blog
    return (
        <div className='mr-20 ml-20'>
            <div class="card bg-base-100 shadow-xl border-8 border-indigo-100 mt-9 mr-auto ml-auto">
            <div class="card-body">
                <h2 class="card-title text-3xl">{question}</h2>
                <p>{answer}</p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;