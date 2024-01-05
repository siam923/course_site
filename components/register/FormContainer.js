"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Rules } from "./steps/Rules";
import { ParentsForm } from "./steps/ParentsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { initialValues } from "./InitialValues";
import { Form } from "@/components/ui/form";
import { StudentForm } from "./steps/StudentForm";
import { formSchema } from "@/lib/validators/registerSchema";
import ProgressBar from "./ProgressBar";
import { StepContext } from "./steps/StepContext";
import { EmergencyForm } from "./steps/EmergencyForm";
import { MedicalForm } from "./steps/MedicalForm";
import { useToast } from "../ui/use-toast";
import ErrorDisplay from "./ErrorDisplay";
import { useRouter } from "next/navigation";

const steps = [
  <StudentForm />,
  <ParentsForm />,
  <EmergencyForm />,
  <MedicalForm />,
  <Rules />,
];

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const validateStep = useRef(async () => true);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  const router = useRouter();

  useEffect(() => {
    const hasErrors = Object.keys(methods.formState.errors).length > 0;
    setIsError(hasErrors);
  }, [methods.formState.errors]);

  const onSubmit = async (values) => {
    console.log("My val:", currentStep, isLastStep);

    if (isLastStep) {
      if (Object.keys(methods.formState.errors).length > 0) {
        // Show the toast message and don't proceed if there are errors
        setIsError(true);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Oops! Something went wrong!",
        });
        console.log("Form has errors:", methods.formState.errors);

        return;
      }
      // No errors, proceed with form submission
      setIsError(false);
      // ... handle form submission, async db call, etc.
      toast({
        title: "Success",
        description: "Form Submited!",
      });
      localStorage.setItem("regForm", JSON.stringify(values));
      router.push("/test");

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
    <div className="mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-center mt-4 text-3xl font-semibold text-gray-700 mb-4">
        Registration
      </h2>
      <button onClick={() => console.log(methods.formState.errors)}>
        hello
      </button>
      <button onClick={() => console.log(methods.getValues())}>ffelo</button>
      <p className="text-center text-gray-600 mb-6">
        Please fill in the details below:
      </p>

      {/* ProgressBar Component */}
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className="container max-w-xl ">
        <StepContext.Provider value={{ validateStep }}>
          <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {steps[currentStep]}

              {isError && (
                <div className="text-red-600 text-center my-4">
                  <ErrorDisplay errors={methods.formState.errors} />
                </div>
              )}

              <div className="flex flex-row mx-auto my-4 space-x-4">
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
              </div>
            </form>
          </Form>
        </StepContext.Provider>
      </div>
    </div>
  );
};

export default FormContainer;
