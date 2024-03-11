import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ToDo} from "./ToDo.tsx";
import axios from "axios";

type Props = {
    lastId: number;
    onToDoChange: () => void,
    action: (values: ToDo) => void;
};



function CreateToDo(props: Props) {
    const [text, setText] = useState("");
    const [values, setValues] = useState<ToDo>({
        id: props.lastId,
        name: '',
        description: '',
        status: 'OPEN',
        user: '',
        createDate: new Date(),
    });

    const onChangeValues = (name: string, value: string | number) => {
        setValues({
            ...values,
            [name]: value,
        });
    }

    function saveHandler(){
        setText("")
        axios.post("/ToDo",
            {} as ToDo)
            .then(props.onToDoChange)
    }

    return <form onSubmit={(ev) => {
        ev.preventDefault();
        props.action(values);
        setValues({
            id: props.lastId,
            name: '',
            description: '',
            status: 'OPEN',
            user: '',
            createDate: new Date(),
        })
    }}>
        <input disabled value={values.id} type="number" name="id" onChange={(e) => onChangeValues(e.target.name, parseInt(e.target.value, 10))}/>
        <input name="name" value={values.name} onChange={(e) => onChangeValues(e.target.name, e.target.value)}/>
        <input name="description" value={values.description} onChange={(e) => onChangeValues(e.target.name, e.target.value)}/>
        <button onClick={saveHandler}>Save</button>
        <Link to={"/"}>Zurück zur Homepage</Link>
    </form>
}

export default CreateToDo;