import Tarjeta from "./Tarjeta"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const DetalleTarjeta = () => {
    const { id } = useParams();
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
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
        fetchData()
    }, [id])
  return (
    
    <>
    <Tarjeta data={apiData} error={error} />
    </>
    
  )
}

export default DetalleTarjeta
