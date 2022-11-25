import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TablaJuegos() {
  return (
    <div className="tabla-juegos col-10 col-md-8 col-lg-12 m-auto">
      <Link className="btn btn-primary my-2" to="/AgregarJuego">
        <i className="bi bi-plus-square-fill"> </i> Agregar juego
      </Link>
      <Tabla />
    </div>
  );
}

function Tabla() {
  const [data, setData] = useState({
    headers: ["code", "title", "platform", "rating", "year", "stock"],
    games: [],
  });

  useEffect(() => {
    const listaJuegos = localStorage.getItem("juegos");
    if (listaJuegos) {
      const localData = JSON.parse(listaJuegos);
      setData({ ...data, games: localData });
    }
  }, []);

  const handleDelete = (uuid) => {
    const games = data.games;
    const filteredGames = games.filter((game) => game.uuid !== uuid);
    setData({ ...data, games: filteredGames });
    localStorage.setItem("juegos", JSON.stringify(filteredGames));
  };

  return (
    <>
      {data.games.length > 0 && (
        <table className="table table-dark mt-3">
          <thead>
            <tr>
              <th className="encabezado">Codigo</th>
              <th className="encabezado">Titulo</th>
              <th className="encabezado">Plataforma</th>
              <th className="encabezado">Clasificacion</th>
              <th className="encabezado">Año</th>
              <th className="encabezado">Stock</th>
              <th className="encabezado">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.games.map((game, index) => (
              <tr className="fila" key={index}>
                {data.headers.map((header, index) => (
                  <td className="detalle" key={index}>
                    {game[header]}
                  </td>
                ))}
                <td className="accion">
                  <button type="button" className="btn btn-sm bg-danger" onClick={() => handleDelete(game.uuid)}>
                    <i className="bi bi-trash-fill text-white"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
