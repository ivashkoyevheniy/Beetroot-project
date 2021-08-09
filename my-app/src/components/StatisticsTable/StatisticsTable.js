import ProgressBar from 'react-customizable-progressbar';
import SplineChart from '../../assets/commonComponents/Charts/SplineChart';
import SimpleChart from '../../assets/commonComponents/Charts/SimpleChart';
import StatisticsLineChart from '../../assets/commonComponents/Charts/StatisticsLineChart';
import './StatisticsTable.css';

export const StatisticsTable = () => {
    const progress1 = 45,
        progress2 = 20,
        progress3 = 25;
    return (
        <div className="statistics-table">
            <div className="table-title table-title--big">Statistics</div>
            <div className='statistics-top-container'>
                <div className='statistics-top-left-container'>
                    <SimpleChart />
                    <SplineChart />
                </div>
                <div className='statistics-top-right-container'>
                    <StatisticsLineChart />
                </div>
            </div>
            <div className='statistics-bottom-container'>
                <div className="container-title">Total sales</div>
                <div className="statistics-table-container">
                    <div className="table-column table-column--progress">
                        <ProgressBar
                            radius={90}
                            progress={progress1}
                            strokeWidth={18}
                            strokeColor="#5484ff"
                            strokeLinecap="round"
                            trackStrokeWidth={18}
                            counterClockwise
                        >
                            <div className="indicator indecator--blue">
                                <div>{progress1}&#37;</div>
                            </div>
                        </ProgressBar>
                        <div className="chart-text">
                            <div className="chart-value">2,300&#36;</div>
                            <div className="chart-type">Direct Sales</div>
                        </div>
                    </div>
                    <div className="table-column table-column--progress">
                        <ProgressBar
                            radius={90}
                            progress={progress2}
                            strokeWidth={18}
                            strokeColor="#aa5fb9"
                            strokeLinecap="round"
                            trackStrokeWidth={18}
                            counterClockwise
                        >
                            <div className="indicator indecator--purpule">
                                <div>{progress2}&#37;</div>
                            </div>
                        </ProgressBar>
                        <div className="chart-text">
                            <div className="chart-value">980&#36;</div>
                            <div className="chart-type">Channel Sales</div>
                        </div>
                    </div>
                    <div className="table-column table-column--progress">
                        <ProgressBar
                            radius={90}
                            progress={progress3}
                            strokeWidth={18}
                            strokeColor="#f83c7b"
                            strokeLinecap="round"
                            trackStrokeWidth={18}
                            counterClockwise
                        >
                            <div className="indicator indecator--red">
                                <div>{progress3}&#37;</div>
                            </div>
                        </ProgressBar>
                        <div className="chart-text">
                            <div className="chart-value">2,300&#36;</div>
                            <div className="chart-type">Channel Sales</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
