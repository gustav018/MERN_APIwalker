
import { useParams } from "react-router-dom"
const Hello = () => {
    //:textoColor/:textoFondo
    const {texto, textoColor, textoFondo } = useParams();
  return (
    <>
    <div className="row justify-content-md-center mt-5" style={{backgroundColor: textoFondo, color: textoColor}}>
    <div className="col-md-auto">
        <h1>The world is: {texto}</h1>
    </div>
</div>
</>

  )
}

export default Hello