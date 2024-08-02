import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface RHFTextFieldProps {
  name: string;
}

export default function RHFTextField({ name }: RHFTextFieldProps) {
  const { control } = useFormContext();

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
          }}
        />
      )}
    />
  );
}
