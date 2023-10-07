import { useToDoContext } from '../store/context';
import { BiSolidEdit, BiTrash } from 'react-icons/bi';
import { BsCheck2Circle, BsCheck, BsCheckAll } from 'react-icons/bs';

const ToDoSingleItem = ({ id, title, completed }) => {
  const { updateComplete, deleteToDo, editToDo } = useToDoContext();
  return (
    <article className='todo-item'>
      <div className='todo-content'>
        <input
          type='checkbox'
          name=''
          checked={completed}
          onChange={() => updateComplete(id)}
          className='compelet'
        />

        <h2
          id={id}
          style={{ textDecoration: `${completed ? 'line-through' : 'none'}` }}
        >
          {title}
        </h2>
      </div>
      <div>
        <button
          type='button'
          onClick={() => deleteToDo(id)}
          className='todo-icons delete-icon'
        >
          <BiTrash />
        </button>
        <button
          type='button'
          onClick={() => editToDo(id)}
          className='todo-icons edit-icon'
        >
          <BiSolidEdit />
        </button>
      </div>
    </article>
  );
};
export default ToDoSingleItem;
