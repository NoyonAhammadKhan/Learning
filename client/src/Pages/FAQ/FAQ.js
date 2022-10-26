import React from 'react';
import Question from './Question';

const FAQ = () => {
   const questions=[{
        id:1,
        question:'What’s the difference between a  Pro subscription and a regular Marketplace course?',
        answer:'  Pro is a guided learning experience designed specifically to help students accomplish their IT certification goals. When subscribed to   Pro, you will have unlimited access to the subscription’s content as long as you are paying for a monthly subscription. With a regular   Marketplace course, you obtain lifetime access to that course alone after enrolling in it.'
    },
    {
        id:2,
        question:'Are subscriptions offered in other topic areas?',
        answer:'Currently, we are not offering subscriptions in topic areas not related to IT certification.'
    },
    {
        id:3,
        question:'I’m currently enrolled in   Pro. Will I continue to have access to the subscription content? Even though it’s no longer open for new enrollments?',
        answer:'As noted above, the   Pro subscription offering is no longer open for new enrollments. Learners who are already enrolled in   Pro, however,  will have unlimited access to the subscription content as long as you have an active   Pro subscription.  If you cancel your subscription, you will have access to the subscription content until the final date of your billing period, which is posted on your Subscriptions page.'
    },
    {
        id:4,
        question:'Does the subscription program come with a 30-day satisfaction guarantee? ',
        answer:'Since   Pro is a subscription product, it does not offer a 30-day satisfaction guarantee, and no refunds or partial refunds are available unless otherwise required by applicable law.  Students who are enrolled in a subscription via a free trial, can cancel at any time, however, without being charged.'
    },
    {
        id:5,
        question:'Where can I access the practice tests?',
        answer:'You can access the practice tests for your   Pro subscription by clicking on the course dropdown menu icon, which appears right above the course player on the left-hand side.'
    }
    ]
    return (
        <div>
            <h1 className='text-5xl mb-7'>Frequently Asked Question</h1>
            {
                questions.map(question=><Question key={question.id} question={question}/>)
            }
        </div>
    );
};

export default FAQ;