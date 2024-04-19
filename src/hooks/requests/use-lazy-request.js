import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectRequestStatus} from "../../redux/slices/ui/request/selectors.js";

// для ручного(необходимого) перезапроса данных
export const useLazyRequest = (thunk, ...params) => {
    const [request, setRequest] = useState(null);
    const status = useSelector(state => selectRequestStatus(state, request?.requestId));

    const dispatch = useDispatch();

    const makeRequest = useCallback(() => {
        setRequest(dispatch(thunk(...params)))
    }, [dispatch, thunk, ...params]);

    return [status, makeRequest];
};