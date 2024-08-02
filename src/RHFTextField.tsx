import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface RHFTextFieldProps {
  name: string;
  setError: (error: boolean) => void;
}

export default function RHFTextField({ name, setError }: RHFTextFieldProps) {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={name}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          fullWidth
          margin="normal"
          onChange={async (event) => {
            field.onChange(event);
            await trigger(name);
            setError(!!fieldState.error);
          }}
        />
      )}
    />
  );
}
