import { Plugin } from "@vizality/entities";
import { patch, unpatchAll } from "@vizality/patcher";
import { getModuleByDisplayName } from "@vizality/webpack";
import React from "react";

import RemindersButton from "./components/RemindersButton";

export default class RemindMe extends Plugin {
  start() {
    patch(
      "remind-me-reminders-button",
      getModuleByDisplayName("HeaderBarContainer").prototype,
      "render",
      (_args, res) => {
        const toolbarButtons = res?.props.toolbar?.props.children;

        toolbarButtons?.splice(
          toolbarButtons.length - 2,
          0,
          React.createElement(RemindersButton)
        );

        return res;
      }
    );
  }

  stop() {
    unpatchAll("remind-me-reminders-button");
  }
}
