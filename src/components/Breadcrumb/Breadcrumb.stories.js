import React from 'react';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      source: {
        type: 'code', // Menampilkan tombol "Show code"
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: { type: 'select', options: ['regular', 'bold', 'italic'] },
    },
    custom: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const SmallBreadcrumb = Template.bind({});
SmallBreadcrumb.args = {
  items: [{ href: '#', label: 'Home' }, { href: '#', label: 'Products' }, { href: '#', label: 'Shoes' }],
  size: 'small',
  type: 'regular',
  custom: false,
};

export const MediumBreadcrumb = Template.bind({});
MediumBreadcrumb.args = {
  items: [{ href: '#', label: 'Home' }, { href: '#', label: 'Services' }, { href: '#', label: 'Consulting' }],
  size: 'medium',
  type: 'regular',
  custom: false,
};

export const LargeBoldBreadcrumb = Template.bind({});
LargeBoldBreadcrumb.args = {
  items: [{ href: '#', label: 'Home' }, { href: '#', label: 'Products' }, { href: '#', label: 'Electronics' }],
  size: 'large',
  type: 'bold',
  custom: true,
};
