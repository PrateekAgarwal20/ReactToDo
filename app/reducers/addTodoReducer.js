const dummyData = [
    { task: 'Eat Bekfast', completed: false, id: 0 },
    { task: 'Grow the Ganja', completed: false, id: 1 },
    { task: 'Eat Sleep Poop', completed: true, id: 2 },
    { task: 'Repeat', completed: false, id: 3 },
];

const addTodoReducer = (state = dummyData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if(action.task.trim() === '') {
                return state;
            }
            return state.concat({id: action.id, task: action.task, completed: false});
        default:
            return state;
    }
};

export default addTodoReducer;
