import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";
import FormDialog from "./FormDialog";
import { schema, type Schema } from "./validations";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    handleClose();
  });

  const disabled = Object.keys(errors).length > 0;

  return (
    <>
      <Button onClick={handleClickOpen}>Open Dialog</Button>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <FormDialog
            open={open}
            onClose={handleClose}
            onSubmit={onSubmit}
            disabled={disabled}
          >
            <Form />
          </FormDialog>
        </form>
      </FormProvider>
    </>
  );
}
