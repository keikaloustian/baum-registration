"use client";

import { useState } from "react";
import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";

const questionBank = [];

interface FormTypes {}

const validateForm = () => {};

const formHandler = (e) => {
  e.preventDefault();
  alert("submitted");
};

export default function Forms() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });
  // const [nombre, setNombre] = useState("");
  // const [celular, setCelular] = useState("");
  // const [email, setEmail] = useState("");
  // const [opcion, setOpcion] = useState("");

  return (
    <main className="grid grid-cols-5 min-h-screen bg-white">
      <div className="bg-moss col-span-3 flex overflow-hidden">
        <Image
          src={logo}
          alt="Baum Music School Logo"
          className="self-center"
          priority
        ></Image>
      </div>

      <form className="col-span-2" onSubmit={(e) => formHandler(e)}>
        {/* NOMBRE */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        {/* CELULAR */}
        <label>
          Número Celular:
          <input
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
        </label>

        {/* EMAIL */}
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {/* SCHOLARSHIP OPTIONS */}

        <label className="">
          Curso 1<input type="radio" value="curso1" name="opcion"></input>
        </label>
        <label className="">
          Curso 2<input type="radio" value="curso2" name="opcion"></input>
        </label>
      </form>
    </main>
  );
}
