import {Link} from "react-router-dom";

type ToDoPageProps = {
    ToDo: ToDoType;
}
function ShowToDo(props: Props) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        {props.ToDo.map((a) => {
            return <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '10px',
            }} key={a.id}>
                <span>{a.id}</span>
                <span>{a.name}</span>
                <span>{a.description}</span>
                <span>{a.status}</span>
                <span>{a.user}</span>
                <span>{a.createDate}</span>
            </div>
        })}

        <Link to={"/"}>Zurück zur Homepage</Link>
    </div>
}

export default ShowToDo;