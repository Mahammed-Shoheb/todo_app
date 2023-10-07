import { useToDoContext } from '../store/context';

const Form = () => {
  const { addToDo, toDoItem, setToDoItem } = useToDoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDoItem.title) {
      addToDo(toDoItem);
      setToDoItem({ title: '', id: null });
    }
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        className='form-input todo-form'
        value={toDoItem.title}
        onChange={(e) =>
          setToDoItem((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <button type='submit' className='btn sumbmit-btn'>
        submit
      </button>
    </form>
  );
};
export default Form;
