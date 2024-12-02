import React, { useState } from "react";

import PhoneNumModal from "./PhoneNumModal";
import ValidateModal from "./ValidateModal";
import SignupModal from "./SignUpModal";

function LoginModals({ type, setIsModal }) {
  const [isPhoneNumModal, setIsPhoneNuumModal] = useState(true);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const [isValidateModal, setIsValidateModal] = useState(false);
  const selectModal = () => {
    if (type === "signup") {
      return <SignupModal />;
    } else if (type === "signin") {
      return <PhoneNumModal />;
    } else return <ValidateModal />;
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div
      onClick={closeModal}
      className=" z-50 fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    >
      {isPhoneNumModal && (
        <PhoneNumModal
          closeModal={closeModal}
          setIsPhoneNuumModal={setIsPhoneNuumModal}
          setIsSignupModal={setIsSignupModal}
        />
      )}
      {isSignupModal && (
        <SignupModal
          isValidateModal={isValidateModal}
          setIsValidateModal={setIsValidateModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default LoginModals;
