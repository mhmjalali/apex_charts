import dynamic from "next/dynamic";
import useLanguage from "useLanguage"; // a hook that return lang for multi language apps (no special need for this repo)
import ReactDOMServer from 'react-dom/server';
import WidgetsIcon from '@mui/icons-material/Widgets';

const widgetIconSvgString = ReactDOMServer.renderToString(<WidgetsIcon/>);

const ApexChart = dynamic(() => import("react-apexcharts"), {ssr: false}); // it should render in client side

const Chart = ({chartId, type, series, specialOption}) => {
    const {languageApp, languageList} = useLanguage(); // for me it can be "fa" persian or "en" english
    const chartLang = languageList.find((item) => item.key == languageApp).chartLocalization
    const options = {
        chart: {
            id: chartId,
            locales: [chartLang],
            defaultLocale: languageApp,
            fontFamily: languageList[0].fontFamily,
            toolbar: {
                tools: {
                    zoomIn: false,
                    zoomOut: false,
                    download: widgetIconSvgString,
                }
            }
        },
        ...(specialOption ? specialOption : {})
    }
    return <ApexChart type={type} options={options} series={series} width="100%" height="100%"/>
};

export default Chart; 
