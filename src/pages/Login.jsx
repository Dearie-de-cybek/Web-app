import { useForm } from "react-hook-form";

import signinImg from "../assets/imgs/signup.png";

import FormPage from "../components/forms/FormPage";
import Form from "../components/forms/Form";
import FormRow from "../components/forms/FormRow";
import Input from "../components/forms/Input";
import PasswordInput from "../components/forms/PasswordInput";
import Button from "../components/buttons/Button";
import RememberMe from "../components/forms/RememberMe";
import ForgotPassword from "../components/forms/ForgotPassword";
import AccessOptions from "../components/forms/AccessOptions";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormPage type={"Login"} img={signinImg}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please specify a valid email",
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <PasswordInput
            register={register}
            id={"password"}
            placeholder="Password"
            message={"Password is required"}
          />
        </FormRow>
        <FormRow>
          <div className="flex items-center justify-between gap-2">
            <RememberMe register={register} />
            <ForgotPassword to="/forgot-password">
              Forgot Password?
            </ForgotPassword>
          </div>
        </FormRow>
        <FormRow>
          <Button size="large" variation="primary">
            Log in
          </Button>
        </FormRow>
      </Form>
      <AccessOptions type={"login"} />
    </FormPage>
  );
}

export default Login;
