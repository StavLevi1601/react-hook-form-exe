import { Stack } from "@mui/material";
import type { UseFormReturn } from "react-hook-form";
import RHFTextField from "./RHFTextField";
import type { Schema } from "./validations";

interface FormProps {
	methods: UseFormReturn<Schema>;
}

export default function Form({ methods }: FormProps) {
	return (
		<Stack>
			<RHFTextField name="email" />
		</Stack>
	);
}
