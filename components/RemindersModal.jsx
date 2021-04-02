import React, { Component } from "react";

import {
  FormTitle,
  Modal,
  FormItem,
  TextInput,
  Button,
  Flex,
} from "@vizality/components";
import { close as closeModal } from "@vizality/modal";
import { log } from "@vizality/util/Logger";

import ReminderRow from "./ReminderRow";

export default class RemindersModal extends Component {
  render() {
    return (
      <Modal size={Modal.Sizes.MEDIUM}>
        <Modal.Header>
          <FormTitle tag="h4">Reminders</FormTitle>
          <Modal.CloseButton onClick={() => closeModal()} />
        </Modal.Header>
        <Modal.Content>
          <FormItem>
            <Flex>
              <Flex.Child>
                <TextInput
                  id="reminders-modal-input-text"
                  autoFocus={true}
                  placeholder="Remember to..."
                ></TextInput>
              </Flex.Child>
              <Flex.Child>
                <TextInput
                  id="reminders-modal-input-time"
                  placeholder="12:00"
                ></TextInput>
              </Flex.Child>
              <Flex.Child>
                <Button
                  onClick={() => {
                    // this.props.setSetting(
                    //   "reminders",
                    //   this.props.getSetting("reminders", []).push({
                    //     text: document.getElementById(
                    //       "reminders-modal-input-text"
                    //     ).value,
                    //     time: document.getElementById(
                    //       "reminders-modal-input-time"
                    //     ).value,
                    //   })
                    // );

                    // log({ message: this.props.getSetting("reminders", []) });

                    log({ message: "Boop!" });
                  }}
                >
                  Add Reminder
                </Button>
              </Flex.Child>
            </Flex>
          </FormItem>
          <FormTitle style={{ marginTop: "16px" }}>Reminders</FormTitle>
          <ReminderRow
            text="Remember to finish Remind Me"
            time="14:00"
          ></ReminderRow>
          <ReminderRow
            text="Remember to check your email"
            time="19:00"
          ></ReminderRow>
          <ReminderRow
            text="Remember to do this and that and those oh and these and aaaaaall of those definitely those and one more thing it's this"
            time="12:00"
          ></ReminderRow>
        </Modal.Content>
      </Modal>
    );
  }
}
