import {supabase} from "./supabase"

export const getAllTodos = async () => {
    const todos = await supabase.from("todo").select('*');
    return todos.data;
}

export const getTodo = async ({id}:any) => {
    const todos = await supabase.from("todo").select("*").eq("id", id);
    return todos.data;
}


export const getCompletedTodos = async () => {
    const todos = await supabase.from("todo").select('*');
    const completedTodos = todos.data?.filter(todo =>{
        if(todo.completed){
            return todo;
        }
    })
    return completedTodos;
}

export const getExpiredTodos = async () => {
    const currentDate = new Date().toISOString();
    const todos = await supabase.from("todo").select('*').lt("date", currentDate);
    const completedTodos = todos.data?.filter(todo =>{
        if(!todo.completed){
            return todo;
        }
    })
    return completedTodos;
}

export const addTask = async ({allData}:any) => {
    const todos = await supabase.from("todo").insert(allData);
    return todos.data;
}

export const updateTask = async ({updateData,id}:any) => {
    const todos = await supabase.from("todo").update(updateData).eq("id", id);
    return todos.data;
}

export const deleteTask = async ({id}:any) => {
    const todos = await supabase.from("todo").delete().eq("id", id);
    return todos.data;
}

