import { Link } from "react-router-dom";
import { ToDo } from "./ToDo.tsx";

type ShowToDoProps = {
    ToDo: ToDo[];
}

function ShowToDo(props: ShowToDoProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            {props.ToDo.map((item) => (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '10px',
                }} key={item.id}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span>{item.description}</span>
                    <span>{item.status}</span>
                    <span>{item.user}</span>
                    <span>{item.createDate.toLocaleString()}</span>
                </div>
            ))}
            <Link to={"/"}>Zurück zur Homepage</Link>
        </div>
    );
}


export default ShowToDo;