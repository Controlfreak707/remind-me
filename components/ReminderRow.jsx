import React, { Component } from "react";

import { Clickable, Text, Icon, Tooltip } from "@vizality/components";

export default class ReminderRow extends Component {
  render() {
    return (
      <Clickable className="roleRow-30TwGe vz-remind-me-reminders-row">
        <div className="roleNameContainer-2o4-eI roleNameSpacing-XtjbtV">
          <Icon
            className={`shield-1-PEa- ${Text.Colors.MUTED}`}
            name="MoreInfo"
            size={23}
          />
          {this.props.text.length >= 35 ? (
            <Tooltip
              className="roleName-1vjSQR"
              position="right"
              text={this.props.text}
            >
              <Text className="roleName-1vjSQR" size={Text.Sizes.SIZE_16}>
                {this.props.text}
              </Text>
            </Tooltip>
          ) : (
            <Text className="roleName-1vjSQR" size={Text.Sizes.SIZE_16}>
              {this.props.text}
            </Text>
          )}
        </div>
        <Icon
          className={`shield-1-PEa- ${Text.Colors.MUTED}`}
          name="Hourglass"
          size={23}
        />
        <Text size={Text.Sizes.SIZE_16}>{this.props.time}</Text>
        <div className="buttonsContainer-bgP7-t buttonsSpacing-3twfdv">
          <Tooltip text="Remove">
            <Icon
              className="circleButton-3RB01i editButton-1V012_ button-1-5Aqk secondary-dIudih size36-1Ff1kn"
              onClick={() => {
                console.log("Pop!");
              }}
              name="Close"
              size={20}
            ></Icon>
          </Tooltip>
        </div>
      </Clickable>
    );
  }
}
