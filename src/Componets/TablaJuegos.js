import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TablaJuegos() {
  return (
    <div className="juegos col-10 col-md-8 col-lg-12 m-auto">
      <Link className="btn btn-primary my-3" to="/AgregarJuego">
        Agregar juego
      </Link>
      <Tabla />
    </div>
  );
}

function Tabla() {
  const [data, setData] = useState({
    headers: ["year", "title", "rating", "console", "stock"],
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
    <div className="tabla">
      <table className="table table-dark">
        <thead>
          <tr>
            <th className="encabezado">Año</th>
            <th className="encabezado">Titulo</th>
            <th className="encabezado">Clasificacion</th>
            <th className="encabezado">Consola</th>
            <th className="encabezado">Stock</th>
            <th className="encabezado">Acciones</th>
          </tr>
        </thead>
        {data.games.length > 0 && (
          <tbody>
            {data.games.map((game, index) => (
              <tr className="fila" key={index}>
                {data.headers.map((header, index) => (
                  <td className="detalle bg-secondary" key={index}>
                    {game[header]}
                  </td>
                ))}
                <td className="accion bg-secondary">
                  <button type="button" className="btn btn-sm bg-danger" onClick={() => handleDelete(game.uuid)}>
                    <i className="bi bi-trash-fill text-white"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
