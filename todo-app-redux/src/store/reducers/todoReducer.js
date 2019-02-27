const todoList_db = [
    "Finish Redux Tutorials",
    "Learn more about Relay",
    "Build 5 more React apps",
    "Review React Component Lifecycle",
    "Obtain Data Visualization Certificate",
    "Review Algorithms",
    "Tweet Progress",
    "Get a coffee!",
    "Browse Google Fonts",
    "Learn more about React Native"
];
const initialState = {
    todoList: todoList_db,
    tempList: todoList_db,
    searchText: "",
    clearListFlag: false
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if(!state.clearListFlag){
                return {
                    todoList: [...state.todoList, action.todo],
                    tempList: [...state.tempList, action.todo],
                    searchText: state.searchText,
                    clearListFlag: state.clearListFlag
                }
            }else{
                return {
                    todoList: [...state.todoList, action.todo],
                    tempList: state.tempList,
                    searchText: state.searchText,
                    clearListFlag: state.clearListFlag
                }
            }

        case 'DELETE_TODO':
            return {
                todoList: state.todoList.filter((todo, i) => i !== action.index),
                tempList: state.tempList,
                searchText: state.searchText,
                clearListFlag: state.clearListFlag
            };

        case 'ONCHANGE_SEARCHTEXT':
            return {
                searchText: action.searchText,
                todoList: state.todoList,
                tempList: state.tempList,
                clearListFlag: state.clearListFlag
            }

        case 'CLEAR_TODOLIST':
            return {
                searchText: state.searchText,
                todoList: [],
                tempList: state.tempList,
                clearListFlag: true
            }

        case 'RESET_TODOLIST':
            return {
                searchText: state.searchText,
                todoList: state.tempList,
                tempList: state.tempList,
                clearListFlag: false
            }

        default:
            return state;
    }
}