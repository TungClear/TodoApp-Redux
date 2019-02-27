
export const addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        todo
    }
}

export const deleteTodo = (index) => {
    return{
        type: 'DELETE_TODO',
        index
    }
}

export const clearTodoList = () => {
    return{
        type: 'CLEAR_TODOLIST',
    }
}

export const resetTodoList = () => {
    return{
        type: 'RESET_TODOLIST',
    }
}

export const onChangeSearchText = (searchText) => {
    return {
        type: 'ONCHANGE_SEARCHTEXT',
        searchText
    }
}