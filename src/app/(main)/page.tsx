"use client"

import Link from "next/link";
import { MdAddTask } from "react-icons/md";
import TaskCard from "@/components/TaskCard/TaskCard";
import { useEffect,useState } from "react";
import { getAllTodos } from "../../../utils/supabaseFunctions"
import { Todo } from "../../../utils/interface";

export default function MainPage() {
  const [todos,setTodos] = useState<Todo[]>([])

  useEffect(()=>{
    const getTodos = async ()=>{
      const todos = await getAllTodos();
      setTodos(todos ?? []);
    } 
    getTodos();
  },[])

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link href={'/new'} className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700 ">
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex">
        <TaskCard todos={todos} />
      </div>
    </div>
  );
}
