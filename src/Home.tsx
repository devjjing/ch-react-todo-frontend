import {Link} from "react-router-dom";

function Home() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <h1>Wilkommen!</h1>
        <Link to={"/ToDo"}>Zu der ToDo-Liste</Link>
        <Link to={"/create"}>ToDo-Eintrag erstellen</Link>
    </div>
}

export default Home;