const dummyData = [
    { task: 'Eat Bekfast', completed: false, id: 0 },
    { task: 'Grow the Ganja', completed: false, id: 1 },
    { task: 'Eat Sleep Poop', completed: true, id: 2 },
    { task: 'Repeat', completed: false, id: 3 },
];

const todoReducer = (state = dummyData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if(action.task.trim() === '') {
                return state;
            }
            return state.concat({id: action.id, task: action.task, completed: false});
        case 'DELETE_TODO':
            const stateCopy = state.slice();
            for(let i = 0; i < stateCopy.length; i++) {
                if(stateCopy[i].id === action.id) {
                    stateCopy.splice(i, 1);
                    break;
                }
            }
            return stateCopy;
        default:
            return state;
    }
};

export default todoReducer;
