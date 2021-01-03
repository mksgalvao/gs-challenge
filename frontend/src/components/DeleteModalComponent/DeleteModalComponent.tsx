import React from "react";
import { Button, Dialog } from "@material-ui/core";
import { deleteModalStyle } from "./DeleteModalComponent.style";

export const DeleteModalComponent = (props: any) => {
  const classes = deleteModalStyle();
  const [open, setOpen] = React.useState(props.showModal);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePhone = () => {
    // props.deletePhone();
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
        <div className={classes.modalWrapper}>
          <h4 className={classes.title}>
            Are you sure do you want to delete {props.phone.name}?
          </h4>
          <p>The exclusion will be permanent.</p>
          <Button className={classes.delete} onClick={handleDeletePhone}>
            Delete
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
