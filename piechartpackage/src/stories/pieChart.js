import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';

export const SimplePieChart = ({ radius, data, ...props }) => {
  return (
    <PieChart
        data={data}
        radius={radius}
    />
  );
};

SimplePieChart.propTypes = {
   radius: PropTypes.number,
   data: PropTypes.array
};

SimplePieChart.defaultProps = {
    radius: 20,
    data : {}
};
