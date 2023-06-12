import { useState, react } from 'react';

const useThrowAsyncError = () => {
    const [state, setState] = useState();

    return (error) => {
        setState(() => { throw error; });
    }
};

export default useThrowAsyncError;