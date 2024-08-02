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
					fullWidth
					label={name}
					error={!!fieldState.error}
					helperText={fieldState.error ? fieldState.error.message : ""}
					value={field.value}
					onChange={(event) => {
						field.onChange(event);
					}}
				/>
			)}
		/>
	);
}
