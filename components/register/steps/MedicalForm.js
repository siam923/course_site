"use client";
import { useFormContext } from "react-hook-form";

import { useContext, useEffect } from "react";

import MyInput from "../formComponents/MyInput";

import { StepContext } from "./StepContext";
import MedicalInput from "../formComponents/MedicalInput";

const questions = [
  {
    question: "Is your child taking any medication",
    name1: "medicalDetails.isTakingMedication",
    name2: "medicalDetails.medicationDescription",
  },
  {
    question: "Does your child have any allergies",
    name1: "medicalDetails.hasAllergies",
    name2: "medicalDetails.allergiesDescription",
  },
  {
    question: "Does your child have any physical disabilities",
    name1: "medicalDetails.hasPhysicalDisabilities",
    name2: "medicalDetails.physicalDisabilitiesDescription",
  },
  {
    question: "Does your child wear glasses",
    name1: "medicalDetails.wearsGlasses",
    name2: "medicalDetails.glassesDescription",
  },
  {
    question: "Does your child have any special needs",
    name1: "medicalDetails.hasSpecialNeeds",
    name2: "medicalDetails.specialNeedsDescription",
  },
  {
    question: "Does your child have any restricted activities",
    name1: "medicalDetails.restrictedActivities",
    name2: "medicalDetails.restrictedActivitiesDescription",
  },
];

export function MedicalForm() {
  const { control, trigger } = useFormContext();
  const { validateStep } = useContext(StepContext);

  const fieldsToValidate = [];

  useEffect(() => {
    validateStep.current = async () => {
      const result = await trigger(fieldsToValidate);
      return result;
    };
  }, [trigger]);
  return (
    <div className="my-10 space-y-4">
      {questions.map((question, index) => (
        <MedicalInput
          key={index}
          control={control}
          name1={question.name1}
          name2={question.name2}
          question={question.question}
        />
      ))}

      <MyInput
        control={control}
        name="medicalDetails.additionalInformation"
        label="Aditional Information"
        placeholder="Add any additional info"
      />
    </div>
  );
}
