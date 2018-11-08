import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

// 允许我们将处理后的state绑定到props当中
// 在收到state对象后运行
const mapStateToProps = state => {
    console.log(state)
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// 允许我们将dispatch处理后的绑定到props当中
// 在新建目标对象时运行
const mapDispatchToProps = (dispatch, props) => {
    props = {
        onTodoClick: id => {
            console.log("你被点击了。。。")
            dispatch(toggleTodo(id))
        }
    };
    console.log(props)
    return props;
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList