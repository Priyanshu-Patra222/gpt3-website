import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
    {
        title: "Improving end distrusts instantly.",
        text: "From they fine John he give of rich me. They age and draw mrs. like. Improving end distrusts may instantly as household applauded.",
    },
    {
        title: "Become the tended active.",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
        title: "Message or am nothing.",
        text: "From they fine John he give of rich me. They age and draw mrs. like. Improving end distrusts may instantly as household applauded.",
    },
    {
        title: "Really oy law country.",
        text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id='features'>
            <div className="gpt3__features-heading">
                <h1 className='gradient__text'>
                    The Future Is Now You Need To Realize It. Step Into The Feature Today & Make It Happen.
                </h1>
                <p>Request Early Access to Get Started.</p>
            </div>
            <div className="gpt3__features-container">
                {
                    featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Features