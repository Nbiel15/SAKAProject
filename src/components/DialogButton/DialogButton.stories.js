import React, { useState } from 'react';
import DialogButton from './DialogButton';
import Modal from './Modal';

export default {
  title: 'Components/DialogButton',
  component: DialogButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
  },
};

const Template = (args) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <DialogButton {...args} action={() => openModal(args.message)} />
      {isModalOpen && (
        <Modal
          title="Notification"
          message={modalMessage}
          onClose={closeModal}
        />
      )}
    </>
  );
};

// Tombol Open File
export const OpenFileButton = Template.bind({});
OpenFileButton.args = {
  label: 'Open File',
  size: 'medium',
  type: 'primary',
  message: 'Ini default content yaa',
};

// Tombol Show Warning
export const ShowWarningButton = Template.bind({});
ShowWarningButton.args = {
  label: 'Show Warning',
  size: 'medium',
  type: 'secondary',
  message: 'Ini important content yaa',
};

// Tombol Delete Action
export const DeleteActionButton = Template.bind({});
DeleteActionButton.args = {
  label: 'Delete',
  size: 'large',
  type: 'danger',
  message: 'Ini delete content yaa',
 
};
