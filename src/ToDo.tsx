import {ToDoStatus} from "./ToDoStatus.tsx";

export type ToDo = {
    id: number,
    name: string,
    description: string,
    status: ToDoStatus,
    user: string,
    createDate: Date,
}

