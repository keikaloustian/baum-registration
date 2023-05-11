"use client";

export default function Form({ formData, setFormData }) {
  return (
    <form className="col-span-4 flex flex-col p-12 gap-8">
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
      </label>

      {/* SCHOLARSHIP OPTIONS */}
      <p className="text-xl tracking-widest after:content-['*'] after:text-vpurple after:font-semibold after:inline-block">
        Selecciona un curso para el sorteo de la beca:
      </p>
      <div>
        <input
          id="opt1"
          type="radio"
          value="curso1"
          name="opcion"
          checked={formData.opcion === "curso1"}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
        <label className="m-2" htmlFor="opt1">
          Curso 1
        </label>

        <br />
        <br />

        <input
          id="opt2"
          type="radio"
          value="curso2"
          name="opcion"
          checked={formData.opcion === "curso2"}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
        <label className="m-2" htmlFor="opt2">
          Curso 2
        </label>
      </div>
    </form>
  );
}
