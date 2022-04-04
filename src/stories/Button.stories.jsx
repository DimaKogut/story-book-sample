import React from 'react';
import { Button } from './Button';
import { within, userEvent } from '@storybook/testing-library';

export default {
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: { action: 'clickOnStoryButton' },
    variant: {
      type: 'string',
      description: 'Варіант зовнішньогг вигляду',
      defaultVelue: 'primary',
      options: ['primary', 'square', 'link'],
      control: {
        type: 'radio'
      }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'Press me',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click me!',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  size: 'large',
  label: 'Button',
};

export const Login = Template.bind({});
Login.args = {
  primary: true,
  size: 'medium',
  label: 'Login',
  variant: 'square',
};

export const Link = Template.bind({});
Link.args = {
  primary: false,
  children: 'Just a link',
  size: 'small',
  label: 'Link',
  variant: 'link',
};
