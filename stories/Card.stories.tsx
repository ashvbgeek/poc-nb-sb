import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../src';
import { NativeBaseProvider } from 'native-base';

const meta: Meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CardProps> = args => (
  <NativeBaseProvider>
    <Card {...args} />
  </NativeBaseProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});

Primary.args = {
  imgUrl: 'https://examples.nativebase.io/images/dawki-river.png',
  category: 'NEWS',
  date: 'May 30, 2022',
  heading: 'The Garden City',
  desc:
    "Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.",
};
