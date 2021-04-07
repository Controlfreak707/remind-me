import React, { Component } from "react";

import { FormTitle, Modal } from "@vizality/components";
import { close as closeModal } from "@vizality/modal";

import RemindersContent from "./RemindersContent";

export default class RemindersModal extends Component {
  render() {
    return (
      <Modal size={Modal.Sizes.MEDIUM}>
        <Modal.Header>
          <FormTitle tag="h4">Reminders</FormTitle>
          <Modal.CloseButton onClick={() => closeModal()} />
        </Modal.Header>
        <Modal.Content>
          <RemindersContent></RemindersContent>
        </Modal.Content>
      </Modal>
    );
  }
}
