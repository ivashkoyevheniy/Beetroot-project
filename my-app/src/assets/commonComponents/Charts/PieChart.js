import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { salesByBranch as data } from './demo-data/data-vizualization';

export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="branch"
            innerRadius={0.6}
          />
          <Legend />
          <Title
            text="Your Sales"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
