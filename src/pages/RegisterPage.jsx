import React from "react";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { scheme } from "../Schemas/registerSchema";
// todo:============== Start of the RegisterPage component ==============
export default function RegisterPage() {
  // *--------------Start of the useForm hook ------------------
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(scheme),
  });
  // ?-------- Date formatting function ------------------
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.getMonth() + 1; 
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month}-${day}-${year}`;
  };

  // ?-------- handleRegister function ------------------
  const handleRegister = (formData) => {
    // Format the date before submitting
    const formattedData = {
      ...formData,
      dateOfBirth: formatDate(formData.dateOfBirth)
    };
    console.log("Formatted form data:", formattedData);
  };
  return (
    <div className="max-w-xl py-10 mx-auto my-10 shadow-lg px-6 rounded-lg">
      <form onSubmit={handleSubmit(handleRegister)} action="">
        <div className="flex flex-col gap-6">
          <Input
            isRequired
            type="text"
            label="Name"
            variant="bordered"
            {...register("name")}
            isInvalid={Boolean(errors?.name?.message)}
            errorMessage={errors.name?.message}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            variant="bordered"
            {...register("email")}
            isInvalid={Boolean(errors?.email?.message)}
            errorMessage={errors.email?.message}
          />
          <Input
            isRequired
            type="password"
            label="Password"
            variant="bordered"
            {...register("password")}
            isInvalid={Boolean(errors?.password?.message)}
            errorMessage={errors.password?.message}
          />
          <Input
            isRequired
            type="password"
            label="Confirm Password"
            variant="bordered"
            {...register("rePassword")}
            isInvalid={Boolean(errors?.rePassword?.message)}
            errorMessage={errors.rePassword?.message}
          />
          <Input
            type="date"
            label="Date of Birth"
            variant="bordered"
            {...register("dateOfBirth")}
            isInvalid={Boolean(errors?.dateOfBirth?.message)}
            errorMessage={errors.dateOfBirth?.message}
          />
          <Select
            isRequired
            label="Gender"
            variant="bordered"
            placeholder="Select a gender"
            {...register("gender")}
            isInvalid={Boolean(errors?.gender?.message)}
            errorMessage={errors.gender?.message}
          >
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>
          <Button type="submit" color="primary" variant="flat">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
