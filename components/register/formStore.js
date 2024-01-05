import { create } from "zustand";

const initialStates = {
  studentDetails: {
    branch: "",
    course: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    photo: null,
  },
  parentGuardianDetails: {
    fatherName: "",
    motherName: "",
    homeTel: "",
    countryCode: "UK", // default value
    mobile: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postCode: "",
  },
  emergencyContact: {
    firstName: "",
    lastName: "",
    relationToStudent: "",
    email: "",
    homeTel: "",
    countryCode: "",
    mobile: "",
    sameAsGuardiansAddress: false,
    addressLine1: "",
    addressLine2: "",
    city: "",
    postCode: "",
  },
  medicalDetails: {
    isTakingMedication: "",
    medicationDescription: "",
    hasAllergies: "",
    hasPhysicalDisabilities: "",
    wearsGlasses: "",
    restrictedActivities: "",
    hasSpecialNeeds: "",
    additionalInformation: "",
  },
  consent: {
    dataProtection: false,
    communication: false,
  },
};

// const useFormStore = create((set) => ({
//   ...initialStates,
//   // Update functions for each form page
//   updateStudentDetails: (newData) =>
//     set((state) => ({ studentDetails: newData })),
//   updateParentGuardianDetails: (newData) =>
//     set((state) => ({ parentGuardianDetails: newData })),
//   updateEmergencyContact: (newData) =>
//     set((state) => ({ emergencyContact: newData })),
//   updateMedicalDetails: (newData) =>
//     set((state) => ({ medicalDetails: newData })),
//   updateConsent: (newData) => set((state) => ({ consent: newData })),
//   // Function to reset all forms
//   resetForms: () => set(() => ({ ...initialStates })),
// }));

const useFormStore = create((set) => ({
  formData: {},
  updateFormData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),
}));

export default useFormStore;
