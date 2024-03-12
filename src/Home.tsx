import {Link} from "react-router-dom";

function Home() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <h1>Wilkommen!</h1>
        <Link to={"/todo"}>Zu der To-Do-Liste</Link>
        <Link to={"/create"}>To-Do-Eintrag erstellen</Link>
    </div>
}

export default Home;