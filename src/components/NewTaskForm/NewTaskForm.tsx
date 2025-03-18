"use client"

import { addTask } from "../../../utils/supabaseFunctions";
import { useRouter } from "next/navigation";


const NewTaskForm = () => {
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget; 
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const allData = {...data,completed:false}
        await addTask({allData});
        router.push("/");
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
                    required  
                    className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
            </div>
            <div className="mt-6" >
                <label htmlFor="description" className="block text-sm font-medium">説明</label>
                <input 
                    id="description"  
                    type="text" 
                    name="description" 
                    required  
                    className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
            </div>
            <div className="mt-6" >
                <label htmlFor="date" className="block text-sm font-medium">期限</label>
                <input 
                    id="date"  
                    type="date" 
                    name="date" 
                    min="2020-01-01"
                    max="2999-12-31"
                    required  
                    className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
            </div>
            <button type="submit"  className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm" >
                Create
            </button>
        </form>
    </div>
  )
}

export default NewTaskForm