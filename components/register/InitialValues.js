export const studentDetails = {
  branch: "",
  course: "",
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  dateOfBirth: "",
  // photo: null,
};

export const emergencyDetails = {
  firstName: "",
  lastName: "",
  relationToStudent: "",
  email: "",
  homeTel: "",
  countryCode: "",
  mobile: "",
  sameAsParent: false,
  addressLine1: "",
  addressLine2: "",
  city: "",
  postCode: "",
};

export const parentDetails = {
  fatherName: "",
  motherName: "",
  homeTel: "",
  countryCode: "",
  mobile: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postCode: "",
};

export const medicalDetails = {
  isTakingMedication: "No",
  medicationDescription: "",

  hasAllergies: "No",
  allergiesDescription: "",

  hasPhysicalDisabilities: "No",
  physicalDisabilitiesDescription: "",

  wearsGlasses: "No",
  glassesDescription: "",

  restrictedActivities: "No",
  restrictedActivitiesDescription: "",

  hasSpecialNeeds: "No",
  specialNeedsDescription: "",

  additionalInformation: "",
};

export const rulesDetails = {
  consent: false,
  communication: false,
  protection: false,
};

export const initialValues = {
  studentDetails: studentDetails,
  parentDetails: parentDetails,
  emergencyDetails: emergencyDetails,
  medicalDetails: medicalDetails,
  rulesDetails: rulesDetails,
};

export const rules = [
  "The Madrasah runs on Saturday and Sunday from 10.00am to 1.00pm.",
  "Students arriving more than 10 minutes late without a valid reason and/or letter from a parent will be given a detention.",
  "The Madrasah is unable to supervise children who arrive before class starts and after class ends, therefore parents are requested to ensure their children are dropped off and picked up on time.",
  "No child will be allowed to leave the Madrasah during running times unless there is a valid reason, which should be explained in a letter and given to the Head Teacher before class starts.",
  "The Madrasah has a detention policy. If a child is given detention, then a letter will be sent home with the child to notify his/her parent/guardian.",
  "If your child does not complete his/her homework or does not observe the discipline policy, then they may be given a detention.",
  "Parents are expected to be available for parent’s evenings and any other meetings that the Head Teacher may request regarding their child.",
  "All students must show utmost respect for all teachers, staff, fellow students and the building. Respect is an essential part of our religion.",
  "Parents are not allowed inside classrooms during class times. Any queries should be addressed via email to tawihidacademy.info@gmail.com or at the reception during opening hours.",
  "All students are encouraged to dress according to the Islamic dress code.",
  "All fees are payable regardless of whether the student is in attendance of the class or not",
  "If you withdraw your child at any point, no tuition fees for that running month will be refunded.",
  "Non-payment of fees or fines will result in your child being excluded from the Madrasah.",
  "The information provided by you is kept completely confidential.",
  "Tawhid Academy has the right to refuse and/or withdraw applications at our own discretion.",
  "All the above rules and regulations must be observed. Tawhid Academy reserves the right to alter or amend any regulation when we deem necessary.",
  "The declaration must be read carefully and signed or your application cannot be processed.",
];
