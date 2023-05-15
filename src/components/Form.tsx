"use client";

import FormError from "./FormError";

// Define course options for the scholarship giveaway
const option1 = "Producción Musical";
const option2 = "DJ";

export default function Form({ formData, setFormData, formErrors }) {
  return (
    <form className="col-span-4 flex flex-col p-12 gap-12">
      {/* NOMBRE */}
      <label className="label">
        <span className="after:content-['*'] after:text-vpurple after:font-semibold after:inline-block">
          Tu Nombre:
        </span>
        <br />
        <input
          type="text"
          value={formData.nombre || ""}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          className="input"
          maxLength={50}
        />
        {formErrors.nombre && <FormError message={formErrors.nombre} />}
      </label>

      {/* CELULAR */}
      <label className="label">
        <span className="after:content-['*'] after:text-vpurple after:font-semibold after:inline-block">
          Número Celular:
        </span>
        <br />
        <input
          type="tel"
          value={formData.celular || ""}
          onChange={(e) => {
            // If anything other than a number is typed, do nothing
            if (e.target.value.match(/\D/)) {
              return;
            }
            setFormData({ ...formData, celular: e.target.value });
          }}
          required
          className="input"
          maxLength={10}
        />
        {formErrors.celular && <FormError message={formErrors.celular} />}
      </label>

      {/* EMAIL */}
      <label className="label">
        <span className="after:content-['*'] after:text-vpurple after:font-semibold after:inline-block">
          Correo Electrónico:
        </span>
        <br />
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="input"
          maxLength={50}
        />
        {formErrors.email && <FormError message={formErrors.email} />}
      </label>

      {/* SCHOLARSHIP OPTIONS */}
      <div>
        <p className="text-xl tracking-widest after:content-['*'] after:text-vpurple after:font-semibold after:inline-block my-2">
          Selecciona un curso para el sorteo de la beca:
        </p>
        {formErrors.opcion && <FormError message={formErrors.opcion} />}
      </div>
      <div>
        <input
          id="opt1"
          type="radio"
          value={option1}
          name="opcion"
          checked={formData.opcion === option1}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
        <label className="m-2" htmlFor="opt1">
          {option1}
        </label>

        <br />
        <br />

        <input
          id="opt2"
          type="radio"
          value={option2}
          name="opcion"
          checked={formData.opcion === option2}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
        <label className="m-2" htmlFor="opt2">
          {option2}
        </label>
      </div>
    </form>
  );
}
