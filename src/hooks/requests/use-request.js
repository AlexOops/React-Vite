import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRequestStatus} from "../../redux/slices/ui/request/selectors.js";

export const useRequest = (thunk, ...params) => {
    const [request, setRequest] = useState(null);
    const status = useSelector(state => selectRequestStatus(state, request?.requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        const request = dispatch(thunk(...params));

        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        }

    }, [dispatch, thunk, ...params]);

    return status;
}