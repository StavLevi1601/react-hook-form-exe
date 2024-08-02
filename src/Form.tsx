import { Stack } from "@mui/material";
import RHFTextField from "./RHFTextField";

interface FormProps {
  handleSetError: (error: boolean) => void;
}

export default function Form({ handleSetError }: FormProps) {
  return (
    <Stack>
      <RHFTextField name="email" setError={handleSetError} />
    </Stack>
  );
}
