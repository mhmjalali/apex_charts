import Chart from "@/core/components/Chart";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

const PolarChart = ({data}) => {
    const theme = useTheme();
    const upperMd = useMediaQuery((theme.breakpoints.up("md"))) 
    const specialOption = {
        title: {
            text: undefined,
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 2,
                    strokeColor: '#e3e3e3',
                },
            },
        },
        fill: {
            opacity: 0.9,
        },
        labels: data.map((item) => ` ${item.state_name}`),
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontWeight: 400,
            },
        },
        legend: {
            show: upperMd
        }
    };
    const series = data.map((item) => +item.percentage)
    return (
        <Chart chartId="LoanDistributionPolar" type="polarArea" specialOption={specialOption} series={series}/>
    )
};

export default PolarChart;
