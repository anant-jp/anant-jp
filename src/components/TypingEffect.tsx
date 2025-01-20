import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <h3 className="inline-block text-lg lg:text-xl text-teal-600">
      <TypeAnimation
        sequence={[
          'Technical Business Analyst', // Type 'Technical Business Analyst'
          2000, // Wait for 2 seconds
          'Scrum Master', // Type 'Scrum Master'
          2000, // Wait for 2 seconds
          'Technical Product Manager', // Type 'Technical Product Manager'
          2000, // Wait for 2 seconds
          () => {
            console.log('Sequence completed'); // Callback when the animation is completed
          }
        ]}
        wrapper="span" // Wrap the animated text in a <span> tag
        cursor={true} // Show the cursor
        repeat={Infinity} // Repeat the sequence infinitely
        style={{ fontSize: '2em', display: 'inline-block' }} // Custom style for the text
      />
    </h3>
  );
};

export default TypingEffect;
