import * as types from './types'

export const addTaskAction = task => {
    return {
        type: types.ADD_TASK,
        payload: {...task, id: Date.now().toString()},
    }
}

export const editTaskAction = editedTask => {
    return {
        type: types.EDIT_TASK,
        payload: editedTask,
    }
}

export const deleteTaskAction = id => {
    return {
        type: types.DELETE_TASK,
        payload: id,
    }
}
