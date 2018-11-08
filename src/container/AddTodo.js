import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../action";

let Addtodo = ({dispatch}) => {

    let  input;
    return (
        <div>
            <form action="" onSubmit={ e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value))
            }}>
                <input type="text" ref={ node => input = node}/>
                <button type={"submit"}>
                    Add todo
                </button>
            </form>
        </div>
    )
};


Addtodo = connect()(Addtodo)

export default Addtodo