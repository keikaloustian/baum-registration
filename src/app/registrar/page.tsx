"use client";

import { useState } from "react";
import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";
import Form from "@/components/Form";
import fiveRandomNumsBetween from "@/utils/fiveRandomNums";
import NextStepButton from "@/components/NextStepButton";
import PreviousStepButton from "@/components/PreviousStepButton";
import Question from "@/components/Question";
import SubmitButton from "@/components/SubmitButton";

const questionBank = [
  {
    prompt: "¿EN QUE CIUDAD SE INVENTO EL TECHNO?",
    alternatives: {
      a: "BERLIN",
      b: "DETROIT",
      c: "IBIZA",
      d: "CHICAGO",
    },
    answer: "b",
  },
  {
    prompt: "¿EN QUE AÑO INICIÓ EL BAUM FESTIVAL?",
    alternatives: {
      a: "2017",
      b: "2022",
      c: "2013",
      d: "2015",
    },
    answer: "c",
  },
  {
    prompt: "¿EN QUE CIUDAD SE FUNDÓ EL LOVE PARADE?",
    alternatives: {
      a: "BERLIN",
      b: "BARCELONA",
      c: "MIAMI",
      d: "AMSTERDAM",
    },
    answer: "a",
  },
  {
    prompt: "¿A QUIENES SE LES CONSIDERA LOS FUNDADORES DEL TECHNO?",
    alternatives: {
      a: "JEFF MILLS, CARL CRAIG, KERRI CHANDLER",
      b: "JUAN ATKINS, OCTAVE ONE, ROBERT HOOD",
      c: "OSCAR MULERO, DAX J, RODHAD",
      d: "KEVIN SAUNDERSON, JUAN ATKINS, DERRICK MAY",
    },
    answer: "b",
  },
  {
    prompt: "¿CÓMO SE LLAMA EL SELLO DE AMELIE LENS?",
    alternatives: {
      a: "KNTXT",
      b: "EXHALE",
      c: "SUARA",
      d: "DRUMCODE",
    },
    answer: "a",
  },
  {
    prompt: "¿CON QUE OTRO NOMBRE SE LE CONOCE A RICHIE HAWTIN?",
    alternatives: {
      a: "RICHIE H",
      b: "PLASTIKMAN",
      c: "DJ HAWTIN",
      d: "PLANETARY ASSALUT SYSTEMS",
    },
    answer: "b",
  },
  {
    prompt: "¿CUÁL FUE EL PRIMER SELLO DONDE PRENSO SU PRIMER TRACK VITALIC?",
    alternatives: {
      a: "INTERNATIONAL DJ GIGOLO RECORDS",
      b: "MINUS",
      c: "PLUS 8",
      d: "BAUM MUSIC RECORDS",
    },
    answer: "a",
  },
  {
    prompt: "¿QUÉ ES UN MOOG?",
    alternatives: {
      a: "UNA TORNAMESA",
      b: "UN REPRODUCTOR DE VINILOS",
      c: "UN POCILLO PARA TOMAR CAFE",
      d: "SINTETIZADOR",
    },
    answer: "d",
  },
  {
    prompt: "¿CUÁL ES LA MARCA MÁS RECONOCIDA DE TORNAMESAS?",
    alternatives: {
      a: "DENON",
      b: "PIONEER",
      c: "VYNIL",
      d: "TECHNICS",
    },
    answer: "d",
  },
];

// Arguments must be the min and max indices of the questionBank array
const qIndices = fiveRandomNumsBetween(0, questionBank.length - 1);

interface FormData {
  nombre: string;
  celular: string;
  email: string;
  opcion: string;
  respuestasCorrectas?: number;
}

const validateForm = (data: FormData, errors: FormData, setErrors) => {
  // Initialize flag
  let anyErrors = false;

  // Reset errors
  setErrors({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  // Validate nombre
  if (!data.nombre) {
    setErrors((prev) => {
      return { ...prev, nombre: "Requerido" };
    });
    anyErrors = true;
  }

  // Validate phone
  if (!data.celular) {
    setErrors((prev) => {
      return { ...prev, celular: "Requerido" };
    });
    anyErrors = true;
  } else if (data.celular.length < 10) {
    setErrors((prev) => {
      return { ...prev, celular: "Número celular debe tener 10 dígitos" };
    });
    anyErrors = true;
  }

  // Validate email
  if (!data.email) {
    setErrors((prev) => {
      return { ...prev, email: "Requerido" };
    });
    anyErrors = true;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    setErrors((prev) => {
      return { ...prev, email: "Formato de correo electrónico inválido" };
    });
    anyErrors = true;
  }

  // Validate course selection
  if (!data.opcion) {
    setErrors((prev) => {
      return { ...prev, opcion: "Requerido" };
    });
    anyErrors = true;
  }

  return anyErrors;
};

const checkAnswers = (answers: string[], qIndices: number[], qBank): number => {
  let correctAnswers = 0;
  for (const i in qIndices) {
    if (answers[i] === qBank[qIndices[i]].answer) {
      correctAnswers++;
    }
  }
  return correctAnswers;
};

const submitData = async (
  data: FormData,
  answers: string[],
  qIndices: number[],
  qBank
) => {
  const payload = { ...data };

  // Check how many correct answers
  const correctAnswers = checkAnswers(answers, qIndices, qBank);

  // Append to payload
  payload.respuestasCorrectas = correctAnswers;

  // Send POST request to /api/enviar
  const response = await fetch("/api/enviar", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  // Parse response body json to JS object
  const result = await response.json();

  // Report error
  if (result.status !== 200) {
    alert("\nSe detectó un error.\n\nPor favor, inténtalo de nuevo.");
  }

  // Report success
  if (result.status === 200) {
    let successMessage = `\n¡Registro completado!\n\nAcertaste ${correctAnswers} de las 5 preguntas`;

    if (correctAnswers === 5) {
      successMessage += "\n\n¡Ganaste una cerveza gratis!";
    }
    alert(successMessage);
  }
};

export default function FormAndQs() {
  // Step system through form and questions
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Registration form data
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  // Form validation errors
  const [formErrors, setFormErrors] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  // Question answers
  const [qAnswers, setQAnswers] = useState([]);

  return (
    <main className="grid grid-cols-10 min-h-screen bg-white">
      {/* FIRST STEP: FORM */}
      {step === 1 && (
        <>
          <div className="bg-moss col-span-6 flex overflow-hidden">
            <Image
              src={logo}
              alt="Baum Music School Logo"
              className="self-center"
              priority
            ></Image>
          </div>
          <Form
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          ></Form>
        </>
      )}

      {/* Q1 */}
      {step === 2 && (
        <Question
          question={questionBank[qIndices[step - 2]]}
          step={step}
          qAnswers={qAnswers}
          setQAnswers={setQAnswers}
        ></Question>
      )}

      {/* Q2 */}
      {step === 3 && (
        <Question
          question={questionBank[qIndices[step - 2]]}
          step={step}
          qAnswers={qAnswers}
          setQAnswers={setQAnswers}
        ></Question>
      )}

      {/* Q3 */}
      {step === 4 && (
        <Question
          question={questionBank[qIndices[step - 2]]}
          step={step}
          qAnswers={qAnswers}
          setQAnswers={setQAnswers}
        ></Question>
      )}

      {/* Q4 */}
      {step === 5 && (
        <Question
          question={questionBank[qIndices[step - 2]]}
          step={step}
          qAnswers={qAnswers}
          setQAnswers={setQAnswers}
        ></Question>
      )}

      {/* Q5 */}
      {step === 6 && (
        <Question
          question={questionBank[qIndices[step - 2]]}
          step={step}
          qAnswers={qAnswers}
          setQAnswers={setQAnswers}
        ></Question>
      )}

      {step === 6 && qAnswers[step - 2] && (
        <SubmitButton
          clickHandler={() =>
            submitData(formData, qAnswers, qIndices, questionBank)
          }
        />
      )}

      {step < 6 && (
        <NextStepButton
          clickHandler={() => {
            // Validate form between steps 1 and 2
            if (step === 1) {
              // If there are any errors, do not advance
              if (validateForm(formData, formErrors, setFormErrors)) {
                return;
              }
              nextStep();
            }

            // Advance if question has been answered
            if (step > 1 && qAnswers[step - 2]) {
              nextStep();
            }
          }}
        ></NextStepButton>
      )}

      {step > 1 && (
        <PreviousStepButton clickHandler={previousStep}></PreviousStepButton>
      )}
    </main>
  );
}
