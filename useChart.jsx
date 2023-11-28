import useRequest from "@/lib/app/hooks/useRequest";
import useSWR from "swr";
import {useState} from "react";

const useChart = (chart_url) => {
    const requestServer = useRequest({auth: true, notification: false})
    const [filterOption, setFilterOption] = useState([]);
    const queryString = filterOption.length !== 0
        ? `?${filterOption.map((option) => `${option.key}=${option.value}`).join('&')}`
        : '';
    //swr config
    const fetcher = (...args) => {
        return requestServer(args, 'get').then(({data}) => {
            return data.data;
        }).catch(() => {
        })
    };

    const {
        data,
        isValidating,
        mutate
    } = useSWR(filterOption.length !== 0 ? `${chart_url}${queryString}` : "", fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        keepPreviousData: true
    });

    return {
        reportList: data,
        isLoadingReportList: isValidating,
        errorReportList: !data,
        setFilterOption: setFilterOption,
        mutate: mutate
    }
};

export default useChart;
