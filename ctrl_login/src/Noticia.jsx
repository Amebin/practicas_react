function Noticia({ contenido }) {
    return (
     <>
     <div>
     <h2>{ contenido.titulo } {contenido.id }</h2>
     <h3>{contenido.anticipo }</h3>
     </div>   
     </>
   )
 }


export default Noticia