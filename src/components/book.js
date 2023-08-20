import { Link } from 'react-router-dom';

export const Book = ({ item }) => {

    const bookContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '50px',
        width: "200px",
    }

    const bookInfoStyle = { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: "white",
        textDecoration: 'none',
    }

    const titleStyle = {
        marginTop: "10px",
        fontWeight: "bolder",
        fontFamily: "ui-monospace",
        fontSize: "19px",
        textShadow: "1px 1px 1px black",
    }
    
    return(
        <div style={bookContainerStyle}>
            <Link to={`/view/${item.id}`} style={bookInfoStyle}>
                <img src={item?.cover} width="200" height="300" alt={item.title} />
                <div style={titleStyle}>{item?.title}</div>
            </Link>
        </div>
    );
}
