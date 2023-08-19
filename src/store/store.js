import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (item) => {},
    updateItem: (item) => {},
});

export default function Store({ children }) {

    const [items, setItems] = useState([]);

    function createItem(item){
        const temp = [...items];
        temp.unshift(item);
        setItems([...temp]);
    }

    function getItem(id){
        const item = items.find((item) => item.id === id);
        return item;
    }

    function updateItem(item){
        const index = items.findIndex(i => i.id === item.id);
        const temp = [...items];
        temp[index] = { ...item };

        return true;
    }

    useEffect(() => {
        const dataBook = JSON.parse(localStorage.getItem('dataBook'));
        if (dataBook){
            setItems(dataBook)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dataBook', JSON.stringify(items));
    }, [items]);


    return(
        <AppContext.Provider
            value={{
                items,
                createItem,
                getItem,
                updateItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){
    return useContext(AppContext);
}
