import React from 'react';

const InputBuscar = ({ onBuscarClick }) => {
  const handleClick = () => {
    onBuscarClick(); 
  };

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>Search</button>
    </>
  );
};

export default InputBuscar;
