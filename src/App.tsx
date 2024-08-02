import React from "react";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./Form";
import FormDialog from "./FormDialog";

const schema = z.object({
  email: z.string().email("The email is invalid").min(1, "Email is required"),
});

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  const handleSetErrorState = (isError: boolean) => {
    setError(isError);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Open Dialog</Button>
      <FormProvider {...methods}>
        <FormDialog
          open={open}
          onClose={handleClose}
          methods={methods}
          onSubmit={methods.handleSubmit(onSubmit)}
          error={error}
        >
          <Form handleSetError={handleSetErrorState} />
        </FormDialog>
      </FormProvider>
    </>
  );
}
