"use client";
import { useFormContext } from "react-hook-form";

import { useContext, useEffect } from "react";

import MyInput from "../formComponents/MyInput";
import CountryCodeInput from "../formComponents/CountryCodeInput";
import { StepContext } from "./StepContext";

export function ParentsForm() {
  const { control, trigger } = useFormContext();
  const { validateStep } = useContext(StepContext);

  const fieldsToValidate = [
    "parentDetails.fatherName",
    "parentDetails.countryCode",
    "parentDetails.mobile",
    "parentDetails.email",
    "parentDetails.addressLine1",
    "parentDetails.city",
    "parentDetails.postCode",
  ];

  useEffect(() => {
    validateStep.current = async () => {
      const result = await trigger(fieldsToValidate);
      return result;
    };
  }, [trigger]);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <MyInput
        control={control}
        name="parentDetails.fatherName"
        label="Father Name"
        placeholder="Father Name"
      />
      <MyInput
        control={control}
        name="parentDetails.motherName"
        label="Mother Name"
        placeholder="Mother Name"
      />

      <MyInput
        control={control}
        name="parentDetails.homeTel"
        label="Home Tel"
        placeholder="3232"
      />

      <CountryCodeInput
        control={control}
        name={"parentDetails.countryCode"}
        label={"Country Code"}
        placeholder={"Select Country Code"}
      />

      <MyInput
        control={control}
        name="parentDetails.mobile"
        label="Mobile"
        placeholder=""
      />

      <MyInput
        control={control}
        name="parentDetails.email"
        label="Email"
        placeholder="Email"
      />

      <MyInput
        control={control}
        name="parentDetails.addressLine1"
        label="Address Line 1"
        placeholder="Address Line 1"
      />

      <MyInput
        control={control}
        name="parentDetails.addressLine2"
        label="Address Line 2"
        placeholder="Address Line 2"
      />
      <MyInput
        control={control}
        name="parentDetails.city"
        label="City"
        placeholder="City"
      />
      <MyInput
        control={control}
        name="parentDetails.postCode"
        label="Post Code"
        placeholder="Post Code"
      />
    </div>
  );
}
