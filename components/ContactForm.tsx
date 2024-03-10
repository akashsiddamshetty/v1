"use client";

import { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";

interface ErrorTextProps {
  children: ReactNode;
}

const ErrorText: FC<ErrorTextProps> = ({ children }) => {
  return (
    <p className="text-custom-chilli-red capitalize font-semibold font-mono ">
      {children}
    </p>
  );
};

interface ContactFormProps {}

interface formValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-1  flex-col gap-4 items-end justify-end"
    >
      <input
        className="w-80 py-2 px-4 h-10 placeholder:text-custom-black font-semibold text-xl border-b-2 border-custom-black bg-transparent "
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name?.type === "required" && (
        <ErrorText>Name is required</ErrorText>
      )}
      <input
        className="w-80 py-2 px-4 h-10  placeholder:text-custom-black font-semibold text-xl border-b-2 border-custom-black bg-transparent"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      {errors.email?.type === "required" && (
        <ErrorText>Email is required</ErrorText>
      )}
      {errors.email?.type === "pattern" && (
        <ErrorText>Enter a valid email</ErrorText>
      )}
      <textarea
        className="w-80 out py-2 px-4 placeholder:text-custom-black font-semibold text-xl border-b-2 border-custom-black bg-transparent"
        placeholder="Message"
        id="message"
        cols={30}
        rows={10}
        {...register("message", { required: true })}
      ></textarea>
      {errors.message?.type === "required" && (
        <ErrorText>Message is required</ErrorText>
      )}
      <button
        type="submit"
        className="uppercase border-b-2 border-custom-black hover:border-custom-dark-red hover:text-custom-dark-red"
      >
        Send message
      </button>
    </form>
  );
};
export default ContactForm;
