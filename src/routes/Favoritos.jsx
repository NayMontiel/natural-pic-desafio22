import { useContext } from "react"
import Context from "../context/Context"

const Favoritos = () => {
  const {gallery, setGallery} = useContext(Context);

  const removeFavorite = (id) => {
    const photoIndex = gallery.findIndex((item) => item.id === id);
    gallery[photoIndex].liked = !gallery[photoIndex].liked;
    setGallery([...gallery]);
  };

  return (
    <>
      <h1 className="titulo mb-4">Fotos favoritas</h1>
        <div className="galeria grid-columns-4 p-3 animate__animated animate__heartBeat">
          {
            gallery
            .filter((item) => item.liked) 
            .map((item, i) => (
              <img 
                src={item.src} 
                alt={item.descripcion} 
                onClick={() => removeFavorite(item.id)} 
                key={i}
              />
            ))
          }
       </div>
    </>
  )
}

export default Favoritos