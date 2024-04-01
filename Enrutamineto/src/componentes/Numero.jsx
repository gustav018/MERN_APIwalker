import { useParams } from "react-router-dom"
const Numero = () => {
    const { id } = useParams()

  return (
    <>
     <div className="row justify-content-md-center mt-5">
                <div className="col-md-auto">
                    <h1>the number is: {id}</h1>
                </div>
            </div>
    </>
  )
}

export default Numero