"use client";

import { SyntheticEvent, useState } from "react";
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
const questionIndices = fiveRandomNumsBetween(0, 4);

// interface FormTypes {}

// const validateForm = () => {};

// const formHandler = (e: SyntheticEvent) => {
//   e.preventDefault();
//   alert("submitted");
// };

export default function FormAndQs() {
  // Step system through form and questions
  const [step, setStep] = useState(2);
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

  // User data
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  // Question answer correctness
  const [qResults, setQResults] = useState([false, false, false, false, false]);

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
          question={questionBank[questionIndices[step - 2]]}
          step={step}
          qResults={qResults}
          setQResults={setQResults}
        ></Question>
      )}

      {/* Q2 */}
      {step === 3 && (
        <Question
          question={questionBank[questionIndices[step - 2]]}
          step={step}
          qResults={qResults}
          setQResults={setQResults}
        ></Question>
      )}

      {/* Q3 */}
      {step === 4 && (
        <Question
          question={questionBank[questionIndices[step - 2]]}
          step={step}
          qResults={qResults}
          setQResults={setQResults}
        ></Question>
      )}

      {/* Q4 */}
      {step === 5 && (
        <Question
          question={questionBank[questionIndices[step - 2]]}
          step={step}
          qResults={qResults}
          setQResults={setQResults}
        ></Question>
      )}

      {/* Q5 */}
      {step === 6 && (
        <Question
          question={questionBank[questionIndices[step - 2]]}
          step={step}
          qResults={qResults}
          setQResults={setQResults}
        ></Question>
      )}

      {step < 6 && <NextStepButton clickHandler={nextStep}></NextStepButton>}

      {step > 1 && (
        <PreviousStepButton clickHandler={previousStep}></PreviousStepButton>
      )}
    </main>
  );
}
