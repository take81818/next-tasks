"use client"

import { updateTask,getTodo } from "../../../utils/supabaseFunctions";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { NotIdTodo } from "../../../utils/interface";

type id = {
  id:string
}

const EditTaskForm = ({id}:id) => {
    const router = useRouter();
        const handleSubmit = async (e:any)=>{
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            let updateData = {}
            if(data.completed === "on"){
              updateData = {...data,completed:true}
            }else{
              updateData = {...data,completed:false}
            }
            await updateTask({updateData,id});
            router.push("/");
        }
    const [todo,setTodo] = useState<NotIdTodo | null>(null)
    
    useEffect(()=>{
      const getSpecificTodo = async()=>{
        const NumId = parseInt(id);
        const spTodo = await getTodo({ id: NumId });
        if(spTodo && spTodo.length > 0){
          const spspTodo =  spTodo[0]
          setTodo(spspTodo)
        }  
    }
    getSpecificTodo();
    },[])
    if (!todo) {
      return <div>Loading...</div>;
    }

    return (
      <div className="mt-10 mx-auto w-full max-w-sm">
          <form onSubmit={handleSubmit}>
              <div >
                  <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
                  <input 
                      id="title"  
                      type="text" 
                      name="title"
                      defaultValue = {todo.title}
                      required  
                      className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
              </div>
              <div className="mt-6" >
                  <label htmlFor="description" className="block text-sm font-medium">説明</label>
                  <input 
                      id="description"  
                      type="text" 
                      name="description" 
                      defaultValue = {todo.description}
                      required  
                      className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
              </div>
              <div className="mt-6" >
                  <label htmlFor="date" className="block text-sm font-medium">期限</label>
                  <input 
                      id="date"  
                      type="date" 
                      name="date" 
                      defaultValue = {todo.date}
                      min="2020-01-01"
                      max="2999-12-31"
                      required  
                      className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
              </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="completed"
            name="completed"
            defaultChecked = {todo.completed}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="completed" className="text-sm">
            タスクを完了にする
          </label>
        </div>
              <button type="submit"  className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm" >
                  Edit
              </button>
          </form>
      </div>
    )
  }
  
  export default EditTaskForm