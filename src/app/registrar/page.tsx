"use client";

import { useState } from "react";
import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";
import Form from "@/components/Form";
import fiveRandomNumsBetween from "@/utils/fiveRandomNums";
import NextStepButton from "@/components/NextStepButton";
import PreviousStepButton from "@/components/PreviousStepButton";
import Question from "@/components/Question";

const questionBank = [
  {
    prompt: "Prompt 1",
    alternatives: { a: "Text", b: "Text", c: "Text" },
    answer: "a",
  },
  {
    prompt: "Prompt 2",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "a",
  },
  {
    prompt: "Prompt 3",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "a",
  },
  {
    prompt: "Prompt 4",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "a",
  },
  {
    prompt: "Prompt 5",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "a",
  },
];

// Arguments must be the min and max indices of the questionBank array
const qIndices = fiveRandomNumsBetween(0, 4);

interface FormData {
  nombre: string;
  celular: string;
  email: string;
  opcion: string;
  respuestasCorrectas?: number;
}

// const validateForm = () => {};

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

  const result = await response.json();
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
  const [errors, setErrors] = useState({
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
          <Form formData={formData} setFormData={setFormData}></Form>
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

      {step === 6 && (
        <button
          onClick={() => submitData(formData, qAnswers, qIndices, questionBank)}
          className="fixed bottom-0 right-0"
        >
          Submit
        </button>
      )}

      {step < 6 && <NextStepButton clickHandler={nextStep}></NextStepButton>}

      {step > 1 && (
        <PreviousStepButton clickHandler={previousStep}></PreviousStepButton>
      )}
    </main>
  );
}
