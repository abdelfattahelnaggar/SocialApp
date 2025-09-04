import { Button, Input, Select, SelectItem } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

  const { handleSubmit, register } = useForm();
  const handleRegister = (formData) => {
    console.log(formData);
  };
  return (
    <div className="max-w-xl py-10 mx-auto my-10">
      <form onSubmit={handleSubmit(handleRegister)} action="">
        <div className="flex flex-col gap-6">
          <Input
            isRequired
            type="text"
            label="Name"
            variant="bordered"
            {...register("name")}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            variant="bordered"
            {...register("email")}
          />
          <Input
            isRequired
            type="password"
            label="Password"
            variant="bordered"
            {...register("password")}
          />
          <Input
            isRequired
            type="password"
            label="Confirm Password"
            variant="bordered"
            {...register("rePassword")}
          />
          <Input
            type="date"
            label="Date of Birth"
            variant="bordered"
            {...register("dateOfBirth")}
          />
          <Select
            isRequired
            label="Gender"
            variant="bordered"
            placeholder="Select a gender"
            {...register("gender")}
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
