import { useToDoContext } from '../store/context';
import ToDoSingleItem from './ToDoSingleItem';

const ToDoList = () => {
  const { todos } = useToDoContext();

  if (todos.length < 1) {
    return null;
  }
  return (
    <div className='section'>
      {todos.map((todo) => {
        return <ToDoSingleItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};
export default ToDoList;
