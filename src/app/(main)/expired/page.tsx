"use client"

import { useEffect,useState } from "react";
import TaskCard from '@/components/TaskCard/TaskCard';
import { getExpiredTodos } from "../../../../utils/supabaseFunctions"
import { Todo } from "../../../../utils/interface";

const ExpiredTaskPage = () => {
  const [todos,setTodos] = useState<Todo[]>([])
  
    useEffect(()=>{
      const getTodos = async ()=>{
        const todos = await getExpiredTodos();
        setTodos(todos ?? []);
      } 
      getTodos();
    },[])
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard todos={todos} />
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
