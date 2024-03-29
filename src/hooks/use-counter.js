import {useCallback, useState} from "react";

export const useCounter = ({currentValue = 0, step = 1} = {}) => {

    const [amount, setAmount] = useState(currentValue);

    const increment = useCallback(() => setAmount((currentValue) => currentValue + step), [step]);
    const decrement = useCallback(() => setAmount((currentValue) => currentValue - step), [step]);

    return {amount, increment, decrement}
}