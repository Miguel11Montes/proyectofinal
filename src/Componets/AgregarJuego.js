import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AgregarJuego() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState({ alert: null, message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = input.value.trim();
    });

    if (!e.target.checkValidity()) {
      e.stopPropagation();
    } else {
      const list = JSON.parse(localStorage.getItem("juegos"));

      if (list) {
        if (list.some((game) => game.code === data.code)) {
          setStatus({ alert: true, message: "El juego ya esta registrado" });
        } else {
          const newData = {
            uuid: uuidv4(),
            stock: data.stock,
            code: data.code,
            title: data.title,
            platform: data.platform,
            rating: data.rating,
            year: data.year,
          };
          list.push(newData);
          localStorage.setItem("juegos", JSON.stringify(list));
          setStatus({ alert: true, message: "Juego agregado correctamente" });
        }
      } else {
        localStorage.setItem("juegos", JSON.stringify([data]));
        setStatus({ alert: true, message: "Juego agregado correctamente" });
      }
    }

    e.target.classList.add("was-validated");
  };

  const handleReset = (e) => {
    e.target.classList.remove("was-validated");
    setStatus({ alert: false, message: "" });
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
    <div className="agregar-juego col-10 col-lg-5 mx-auto mt-4 mb-5">
      {status.alert && <div className="alert alert-warning mb-5">{status.message}</div>}
      <form
        className="formulario needs-validation d-flex flex-column gap-5 text-start"
        onSubmit={handleSubmit}
        onReset={handleReset}
        noValidate
      >
        <FormRow label={"Codigo"} type={"text"} name={"code"} placeholder={"012345"} handler={handleChange} />
        <FormRow
          label={"Titulo"}
          type={"text"}
          name={"title"}
          placeholder={"God Of War: Ragnarok"}
          handler={handleChange}
        />
        <FormRow
          label={"Plataforma"}
          type={"text"}
          name={"platform"}
          placeholder={"PlayStation / Nintendo"}
          handler={handleChange}
        />
        <FormRow label={"Clasificacion"} type={"text"} name={"rating"} placeholder={"ESRB M"} handler={handleChange} />
        <FormRow label={"Año"} type={"number"} name={"year"} placeholder={"2022"} min={"1958"} handler={handleChange} />
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
      <div className="invalid-feedback text-end text-dark fst-italic">Por favor complete este campo</div>
    </div>
  );
}
