import { useForm } from "react-hook-form";
import applicationImg from "../../assets/imgs/application.png";

import Form from "./Form";
import FormPage from "./FormPage";
import FormRow from "./FormRow";
import Input from "./Input";
import PhoneNumberInput from "./PhoneNumberInput";
import TextArea from "./TextArea";
import Button from "../buttons/Button";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormPage type={"Application Form"} img={applicationImg}>
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
        <FormRow error={errors?.currentPosition?.message}>
          <Input
            type="text"
            id="currentPosition"
            placeholder="Current Position"
            {...register("currentPosition", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow error={errors?.portfolio?.message}>
          <Input
            type="text"
            id="portfolio"
            placeholder="Link to port folio (optional)"
            {...register("portfolio")}
          />
        </FormRow>
        <FormRow>
          <TextArea
            id="description"
            placeholder="Why are you applying to Voux Business School"
            {...register("description", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow>
          <Button size="large" variation="primary">
            Submit
          </Button>
        </FormRow>
      </Form>
    </FormPage>
  );
}

export default ApplicationForm;
