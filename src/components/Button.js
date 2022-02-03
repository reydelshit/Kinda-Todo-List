import React from 'react';

function Button({ clickMe, title, color}) {
  return (
    <button style={{backgroundColor: color}} onClick={clickMe} className='btn'>{title}</button>
  );
}

export default Button;
