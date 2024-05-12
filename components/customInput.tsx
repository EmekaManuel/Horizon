import React from "react";
import { FormControl, FormField, FormMessage, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  id: string;
  label: string;
  placeholder: string;
}

const CustomInput = (props: CustomInput) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{props.label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={props.id}
                placeholder={props.placeholder}
                className="input-class"
                type={props.name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
export default CustomInput;
