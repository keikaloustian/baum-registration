"use client";

import { SyntheticEvent, useState } from "react";
import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";
import Form from "@/components/Form";

const questionBank = [
  {
    prompt: "This is a test question?",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
];

interface FormTypes {}

const validateForm = () => {};

const formHandler = (e: SyntheticEvent) => {
  e.preventDefault();
  alert("submitted");
};

export default function FormAndQs() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  return (
    <main className="grid grid-cols-10 min-h-screen bg-white">
      <div className="bg-moss col-span-6 flex overflow-hidden">
        <Image
          src={logo}
          alt="Baum Music School Logo"
          className="self-center"
          priority
        ></Image>
      </div>

      <Form formData={formData} setFormData={setFormData}></Form>
    </main>
  );
}
