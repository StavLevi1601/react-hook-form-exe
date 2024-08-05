import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	type DialogProps,
} from "@mui/material";

interface FormDialogProps extends DialogProps {
	onClose: () => void;
	onSubmit: () => void;
	disabled: boolean;
}

export default function FormDialog({
	children,
	onClose,
	onSubmit,
	disabled,
	...rest
}: FormDialogProps) {
	const handleCancel = () => {
		onClose();
	};

	return (
		<Dialog {...rest} onClose={onClose}>
			<DialogTitle>Form Dialog</DialogTitle>
			<DialogContent>
				{children}
				<DialogActions>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={disabled}
						onClick={onSubmit}
					>
						Submit
					</Button>
					<Button onClick={handleCancel} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
