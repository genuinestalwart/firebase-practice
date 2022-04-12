import { useEffect, useState } from "react";

const useStorage = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        loadFromStorage();
    });

    const loadFromStorage = () => {
        const sp = localStorage.getItem('selectedProducts');

        if (sp && JSON.parse(sp).length) {
            setList(JSON.parse(sp));
        }
    };

    return [list, setList];
};

export default useStorage;
