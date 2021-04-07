import React, { Component } from "react";

import { Modal, Text, FormItem, TextInput, Button } from "@vizality/components";
import { close as closeModal } from "@vizality/modal";
import { getModule } from "@vizality/webpack";

const classes = getModule(
  (m) =>
    m.header &&
    m.title &&
    m.subtitle &&
    m.modalCloseButton &&
    m.content &&
    m.password
);

export default class NewReminderModal extends Component {
  render() {
    return (
      <Modal>
        <Modal.Header className={classes.header}>
          <Text
            className={classes.title}
            color={Text.Colors.HEADER_PRIMARY}
            size={Text.Sizes.SIZE_24}
          >
            Create a new reminder
          </Text>
          <Text
            className={classes.subtitle}
            color={Text.Colors.HEADER_SECONDARY}
            size={Text.Sizes.SIZE_16}
          >
            Enter the message you want to display and schedule a time to remind
            you.
          </Text>
          <Modal.CloseButton
            className={classes.modalCloseButton}
            onClick={() => closeModal()}
          />
        </Modal.Header>
        <Modal.Content className={classes.content}>
          <FormItem title="Message">
            <TextInput
              id="reminders-modal-input-text"
              autoFocus={true}
              placeholder="Remember to..."
            ></TextInput>
          </FormItem>
          <FormItem className={classes.password} title="Time">
            <TextInput
              id="reminders-modal-input-time"
              placeholder="12:00"
            ></TextInput>
          </FormItem>
        </Modal.Content>
        <Modal.Footer>
          <Button
            color={Button.Colors.BRAND}
            size={Button.Sizes.MEDIUM}
            onClick={() => closeModal()}
          >
            Done
          </Button>
          <Button
            color={Button.Colors.PRIMARY}
            look={Button.Looks.LINK}
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
