import React from 'react';
import { ButtonGroups } from './ButtonGroups';

export default {
  component: ButtonGroups,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonGroups {...args} />;

export const ButtonsForm = Template.bind({});
ButtonsForm.args = {
  primary: false,
  
};
