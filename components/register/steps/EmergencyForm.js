"use client";
import { useFormContext } from "react-hook-form";

import { useContext, useEffect } from "react";

import MyInput from "../formComponents/MyInput";
import CountryCodeInput from "../formComponents/CountryCodeInput";
import { StepContext } from "./StepContext";
import MyCheckBox from "../formComponents/MyCheckBox";
import { Input } from "@/components/ui/input";

export function EmergencyForm(props) {
  const { control, trigger, watch, setValue } = useFormContext();
  const { validateStep } = useContext(StepContext);
  const isSameAsParent = watch("emergencyDetails.sameAsParent");

  const fieldsToValidate = ["emergencyDetails.email"];

  // useEffect(() => {
  //   if (isSameAsParent) {
  //     // Fetch parent's address details
  //     const parentAddress1 = watch("guardianDetails.addressLine1");
  //     const parentAddress2 = watch("guardianDetails.addressLine2");
  //     const city = watch("guardianDetails.city");
  //     const postCode = watch("guardianDetails.postCode");

  //     // Set emergency details to parent's address details
  //     setValue("emergencyDetails.addressLine1", parentAddress1);
  //     setValue("emergencyDetails.addressLine2", parentAddress2);
  //     setValue("emergencyDetails.city", city);
  //     setValue("emergencyDetails.postCode", postCode);
  //   }
  //   // Reset the fields if the checkbox is unchecked
  // }, [isSameAsParent, setValue, watch]);

  useEffect(() => {
    validateStep.current = async () => {
      const result = await trigger(fieldsToValidate);
      return result;
    };
  }, [trigger]);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <MyInput
        control={control}
        name="emergencyDetails.firstName"
        label="First Name"
        placeholder="First Name"
      />
      <MyInput
        control={control}
        name="emergencyDetails.lastName"
        label="Last Name"
        placeholder="Last Name"
      />

      <MyInput
        control={control}
        name="emergencyDetails.relationToStudent"
        label="Relation To Student"
        placeholder="Relation To Student"
      />

      <MyInput
        control={control}
        name="emergencyDetails.email"
        label="Email"
        placeholder="Email"
      />

      <MyInput
        control={control}
        name="emergencyDetails.homeTel"
        label="Home Tel"
        placeholder="3232"
      />

      <CountryCodeInput
        control={control}
        name={"emergencyDetails.countryCode"}
        label={"Country Code"}
        placeholder={"Select Country Code"}
      />

      <MyInput
        control={control}
        name="emergencyDetails.mobile"
        label="Mobile"
        placeholder=""
      />

      <div className="md:col-span-2">
        <h2 className="col-span-2 text-center text-xl font-bold">Address</h2>
        <MyCheckBox
          control={control}
          name="emergencyDetails.sameAsParent"
          label="Same as Guardian's Address"
        />
      </div>

      {!isSameAsParent && (
        <div>
          <MyInput
            control={control}
            name="emergencyDetails.addressLine1"
            label="Address Line 1"
            placeholder="Address Line 1"
          />

          <MyInput
            control={control}
            name="emergencyDetails.addressLine2"
            label="Address Line 2"
            placeholder="Address Line 2"
          />
          <MyInput
            control={control}
            name="emergencyDetails.city"
            label="City"
            placeholder="City"
          />
          <MyInput
            control={control}
            name="emergencyDetails.postCode"
            label="Post Code"
            placeholder="Post Code"
          />
        </div>
      )}
    </div>
  );
}
