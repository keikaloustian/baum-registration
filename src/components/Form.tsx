"use client";

export default function Form({ formData, setFormData }) {
  return (
    <form className="col-span-3">
      {/* NOMBRE */}
      <label>
        Nombre:
        <input
          type="text"
          value={formData.nombre || ""}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
        />
      </label>

      {/* CELULAR */}
      <label>
        Número Celular:
        <input
          type="text"
          value={formData.celular || ""}
          onChange={(e) =>
            setFormData({ ...formData, celular: e.target.value })
          }
          required
        />
      </label>

      {/* EMAIL */}
      <label>
        Correo Electrónico:
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>

      {/* SCHOLARSHIP OPTIONS */}

      <label className="">
        Curso 1
        <input
          type="radio"
          value="curso1"
          name="opcion"
          checked={formData.opcion === "curso1"}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
      </label>
      <label className="">
        Curso 2
        <input
          type="radio"
          value="curso2"
          name="opcion"
          checked={formData.opcion === "curso2"}
          onChange={(e) => {
            setFormData({ ...formData, opcion: e.target.value });
          }}
        ></input>
      </label>
    </form>
  );
}
