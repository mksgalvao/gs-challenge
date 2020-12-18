import React from "react";
import Modal from "@material-ui/core/Modal";
import { editPhoneModalStyle } from "./EditPhoneModalStyle";
import { Input } from "@material-ui/core";

export default function EditPhoneModal(props: any) {
  const classes = editPhoneModalStyle();
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        open={props.showModal}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <h2 id="server-modal-title">Edit Phone</h2>
          <Input type="text" placeholder={props.phone.name}></Input>
          <Input type="text" placeholder={props.phone.price}></Input>
        </div>
      </Modal>
    </div>
  );
}
