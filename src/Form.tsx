import RHFTextField from "./RHFTextField";
import { Stack } from "@mui/material";

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
