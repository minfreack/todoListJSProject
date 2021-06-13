import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

//No es necesario colocar todo => ya que solo es un argumento,
// en caso de ser más sí es necesario
todoList.todos.forEach( crearTodoHTML );
