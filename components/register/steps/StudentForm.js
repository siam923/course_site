"use client";
import { useFormContext } from "react-hook-form";

import { useContext, useEffect } from "react";

import MyInput from "../formComponents/MyInput";
import MySelect from "../formComponents/MySelect";
import DateInput from "../formComponents/DateInput";
import { StepContext } from "./StepContext";

const branches = [
  "Alibon",
  "Bonham",
  "Chadwell heath",
  "Online",
  "St. Georges",
  "Upney",
];

const courses = [
  "Adult Course",
  "Children Madrasah",
  "Hifz",
  "Ijaaza Course",
  "On Demand",
  "Online Madrasah",
  "Youth programme",
  "Alimiyyah",
];

export function StudentForm(props) {
  const { control, trigger } = useFormContext();
  const { validateStep } = useContext(StepContext);

  const fieldsToValidate = ["studentDetails.branch", "studentDetails.age"];

  useEffect(() => {
    validateStep.current = async () => {
      const result = await trigger(fieldsToValidate);
      return result;
    };
  }, [trigger]);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <MySelect
        control={control}
        items={branches}
        name="studentDetails.branch"
        label="Branch"
        placeholder="Select Branch"
      />

      <MySelect
        control={control}
        items={courses}
        name="studentDetails.course"
        label="Course"
        placeholder="Enter Course"
      />

      <MyInput
        control={control}
        name="studentDetails.firstName"
        label="First Name"
        placeholder="First Name"
      />

      <MyInput
        control={control}
        name="studentDetails.lastName"
        label="Last Name"
        placeholder="Last Name"
      />

      <MyInput
        control={control}
        name="studentDetails.age"
        label="Age"
        placeholder="Age"
      />

      <MySelect
        control={control}
        name="studentDetails.gender"
        label="Gender"
        items={["Male", "Female"]}
        placeholder="Select Gender"
      />

      <div className="md:col-span-2">
        <DateInput
          control={control}
          name="studentDetails.dateOfBirth"
          label="Date of Birth"
        />
      </div>

      {/* 
      <FormField
        control={control}
        name="studentDetails.photo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Photo</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </div>
  );
}
