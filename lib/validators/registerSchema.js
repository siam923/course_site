import * as z from "zod";

export const studentDetailsSchema = z.object({
  branch: z.string().min(1, "Please select a branch"),
  course: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  firstName: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  lastName: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  age: z
    .string() // Accept the input as a string
    .refine((value) => !isNaN(Number(value)), {
      message: "Age must be a valid number",
    }),

  gender: z.string(),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
  // photo: z.instanceof(File).optional(),
});

export const parentSchema = z.object({
  fatherName: z.string().min(3, { message: "Father's Name is required." }),
  motherName: z.string().min(3, { message: "Mother's Name is required." }),
  homeTel: z.string().optional(),
  countryCode: z.string().min(1, { message: "Country Code is required." }),
  mobile: z.string().min(1, { message: "Mobile number is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  addressLine1: z.string().min(1, { message: "Address Line 1 is required." }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: "City is required." }),
  postCode: z.string().min(1, { message: "Post Code is required." }),
});

export const emergencySchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  relationToStudent: z
    .string()
    .min(1, { message: "Relation to Student is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  homeTel: z.string().optional(),
  countryCode: z.string().min(1, { message: "Country Code is required." }),
  mobile: z.string().min(1, { message: "Mobile number is required." }),
  sameAsParent: z.boolean().default(false).optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  postCode: z.string().optional(),
});

export const medicalDetailsSchema = z.object({
  isTakingMedication: z.string().optional(),
  medicationDescription: z.string().optional(),
  hasAllergies: z.string().optional(),
  allergiesDescription: z.string().optional(),
  hasPhysicalDisabilities: z.string().optional(),
  physicalDisabilitiesDescription: z.string().optional(),
  wearsGlasses: z.string().optional(),
  glassesDescription: z.string().optional(),
  restrictedActivities: z.string().optional(),
  restrictedActivitiesDescription: z.string().optional(),
  hasSpecialNeeds: z.string().optional(),
  specialNeedsDescription: z.string().optional(),
  additionalInformation: z.string().optional(),
});

export const rulesSchema = z.object({
  consent: z.boolean().refine((value) => value === true, {
    message: "You must agree.",
  }),
  communication: z.boolean().refine((value) => value === true, {
    message: "You must accept it.",
  }),
  protection: z.boolean().refine((value) => value === true, {
    message: "You must agree with the data privacy.",
  }),
});

const formSchema = z.object({
  studentDetails: studentDetailsSchema,
  parentDetails: parentSchema,
  emergencyDetails: emergencySchema,
  medicalDetails: medicalDetailsSchema,
  rulesDetails: rulesSchema,
});

export { formSchema };
