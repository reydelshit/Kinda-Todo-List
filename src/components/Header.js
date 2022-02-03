import React from 'react';
import Button from './Button'

const Header = ({title, taskShow, showTitle}) => {

  return (
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showTitle ? 'black' : 'green'} title={showTitle ? 'Close' : 'Add'} clickMe={taskShow}/>
      </header>
  );
};

export default Header;
