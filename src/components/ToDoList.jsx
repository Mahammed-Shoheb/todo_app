import { useToDoContext } from '../store/context';
import ToDoSingleItem from './ToDoSingleItem';

const ToDoList = () => {
  const { todos } = useToDoContext();

  if (todos.length < 1) {
    return (
      <section className='section'>
        <p className='default-info'>
          Kindly add To Do items to get started....
        </p>
      </section>
    );
  }
  return (
    <section className='section'>
      {todos.map((todo) => {
        return <ToDoSingleItem key={todo.id} {...todo} />;
      })}
    </section>
  );
};
export default ToDoList;
