import Chart from "@/core/components/Chart";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";


const Pie = ({data}) => {
    const theme = useTheme();
    const upperMd = useMediaQuery((theme.breakpoints.up("md")))
    const specialOption = {
        title: {
            text: undefined,
        },
        fill: {
            opacity: 0.9,
        },
        labels: data.map((item) => ` ${item.state_name}`),
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontWeight: 300,
            },
        },
        legend: {
            show: upperMd
        }
    };
    const series = data.map((item) => +item.percentage)
    return (
        <Chart chartId="LoanDistributionPie" type="pie" specialOption={specialOption} series={series}/>
    )
};

export default Pie;
