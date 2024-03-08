import { useForm } from "react-hook-form";

import signupImg from "../assets/imgs/signup.png";
import googleIcon from "../assets/svgs/googleIcon.svg";

import FormPage from "../components/forms/FormPage";
import Form from "../components/forms/Form";
import FormRow from "../components/forms/FormRow";
import Input from "../components/forms/Input";
import PhoneNumberInput from "../components/forms/PhoneNumberInput";
import Button from "../components/buttons/Button";
import Line from "../components/Line";
import PasswordInput from "../components/forms/PasswordInput";
import AccessOptions from "../components/forms/AccessOptions";

function SignUp() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormPage type={"Sign Up"} img={signupImg}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.firstName?.message}>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow error={errors?.lastName?.message}>
          <Input
            type="text"
            id="lastName"
            placeholder="last Name"
            {...register("lastName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                // google: email regex JavaScript
                value: /\S+@\S+\.\S+/,
                message: "Please specify a valid email",
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.phoneNumber?.message}>
          <PhoneNumberInput register={register} />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <PasswordInput
            register={register}
            id={"password"}
            placeholder="Password"
          />
        </FormRow>
        <FormRow error={errors?.passwordConfirm?.message}>
          <PasswordInput
            register={register}
            id={"passwordConfirm"}
            placeholder="Confirm password"
            validatePassword={(value) =>
              value === getValues().password || "Password don't match"
            }
          />
        </FormRow>
        <FormRow>
          <Button size="large" variation="primary">
            Sign Up
          </Button>
        </FormRow>
        <FormRow>
          <div className="flex gap-1 items-center">
            <Line />
            <span>or</span>
            <Line />
          </div>
        </FormRow>
        <FormRow>
          <Button size="large" variation="neutral">
            <img src={googleIcon} alt="google icon" className="mx-4" />
            <span>Sign in with Google</span>
          </Button>
        </FormRow>
      </Form>
      <AccessOptions type={"signup"} />
    </FormPage>
  );
}

export default SignUp;
