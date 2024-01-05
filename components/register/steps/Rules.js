"use client";
import { useFormContext } from "react-hook-form";

import { useContext, useEffect } from "react";

import MyInput from "../formComponents/MyInput";
import MySelect from "../formComponents/MySelect";
import DateInput from "../formComponents/DateInput";
import { StepContext } from "./StepContext";
import { rules } from "../InitialValues";
import MyCheckBox from "../formComponents/MyCheckBox";

export function Rules(props) {
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
    <div className="my-10 ">
      <div className="form-card">
        <div className="terms-step-div flex flex-col space-y-4">
          <h4 className="font-bold text-2xl">MADRASAH RULES AND REGULATIONS</h4>
          <p>
            The following rules and regulations have been drawn up to ensure
            your child receives the best form of Islamic education from the
            Madrasah and develops the true spirit of Islam. All students and
            their parents must abide by these rules and regulations:
          </p>
          <ol className="list-decimal">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
          {/* Additional content */}
          <h4 className="font-bold text-2xl">DIGITAL PHOTOGRAPHY CONSENT</h4>
          <p>
            At Tawhid Academy we intend to use digital photography to illustrate
            our Madrasah website (www.tawhidacademy.og.uk), Madrasah
            publications and public materials that illustrate the work of the
            Madrasah. We ask that parents’ consent to their child appearing in
            this photography. All digital photography at Tawhid Academy is
            underpinned by our acceptable use policy.
          </p>
          <MyCheckBox
            control={control}
            name="rulesDetails.consent"
            label="I consent"
          />
          <p>
            To photographs and digital images of the child named above,
            appearing in Tawhid Academy printed publications or on the Madrasah
            website. I understand that the images will be used only for
            educational purposes and that the identity of my child will be
            protected. I acknowledge that the images may also be used in and
            distributed by other media such as CD-ROM, as part of the
            promotional activities of the madrasah.
          </p>

          <h4 className="font-bold text-xl">
            DECLARATION (PARENT’S/GUARDIANS)
          </h4>
          <p className="mb-1">
            I confirm that I have read, understood and answered all the
            questions on this form fully and to the best of my knowledge.
          </p>

          <p>
            <strong>Data Protection:</strong>
          </p>
          <div>
            <MyCheckBox
              control={control}
              name="rulesDetails.protection"
              label="You consent to Tawhid Academy to hold your information. We will NOT pass it onto any third party."
            />
          </div>
          <p>
            <strong>Communication:</strong>
          </p>
          <div>
            <MyCheckBox
              control={control}
              name="rulesDetails.communication"
              label="You consent to Tawhid Academy contacting you via email and SMS."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
