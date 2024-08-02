import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogProps,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";

interface FormDialogProps extends DialogProps {
  onClose: () => void;
  methods: UseFormReturn;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  error: boolean;
}

export default function FormDialog({
  children,
  onClose,
  methods,
  onSubmit,
  error,
  ...rest
}: FormDialogProps) {
  const [diables, setDisables] = useState(false);

  const handleCancel = () => {
    methods.reset();
    onClose();
    setDisables(false);
  };

  const handleDisable = (isSubmitting: boolean, error: boolean) => {
    return isSubmitting || error || diables;
  };

  return (
    <Dialog {...rest} onClose={onClose}>
      <DialogTitle>Form Dialog</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          {children}
          <DialogActions>
            <Button
              type="submit"
              disabled={handleDisable(methods.formState.isSubmitting, error)}
            >
              Submit
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
