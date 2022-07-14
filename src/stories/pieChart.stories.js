import React from 'react';

import { SimplePieChart } from './pieChart';

export default {
  title: 'Example/PieChart',
  component: SimplePieChart,
  argTypes: {
    radius: 20
  },
};

const Template = (args) => <SimplePieChart {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    radius: 20,
    data: [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ] 
};
