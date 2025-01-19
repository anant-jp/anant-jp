import React from 'react';
import Typical from 'react-typical';

const TypingEffect = () => {
    return (
        <h3 className=" inline-block text-lg lg:text-xl text-teal-600">
            <Typical
                steps={[
                    'Technical Business Analyst', 2000,
                    'Scrum Master', 2000,
                    'Technical Product Manager', 2000,
                ]}
                loop={1}
                wrapper="span"
            />
        </h3>
    );
};

export default TypingEffect;
