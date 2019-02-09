import React from 'react';

import './Button.css';

const Button = ({ className = '', content = '', makeSomeСhanges }) => (
    <button className={className} onClick={makeSomeСhanges}>
        {content}
    </button>
);

export default Button;
