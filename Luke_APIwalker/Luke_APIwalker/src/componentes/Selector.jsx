import React, { useState, useEffect } from 'react';

const Selector = ({ onOptionChange }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        fetch('https://swapi.py4e.com/api/')
            .then(response => response.json())
            .then(data => {
                const resourceNames = Object.keys(data);
                const resourceOptions = resourceNames.map((resource, index) => ({
                    value: index + 1,
                    label: resource
                }));
                
                setOptions(resourceOptions);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onOptionChange(event.target.value);
    };

    return (
        <>
            <div className="mb-6 row">
                <label htmlFor="resource" className="col-sm-6 col-form-label">Select a resource:</label>
                <div className="col-sm-6">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        
                        <select className="form-select" aria-label="Select a resource" value={selectedOption} onChange={handleOptionChange} required>
                            <option value="">Selecionar un elemento</option>
                            {options.map(option => (
                                <option data-ico="bi bi-person-circle" key={option.value} value={option.label}>{option.label}</option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
        </>
    );
};

export default Selector;
