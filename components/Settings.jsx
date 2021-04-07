import React, { Component } from "react";

import { SwitchItem } from "@vizality/components/settings";

import RemindersContent from "./RemindersContent";

export default class Settings extends Component {
  render() {
    return (
      <div>
        <SwitchItem
          value={this.props.getSetting("remindersInToolbar", false)}
          onChange={() => {
            this.props.toggleSetting("remindersInToolbar");
          }}
        >
          Move Reminders to Toolbar
        </SwitchItem>

        {!this.props.getSetting("remindersInToolbar", false) && (
          <RemindersContent></RemindersContent>
        )}
      </div>
    );
  }
}
