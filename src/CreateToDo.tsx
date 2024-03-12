import {useState} from "react";
import {Link} from "react-router-dom";
import {ToDo} from "./ToDo.tsx";
import axios from "axios";


type Props = {
    lastId: number;
    action: (values: ToDo) => void;
};


function CreateToDo(props: Props) {
    const [values, setValues] = useState<ToDo>({
        id: props.lastId,
        name: '',
        description: '',
        status: 'OPEN',
        user: '',
        createDate: new Date(),
    });

    const formUpdateHandler = (name: string, value: string | number) => {
        setValues({
            ...values,
            [name]: value,
        });
    }

    function saveHandler(){
        axios.post("/api/todo", //POST
            values as ToDo)
    }

    return <>
        <form onSubmit={(ev) => {
        ev.preventDefault();
        setValues({
            id: props.lastId,   // Set input to default values
            name: '',
            description: '',
            status: 'OPEN',
            user: '',
            createDate: new Date(),
        })
    }}>
            <p>ID</p><input disabled value={values.id} type="number" name="id" onChange={(e) => formUpdateHandler(e.target.name, parseInt(e.target.value, 10))}/>
            <p>Name</p><input name="name" value={values.name} onChange={(e) => formUpdateHandler(e.target.name, e.target.value)}/>
            <p>Description</p><input name="description" value={values.description} onChange={(e) => formUpdateHandler(e.target.name, e.target.value)}/>
            <p>Status</p>
            <select name="status" onChange={(e) => formUpdateHandler(e.target.name, e.target.value)}>
                <option value='INACTIVE'>INACTIVE</option>
                <option value='OPEN'>OPEN</option>
                <option value='PROGRESSING'>PROGRESSING</option>
                <option value='FINISHED'>FINISHED</option>
                <option value='ARCHIVED'>ARCHIVED</option>
            </select>
            <p>User</p><input name="user" value={values.user} onChange={(e) => formUpdateHandler(e.target.name, e.target.value)}/>
            <p>Creation Date</p><input name="createDate" value={values.createDate.toISOString().substring(0, 16)} onChange={(e) => formUpdateHandler(e.target.name, e.target.value)}/>
            <div><button onClick={saveHandler}>Save</button></div>
    </form>
        <Link to={"/"}>Zurück zur Homepage</Link>
    </>
}

export default CreateToDo;