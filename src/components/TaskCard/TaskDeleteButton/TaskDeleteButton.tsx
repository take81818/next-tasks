import { FaTrashAlt } from 'react-icons/fa';
import { deleteTask } from '../../../../utils/supabaseFunctions';

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const taskDelete = async ()=>{
    await deleteTask({id:id})
  }
  
  return (
    <form onSubmit={taskDelete}>
      <button type='submit' className='hover:text-gray-700 
      text-lg cursor-pointer'>
        <FaTrashAlt />
      </button>
    </form>
  )
}

export default TaskDeleteButton