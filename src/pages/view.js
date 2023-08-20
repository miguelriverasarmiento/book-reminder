import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';
import styles from './view.module.css';

export default function View() {
    
    const params = useParams();
    const store = useAppContext();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    if(!item){
        return <Layout>Libro no encontrado</Layout>;
    }

    const removeBook = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            let index = store.items.findIndex(element => element.id === id)
                store.items.splice(index, 1)
                const filtered = store.items.filter(item => item.id !== id);
                localStorage.setItem('dataBook', JSON.stringify(filtered));
            }
        setItem(item.id)
        navigate("/");
    }
    

    return(
        <Layout>
            <div className={styles.containerView}>
                <div>{item?.cover? <img src={item?.cover} width="400" /> : ""}</div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Leido" : "Por terminar"}</div>
                    <div>{item?.review}</div>
                    <button 
                        onClick={() => removeBook(item.id)}
                        style={{
                            marginTop: "20px",
                            padding: "15px 20px",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "rgb(209 0 0)",
                            color: "white",
                            fontWeigth: "bolder",
                            fontSize: "18px",
                        }}
                        >Remove
                    </button>
                </div>
            </div>
        </Layout>
    );
}
