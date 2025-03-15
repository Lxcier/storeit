import React, { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const InputOtp = () => {
  const [password, setPassword] = useState("");

  return (
    <InputOTP maxLength={6} value={password} onChange={setPassword}>
      <InputOTPGroup>
        <InputOTPSlot index={0} className={"shad-otp-slot"} />
        <InputOTPSlot index={1} className={"shad-otp-slot"} />
        <InputOTPSlot index={2} className={"shad-otp-slot"} />
        <InputOTPSlot index={3} className={"shad-otp-slot"} />
        <InputOTPSlot index={4} className={"shad-otp-slot"} />
        <InputOTPSlot index={5} className={"shad-otp-slot"} />
      </InputOTPGroup>
    </InputOTP>
  );
};
export default InputOtp;
