import React from "react";

import { Story } from "@storybook/react";
import {PhoneInput} from '../src/Components';
export default {
    title: "Phone Number Input",
    component: PhoneInput,
  } 
  const Template = (args) => <PhoneInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
