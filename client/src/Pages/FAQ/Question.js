import React from 'react';

const Question = (props) => {
    const {question, answer}=props.question;
    return (
        <div className='w-2/4 ml-auto mr-auto border-4 m-3 border-indigo-600'>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div className="collapse-content"> 
                    <p>{answer}</p>
                </div>
                </div>
        </div>
    );
};

export default Question;