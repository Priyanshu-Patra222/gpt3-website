import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate beard oh ought. His defective nor conviced residence own. Connection has put impossible own aprtments boisterous. At jointure ladyship an insisted humanity be. Firendly bachelor entrace to on by." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination.
                </h1>
                <p>
                    Explore The Library.
                </p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate beard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted humanity be. Firendly bachelor entrace to on by." />
                <Feature title="Education" text="At jointure ladyship an insisted humanity be. Firendly bachelor entrace to on by." />
            </div>
        </div>
    )
}

export default WhatGPT3