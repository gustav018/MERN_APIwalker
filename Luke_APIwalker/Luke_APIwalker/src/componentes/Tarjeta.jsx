import React from 'react';

const Tarjeta = ({ data, error }) => {

    if (error || (!data || Object.keys(data).length === 0)) {

        return (
            <>
                <div className="row justify-content-md-center error">
                    
                    <div className="col-md-auto">
                        <div className="card" style={{ width: '18rem' }}>
                            <h5>Estos no son los droides que está buscando</h5>
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYiTSOjqf7iiyDVAayicELb8KgH3et34WknSCjd-56sGaUnkoIzZ--BnPmWJpxi4EWNA&usqp=CAU" alt="Obi-Wan Kenobi" />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {

        const entries = Object.entries(data).slice(0, 5);
        return (
            <>
               <div className="row justify-content-md-center ">
                    
                    <div className="col-md-auto">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h1>{entries[0][1]}</h1>
                                {entries.slice(1).map(([key, value]) => (
                                    <p key={key} className="card-text">
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Tarjeta;
