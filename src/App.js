import NavBar from "./components/NavBar";
import 'animate.css';
import { Outlet } from "react-router-dom";
import Context from "./context/Context";
import React,{useState, useEffect} from "react";

function App() {
  const [gallery, setGallery] = useState([]);

  const endpoint = "json/fotos.json";
  const getImgNatural = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
     let dataFilt = data.photos.map((item) => ({
        id: item.id,
        src: item.src.tiny,
        descripcion: item.alt,
        liked: false
      }));
      setGallery(dataFilt);
      console.log(dataFilt)
  };

  useEffect(() => {
    getImgNatural();
  }, []);
  return (
    <>
      <Context.Provider value={{gallery, setGallery}}>
        <NavBar />
        <main className="container text-center mt-5">
          <Outlet />
        </main>
      </Context.Provider>
    </>
  );
}

export default App;
