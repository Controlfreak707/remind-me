import React, { Component } from "react";

import { FormTitle, Button } from "@vizality/components";
import { open as openModal } from "@vizality/modal";

import ReminderRow from "./ReminderRow";
import NewReminderModal from "./NewReminderModal";

export default class RemindersContent extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            openModal(NewReminderModal);
          }}
        >
          Create Reminder
        </Button>
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
      </div>
    );
  }
}
