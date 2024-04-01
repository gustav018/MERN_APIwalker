

import InputBuscar from './InputBuscar';
import InputID from './InputID';
import React, { useState } from 'react';
import Selector from './Selector'; // Adjust this path according to your project structure
import Tarjeta from './Tarjeta';

const Formulario = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const handleBuscarClick = async () => {
        if (selectedOption && inputValue) {
            try {
                const response = await fetch(`https://swapi.py4e.com/api/${selectedOption}/${inputValue}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }
                const data = await response.json();
                setApiData(data);
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div className="container text-center mt-5">
                <div className="row justify-content-md-center">

                    <div className="col-md-auto">
                        <Selector onOptionChange={handleOptionChange} />
                    </div>
                    <div className="col-md-auto">
                        <InputID setInputValue={setInputValue} />
                    </div>
                    <div className="col-md-auto">
                        <InputBuscar onBuscarClick={handleBuscarClick} />
                    </div>
                </div>
            </div>
            <Tarjeta data={apiData} error={error} />


        </>
    )
}

export default Formulario