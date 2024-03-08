import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import Input from "./Input";

function PasswordInput({
  register,
  id,
  placeholder,
  message,
  validatePassword = () => {},
}) {
  const [isVisible, setIsVisible] = useState(false);

  function handleReveal() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="relative">
      <Input
        type={isVisible ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: message || "This field is required",
          validate: validatePassword,
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />
      {isVisible ? (
        <HiEyeSlash
          onClick={handleReveal}
          className="absolute top-1/3 right-5 cursor-pointer"
        />
      ) : (
        <HiEye
          onClick={handleReveal}
          className="absolute top-1/3 right-5 cursor-pointer"
        />
      )}
    </div>
  );
}

export default PasswordInput;
