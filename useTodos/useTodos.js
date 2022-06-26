import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];  //mantener info persistente (que no se vaya cuando recargo la página)
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init) //el todoReducer no se ejecuta, solo se pasa la referencia

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));   //mantener info persistente (que no se vaya cuando recargo la página)
    }, [todos])


    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
  }
}
