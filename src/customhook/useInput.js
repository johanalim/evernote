import {useState} from 'react';

const useInput = (initialValue = '') => {
    const [value, setvalue] = useState(initialValue)
    const reset = () => {
        setvalue(initialValue)
    }
    const bind = {
        value,
        onCange: (e) => {
            setvalue(e.target.value)
        }
    }
    return [value,bind,reset]

}
export default useInput;