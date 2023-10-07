import { Form, ToDoList } from './components';

const App = () => {
  return (
    <main>
      <header className='header'>
        <div className='title'>
          <h1>To Do App</h1>
          <div className='title-underline'></div>
        </div>
      </header>
      <Form />
      <ToDoList />
    </main>
  );
};
export default App;
