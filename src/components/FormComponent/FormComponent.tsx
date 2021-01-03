import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Button, Dialog } from "@material-ui/core";
import { formComponentStyle } from "./FormComponent.style";

interface Values {
  phoneName: string;
  price: string;
  description: string;
}

export const FormComponent = (props: any) => {
  const classes = formComponentStyle();
  const [open, setOpen] = React.useState(props.showModal.isOpen);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
        maxWidth="lg"
        onClose={handleClose}
      >
        <h1 className={classes.title}>
          {props.showModal.type.toUpperCase()} Phone
        </h1>
        <Formik
          initialValues={
            props.showModal.type === "add"
              ? {
                  phoneName: "",
                  price: "",
                  description: "",
                  manufacturer: "",
                  color: "",
                  imageFileName: "",
                  screen: "",
                  processor: "",
                  ram: "",
                }
              : {
                  phoneName: props.phone.name,
                  price: props.phone.price,
                  description: props.phone.description,
                  manufacturer: props.phone.manufacturer,
                  color: props.phone.color,
                  imageFileName: props.phone.imageFileName,
                  screen: props.phone.screen,
                  processor: props.phone.processor,
                  ram: props.phone.ram,
                }
          }
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setOpen(false);
            }, 500);
          }}
        >
          <Form className={classes.formRoot}>
            <label htmlFor="phoneName">Name</label>
            <Field
              id="phoneName"
              name="phoneName"
              placeholder={
                props.showModal.type === "edit" ? props.phone.name : "name"
              }
            />
            <label htmlFor="price">Price</label>
            <Field
              id="price"
              name="price"
              placeholder={
                props.showModal.type === "edit" ? props.phone.price : "price"
              }
            />
            <label htmlFor="color">Color</label>
            <Field
              id="color"
              name="color"
              placeholder={
                props.showModal.type === "edit" ? props.phone.color : "color"
              }
            />
            <label htmlFor="manufacturer">Manufacturer</label>
            <Field
              id="manufacturer"
              name="manufacturer"
              placeholder={
                props.showModal.type === "edit"
                  ? props.phone.manufacturer
                  : "manufacturer"
              }
            />
            <label htmlFor="screen">Screen</label>
            <Field
              id="screen"
              name="screen"
              placeholder={
                props.showModal.type === "edit" ? props.phone.screen : "screen"
              }
            />
            <label htmlFor="processor">Processor</label>
            <Field
              id="processor"
              name="processor"
              placeholder={
                props.showModal.type === "edit"
                  ? props.phone.processor
                  : "processor"
              }
            />
            <label htmlFor="ram">Ram</label>
            <Field
              id="ram"
              name="ram"
              placeholder={
                props.showModal.type === "edit" ? props.phone.ram : "ram"
              }
            />
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder={
                props.showModal.type === "edit"
                  ? props.phone.description
                  : "description"
              }
              type="textarea"
            />
            <label htmlFor="imageFileName">Image URL</label>
            <Field
              id="imageFileName"
              name="imageFileName"
              placeholder={
                props.showModal.type === "edit"
                  ? props.phone.imageFileName
                  : "URL"
              }
            />
            <Button className={classes.submit} type="submit">
              Save
            </Button>
          </Form>
        </Formik>
      </Dialog>
    </div>
  );
};
