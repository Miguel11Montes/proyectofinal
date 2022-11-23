import { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AgregarJuego() {
  const [data, setData] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = input.value.trim();
    });

    if (!e.target.checkValidity()) {
      e.stopPropagation();
    } else {
      history.push("/juegos");
    }

    e.target.classList.add("was-validated");
    const list = JSON.parse(localStorage.getItem("juegos"));
    const newData = {
      uuid: uuidv4(),
      year: data.year,
      title: data.title,
      rating: data.rating,
      console: data.console,
      stock: data.stock,
    };
    list.push(newData);
    localStorage.setItem("juegos", JSON.stringify(list));
  };

  const handleChange = (e) => {
    const input = e.target.value.trim();
    const source = e.target.name;

    // Checks if input is not empty
    if (input.length > 0) {
      setData((prev) => ({ ...prev, [source]: input }));
    }
  };

  return (
    <div className="agregar-juego col-10 col-lg-5 mx-auto my-5">
      <form
        className="formulario needs-validation d-flex flex-column gap-5 text-start"
        onSubmit={handleSubmit}
        onReset={(e) => e.target.classList.remove("was-validated")}
        noValidate
      >
        <FormRow label={"Año"} type={"number"} name={"year"} placeholder={"2022"} min={"1958"} handler={handleChange} />
        <FormRow
          label={"Titulo"}
          type={"text"}
          name={"title"}
          placeholder={"God Of War: Ragnarok"}
          handler={handleChange}
        />
        <FormRow label={"Clasificacion"} type={"text"} name={"rating"} placeholder={"ESRB M"} handler={handleChange} />
        <FormRow
          label={"Consola"}
          type={"text"}
          name={"console"}
          placeholder={"PlayStation / Nintendo"}
          handler={handleChange}
        />
        <FormRow label={"Stock"} type={"number"} name={"stock"} placeholder={"1"} min={"1"} handler={handleChange} />
        <div className="input-group w-100">
          <button type="submit" className="btn btn-primary rounded me-4">
            Guardar
          </button>
          <button type="reset" className="btn btn-secondary rounded">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

function FormRow({ label, type, name, placeholder, min, handler }) {
  return (
    <div className="input-group flex-column flex-md-row gap-1 w-100">
      <label className="fw-bold text-white col-3">{label}:</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control rounded col"
        onChange={handler}
        min={min}
        required
      />
      <div className="invalid-feedback text-end">Por favor ingrese el año</div>
    </div>
  );
}
