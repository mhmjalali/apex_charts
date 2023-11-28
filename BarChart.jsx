import {calculateGradientColor} from "@/core/utils/gradientColorHandler";
import Chart from "@/core/components/Chart";

const BarChart = ({data}) => {
    const usableArray = data.map(({province_name, percentage, ...rest}) => ({
        x: province_name,
        y: +percentage,
        ...rest,
    }));
    let colorArray = data.map((obj) => calculateGradientColor(obj.percentage));
    const specialOption = {
        title: {
            text: undefined,
        },
        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
            },
        },
        legend: {
            show: false,
        },
        colors: colorArray,
        xaxis: {
            labels: {
                rotate: 45,
                rotateAlways: false,
                trim: false,
                style: {
                    fontWeight: 600,
                    fontSize: '11px',
                    colors: '#7e7e7e',
                },
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            labels: {
                formatter: function (val) {
                    return val + '%';
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontWeight: 400,
            },
        },
    };
    const series = [
        {
            name: 'درصد پیشرفت',
            data: usableArray,
        },
    ];

    return <Chart chartId="ProgressBar" type="bar" specialOption={specialOption} series={series}/>;
};

export default BarChart;
