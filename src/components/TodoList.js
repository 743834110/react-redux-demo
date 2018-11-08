import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo";

/**
 * 这里传输的li项的点击事件的运行函数
 * 可以是直接运行，也可以是再在外层包裹
 * @param todos
 * @param onTodoClick
 * @return {*}
 * @constructor
 */
const TodoList = ({todos, onTodoClick}) => {

    let lis = todos.map((todo, index) => (
        <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo}/>
    ));
    return (
        <ul>
            {lis}
        </ul>
    )
}

TodoList.propTypes = {
    toDos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.string.isRequired
};

export default TodoList;

