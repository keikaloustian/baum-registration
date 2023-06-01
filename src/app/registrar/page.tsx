"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Static assets
import logo from "../../../public/Logo-White-Vertical.png";

// Components
import Form from "@/components/Form";
import NextStepButton from "@/components/NextStepButton";
import PreviousStepButton from "@/components/PreviousStepButton";
import Question from "@/components/Question";
import SubmitButton from "@/components/SubmitButton";

// Helper functions
import fiveRandomNumsBetween from "@/utils/fiveRandomNums";
import Results from "@/components/Results";

interface QuestionBank {
  prompt: string;
  alternatives: { a: string; b: string; c: string; d: string };
  answer: string;
}

const questionBank = [
  {
    prompt: "¿EN QUE CIUDAD SE INVENTÓ EL TECHNO?",
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
    answer: "d",
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
    answer: "d",
  },
  {
    prompt: "¿CÓMO SE LLAMA EL SELLO DE AMELIE LENS?",
    alternatives: {
      a: "KNTXT",
      b: "EXHALE",
      c: "SUARA",
      d: "DRUMCODE",
    },
    answer: "b",
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
  {
    prompt:
      "¿CÓMO SE LLAMA EL EGRESADO DE BAUM MUSIC SCHOOL QUE DEBUTARÁ EN ESTA EDICIÓN DE BAUM FESTIVAL?",
    alternatives: {
      a: "FUNK TRIBU",
      b: "CHEO CUBILLOS",
      c: "INSURGENT",
      d: "SANCHEZ JR",
    },
    answer: "c",
  },
  {
    prompt: "¿DE QUÉ PAÍS ES NINA KRAVIZ?",
    alternatives: {
      a: "REPUBLICA CHECA",
      b: "RUSIA",
      c: "UNIÓN SOVIETICA",
      d: "POLONIA",
    },
    answer: "b",
  },
  {
    prompt: "¿CUÁL FUE EL CLUB Y ACTUALMENTE EL SELLO DE SVEN VÃTH?",
    alternatives: { a: "FABRIC", b: "PACHA", c: "SPACE", d: "COCOON" },
    answer: "d",
  },
  {
    prompt: "¿EL LEGENDARIO TRACK PRODUCIDO POR BEN KLOCK?",
    alternatives: { a: "SCORPION", b: "NUMB", c: "SUBZERO", d: "THE BELLS" },
    answer: "c",
  },
  {
    prompt: "¿QUIEN DE ESTOS ARTISTAS TOCA EN FORMATO 'LIVE ACT'?",
    alternatives: {
      a: "NICOLA CRUZ",
      b: "MIND AGAINST",
      c: "ANIMAL TRAINER",
      d: "FARRAGO",
    },
    answer: "a",
  },
  {
    prompt:
      "¿CUAL ES UNO DE LOS SELLOS QUE TIENEN EN COMÚN COLYN, KEVIN DE VRIES, KAS:ST, MIND AGAINST, INNELLEA?",
    alternatives: {
      a: "LIFE AND DEATH",
      b: "AFTERLIFE",
      c: "INNERVISIONS",
      d: "SIAMESE",
    },
    answer: "b",
  },
];

// Array of five numbers pointing to five random questions
const qIndices = fiveRandomNumsBetween(0, questionBank.length - 1);

interface FormData {
  nombre: string;
  celular: string;
  email: string;
  opcion: string;
  respuestasCorrectas?: number;
}

const validateForm = (
  data: FormData,
  errors: FormData,
  setErrors: Dispatch<SetStateAction<FormData>>
) => {
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
    setErrors((prev: FormData) => {
      return { ...prev, nombre: "Requerido" };
    });
    anyErrors = true;
  }

  // Validate phone
  if (!data.celular) {
    setErrors((prev: FormData) => {
      return { ...prev, celular: "Requerido" };
    });
    anyErrors = true;
  } else if (data.celular.length < 10) {
    setErrors((prev: FormData) => {
      return { ...prev, celular: "Número celular debe tener 10 dígitos" };
    });
    anyErrors = true;
  }

  // Validate email
  if (!data.email) {
    setErrors((prev: FormData) => {
      return { ...prev, email: "Requerido" };
    });
    anyErrors = true;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    setErrors((prev: FormData) => {
      return { ...prev, email: "Formato de correo electrónico inválido" };
    });
    anyErrors = true;
  }

  // Validate course selection
  if (!data.opcion) {
    setErrors((prev: FormData) => {
      return { ...prev, opcion: "Requerido" };
    });
    anyErrors = true;
  }

  return anyErrors;
};

// Returns the number of correct answers (out of five)
const checkAnswers = (
  answers: string[],
  qIndices: number[],
  qBank: QuestionBank[]
): number => {
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
  qBank: QuestionBank[]
) => {
  const payload = { ...data };

  // Check how many correct answers
  const correctAnswers = checkAnswers(answers, qIndices, qBank);

  // Append to payload
  payload.respuestasCorrectas = correctAnswers;

  try {
    // Send POST request to /api/enviar
    const response = await fetch("/api/enviar", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    // Parse response body json to JS object
    const result = await response.json();

    // Report error
    if (result.status !== 200) {
      alert(
        "\nOcurrió un error al guardar su información.\n\nPor favor, inténtalo de nuevo."
      );
    }

    // Report success
    if (result.status === 200) {
      return "success";
    }
  } catch (error) {
    console.log("Route error\n" + error);
    alert(
      "\nOcurrió un error al enviar sus datos.\n\nPor favor, inténtalo de nuevo."
    );
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

  // State for showing results modal
  const [showResults, setShowResults] = useState(false);

  // Router for redirection after submission
  const router = useRouter();

  return (
    <main className="grid grid-cols-10 min-h-screen bg-white">
      {/* FIRST STEP: FORM */}
      {step === 1 && (
        <>
          <div className="bg-moss col-span-6 flex overflow-hidden">
            <Image
              src={logo}
              alt="Baum Music School Logo"
              className="self-center animate-slideUpFade"
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
          clickHandler={async () => {
            // If submission is successful, redirect to home
            if (
              (await submitData(formData, qAnswers, qIndices, questionBank)) ===
              "success"
            ) {
              setShowResults(true);
            }
          }}
        />
      )}

      {/* NEXT BUTTON */}
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

      {/* PREVIOUS BUTTON */}
      {step > 1 && (
        <PreviousStepButton clickHandler={previousStep}></PreviousStepButton>
      )}

      {/* RESULTS MODAL */}
      {showResults && (
        <Results
          correctAnswers={checkAnswers(qAnswers, qIndices, questionBank)}
        />
      )}
    </main>
  );
}
