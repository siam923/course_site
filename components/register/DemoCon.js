"use client";
import { createContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Rules } from "./steps/Rules";
import { ParentsForm } from "./steps/ParentsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { initialValues, studentDetails } from "./InitialValues";
import { Form } from "@/components/ui/form";
import { StudentForm } from "./steps/StudentForm";

import ProgressBar from "./ProgressBar";

import { StepContext } from "./steps/StepContext";
import { EmergencyForm } from "./steps/EmergencyForm";
import { MedicalForm } from "./steps/MedicalForm";
import {
  medicalDetailsSchema,
  rulesSchema,
} from "@/lib/validators/registerSchema";

// const medicalDetailsSchema = z.object({
//   medicalDetails: {
//     additionalInformation: z.string().optional(),
//   },
// });

const studentSchema = z.object({
  medicalDetails: medicalDetailsSchema,
});

// const steps = [<StudentForm />];

const steps = [<MedicalForm />];

const DemoCon = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const validateStep = useRef(async () => true);

  const methods = useForm({
    // resolver: zodResolver(formSchema),
    // resolver: zodResolver(medicalDetailsSchema),
    resolver: zodResolver(studentSchema),
    // defaultValues: studentDetails,
    // defaultValues: { username: "" },
    defaultValues: {
      medicalDetails: {
        additionalInformation: "",
      },
    },
  });

  const onSubmit = async (values) => {
    console.log("My val:", values);
    if (isLastStep) {
      // console.log(methods.formState.isSubmitting);
      // async db call, redirect to print with values
      methods.reset();
    } else {
      // Only move to the next step if the form is valid
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToNext = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const isValid = await validateStep.current();
    if (isValid) {
      onSubmit(methods.getValues()); // Trigger the onSubmit with current form values
    }
  };

  const goToPrevious = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setCurrentStep((prev) => Math.max(prev - 1, 0)); // Ensure we don't go below 0
  };

  return (
    <div className="mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-center mt-4 text-3xl font-semibold text-gray-700 mb-4">
        Registration
      </h2>
      <button
        onClick={() =>
          console.log(methods.formState.errors, methods.formState.dirtyFields)
        }
      >
        hello
      </button>
      <p className="text-center text-gray-600 mb-6">
        Please fill in the details below:
      </p>

      {/* ProgressBar Component */}
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className="container max-w-sm">
        <StepContext.Provider value={{ validateStep }}>
          <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {steps[currentStep]}
              {!isFirstStep && (
                <Button type="button" onClick={goToPrevious}>
                  Back
                </Button>
              )}
              {isLastStep ? (
                <Button type="submit">Submit</Button>
              ) : (
                <Button type="button" onClick={goToNext}>
                  Next
                </Button>
              )}
              <button>abcd</button>
            </form>
          </Form>
        </StepContext.Provider>
      </div>
    </div>
  );
};

export default DemoCon;
