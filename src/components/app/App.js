import React, {Component} from 'react';
import Addtodo from "../../container/AddTodo";
import VisibleTodoList from '../../container/VisibleTodoList'
import Footer from '../Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Addtodo />
                <VisibleTodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
