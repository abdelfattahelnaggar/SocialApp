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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white/80 backdrop-blur-sm py-8 px-8 shadow-2xl rounded-2xl border border-white/50">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Join Us Today
          </h1>
          <p className="text-gray-600 mt-2">Create your account to get started</p>
        </div>
        
        <form onSubmit={handleSubmit(handleRegister)} action="">
          <div className="flex flex-col gap-5">
          <Input
            isRequired
            type="text"
            label="Full Name"
            variant="faded"
            radius="lg"
            classNames={{
              input: "text-sm",
              inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("name")}
            isInvalid={Boolean(errors?.name?.message)}
            errorMessage={errors.name?.message}
          />
          
          <Input
            isRequired
            type="email"
            label="Email Address"
            variant="faded"
            radius="lg"
            classNames={{
              input: "text-sm",
              inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("email")}
            isInvalid={Boolean(errors?.email?.message)}
            errorMessage={errors.email?.message}
          />
          
          <Input
            isRequired
            type="password"
            label="Password"
            variant="faded"
            radius="lg"
            classNames={{
              input: "text-sm",
              inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("password")}
            isInvalid={Boolean(errors?.password?.message)}
            errorMessage={errors.password?.message}
          />
          
          <Input
            isRequired
            type="password"
            label="Confirm Password"
            variant="faded"
            radius="lg"
            classNames={{
              input: "text-sm",
              inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("rePassword")}
            isInvalid={Boolean(errors?.rePassword?.message)}
            errorMessage={errors.rePassword?.message}
          />
          
          <Input
            type="date"
            label="Date of Birth"
            variant="faded"
            radius="lg"
            classNames={{
              input: "text-sm",
              inputWrapper: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("dateOfBirth")}
            isInvalid={Boolean(errors?.dateOfBirth?.message)}
            errorMessage={errors.dateOfBirth?.message}
          />
          
          <Select
            isRequired
            label="Gender"
            variant="faded"
            radius="lg"
            placeholder="Choose your gender"
            classNames={{
              trigger: "shadow-sm hover:shadow-md transition-shadow"
            }}
            {...register("gender")}
            isInvalid={Boolean(errors?.gender?.message)}
            errorMessage={errors.gender?.message}
          >
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>
          
          <Button 
            type="submit" 
            color="primary" 
            variant="shadow"
            size="lg"
            radius="lg"
            className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Create Account
          </Button>
        </div>
      </form>
      
      {/* Footer */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
            Sign in here
          </span>
        </p>
      </div>
    </div>
    </div>
  );
}
