import { Plugin } from "@vizality/entities";
import { patch, unpatchAll } from "@vizality/patcher";
import { getModuleByDisplayName } from "@vizality/webpack";
import React from "react";

import Settings from "./components/Settings";
import RemindersButton from "./components/RemindersButton";

export default class RemindMe extends Plugin {
  start() {
    this.injectStyles("./styles/main.scss");

    this.registerSettings((props) => (
      <Settings addonId={this.addonId} {...props} />
    ));

    patch(
      "remind-me-reminders-button",
      getModuleByDisplayName("HeaderBarContainer").prototype,
      "render",
      (_args, res) => {
        if (this.settings.get("remindersInToolbar", false)) {
          const toolbarButtons = res?.props.toolbar?.props.children;

          toolbarButtons?.splice(
            toolbarButtons.length - 2,
            0,
            React.createElement(RemindersButton)
          );
        }

        return res;
      }
    );
  }

  stop() {
    unpatchAll("remind-me-reminders-button");
  }
}
