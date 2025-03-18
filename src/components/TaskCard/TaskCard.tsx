import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "./TaskEditButton/TaskEditButton";
import { Todo } from "../../../utils/interface";

type TaskCardProps = {
  todos: Todo[];
};

const TaskCard = ({ todos }: TaskCardProps) => {
  
  return(
    <>
      <div className="grid grid-cols-4 gap-12">
        {todos.map((todo) => {
        return (
          <div key={todo.id} className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between ">
            <header>
              <h1 className="text-lg font-semibold">{todo.title}</h1>
              <div className="mt-1 text-sm line-clamp-3">{todo.description}</div>
            </header>
            <div>
              <div className="text-sm">{todo.date}</div>
              <div className="flex justify-between items-center">
                <div
                  className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
                    todo.completed ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {todo.completed ? "Completed" : "Incomplete"}
                </div>
                <div className="flex gap-4">
                  <TaskEditButton id={todo.id} />
                  <TaskDeleteButton id={todo.id} />
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
    </div>
    </>
  )
};

export default TaskCard;
