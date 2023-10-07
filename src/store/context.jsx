import { nanoid } from 'nanoid';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

// const initialState = [
//   {
//     id: nanoid(),
//     title: 'Get Grocerry',
//     completed: true,
//   },
//   {
//     id: nanoid(),
//     title: 'b',
//     completed: true,
//   },
//   {
//     id: nanoid(),
//     title: 'c',
//     completed: true,
//   },
//   {
//     id: nanoid(),
//     title: 'd',
//     completed: false,
//   },
// ];

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('list')) || [];
};

const setLlocalStorage = (state) => {
  localStorage.setItem('list', JSON.stringify(state));
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload.id) {
        return [
          ...state,
          { ...action.payload, completed: false, id: nanoid() },
        ];
      } else {
        return [
          ...state.map((todo) => {
            if (todo.id === action.payload.id)
              return { ...todo, title: action.payload.title };
            return todo;
          }),
        ];
      }

    case 'UPDATE_COMPLETED_STATUS':
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id)
            return { ...todo, completed: !todo.completed };
          return todo;
        }),
      ];
    case 'DELETE_TODO':
      return [...state.filter((todo) => todo.id !== action.payload.id)];
    default:
      return state;
  }
};

const toDoContext = createContext();

export const ToDOProvider = ({ children }) => {
  const [toDoItem, setToDoItem] = useState({ title: '', id: null });
  const [todos, dispatch] = useReducer(reducer, getLocalStorage());

  useEffect(() => {
    if (todos.length < 1) {
      localStorage.clear();
    } else {
      setLlocalStorage(todos);
    }
  }, [todos]);

  const addToDo = ({ title, id }) => {
    console.log(title.trim());
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title: title.trim(),
        id,
      },
    });
  };

  const updateComplete = (id) => {
    dispatch({
      type: 'UPDATE_COMPLETED_STATUS',
      payload: {
        id,
      },
    });
  };
  const deleteToDo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
      },
    });
  };

  const editToDo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setToDoItem({ title: todo.title, id });
  };

  return (
    <toDoContext.Provider
      value={{
        todos,
        toDoItem,
        setToDoItem,
        addToDo,
        updateComplete,
        deleteToDo,
        editToDo,
      }}
    >
      {children}
    </toDoContext.Provider>
  );
};

export const useToDoContext = () => {
  return useContext(toDoContext);
};
