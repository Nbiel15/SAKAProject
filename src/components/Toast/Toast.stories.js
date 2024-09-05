import React from 'react';
import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'danger', 'warning'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['notification', 'information'],
      },
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  variant: 'success',
  size: 'medium',
  type: 'notification',
  message: 'Success',
  additionalMessage: 'Anjaii Berhasill nihhh',
};

export const WarningInformation = Template.bind({});
WarningInformation.args = {
  variant: 'warning',
  size: 'medium',
  type: 'information',
  message: 'Warning',
  additionalMessage: 'Hati hati woaii ada bahayaa!!!',
};

export const DangerNotification = Template.bind({});
DangerNotification.args = {
  variant: 'danger',
  size: 'large',
  type: 'notification',
  message: 'Danger',
  additionalMessage: 'Waduhh adaa erorr nichh',
};

export const InformationToast = Template.bind({});
InformationToast.args = {
  variant: 'success',
  size: 'small',
  type: 'information',
  message: 'Information',
  additionalMessage: 'Ini pesan buat kamu bro',
};
