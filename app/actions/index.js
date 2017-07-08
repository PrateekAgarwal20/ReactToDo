export function addTodo(id, task) {
    return {
        type: 'ADD_TODO',
        task: task,
        id: id
    };
}
