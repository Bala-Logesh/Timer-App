import * as types from './types'

export const initialTaskState = {
    tasks: [],
}

const TaskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return { ...state, tasks: [action.payload, ...state.tasks] }
        case types.EDIT_TASK:
            return {
                ...state,
                tasks: tasks.map(task => {
                    if (task.id !== action.payload.id) {
                        return action.payload
                    } else {
                        return task
                    }
                }),
            }
        case types.DELETE_TASK:
            return {
                ...state,
                tasks: tasks.filter(task => task.id !== action.payload),
            }
        default:
            return state
    }
}

export default TaskReducer
