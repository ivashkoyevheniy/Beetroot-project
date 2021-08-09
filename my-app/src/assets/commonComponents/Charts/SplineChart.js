import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  area,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';

const data = [
  { month: 'Jan', appStore: 87, googlePlay: 23 },
  { month: 'Feb', appStore: 89, googlePlay: 25 },
  { month: 'Mar', appStore: 85, googlePlay: 30 },
  { month: 'Apr', appStore: 83, googlePlay: 27 },
  { month: 'May', appStore: 95, googlePlay: 31 },
  { month: 'Jun', appStore: 91, googlePlay: 32 },
  { month: 'Jul', appStore: 90, googlePlay: 33 },
  { month: 'Aug', appStore: 97, googlePlay: 35 },
  { month: 'Sep', appStore: 95, googlePlay: 37 },
  { month: 'Oct', appStore: 98, googlePlay: 40 },
  { month: 'Nov', appStore: 110, googlePlay: 45 },
  { month: 'Dec', appStore: 120, googlePlay: 55 },
];

const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
  },
});

const Area = props => (
  <AreaSeries.Path
    {...props}
    path={area()
      .x(({ arg }) => arg)
      .y1(({ val }) => val)
      .y0(({ startVal }) => startVal)
      .curve(curveCatmullRom)}
  />
);

class SplineChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;
    return (
      <Paper>
        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="App Store"
            valueField="appStore"
            argumentField="month"
            seriesComponent={Area}
          />
          <AreaSeries
            name="Google Play"
            valueField="googlePlay"
            argumentField="month"
            seriesComponent={Area}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: 'SplineChart' })(SplineChart);
