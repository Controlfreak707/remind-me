import React, { Component } from "react";

import { Icon } from "@vizality/components";
import { open as openModal } from "@vizality/modal";

import RemindersModal from "./RemindersModal";

export default class RemindersButton extends Component {
  render() {
    return (
      <Icon
        name="Clipboard"
        className="iconWrapper-2OrFZ1 clickable-3rdHwn"
        iconClassName="icon-22AiRD"
        onClick={() => {
          openModal(RemindersModal);
        }}
        tooltip="Reminders"
        tooltipPosition="bottom"
      ></Icon>
    );
  }
}
