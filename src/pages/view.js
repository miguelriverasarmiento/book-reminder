import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../store/store';
import Layout from '../components/layout';

export default function View() {
    
    const params = useParams();
    const store = useAppContext();
    const [item, setItem] = useState({});

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    const itemStyles = {
        container: {
            display: 'flex',
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto",
        },
    };

    if(!item){
        return <Layout>Book not found</Layout>;
    }

    return(
        <Layout>
            <div style={itemStyles.container}>
                <div>{item?.cover? <img src={item?.cover} width="400" /> : ""}</div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Leido" : "Por terminar"}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}
