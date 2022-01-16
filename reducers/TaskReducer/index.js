import * as types from './types'

export const initialTaskState = {
    task: null,
    tasks: [
        {
            break: 0,
            completed: false,
            completedIntervals: 0,
            completionDate: null,
            createdAt: 1642351441997,
            date: '16/01/2022',
            description: '',
            id: '1642351441997',
            name: 'Test',
            priority: 'Low',
            selected: false,
            taskInterval: 0,
            time: '10:13 PM',
            workIntervalHH: 0,
            workIntervalMM: 0,
        },
    ],
}

const TaskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            state = { ...state, tasks: [action.payload, ...state.tasks] }
            console.log(state)
            return state
        case types.SELECT_TASK: {
            let selTask = state.tasks.find(t => t.id === action.payload)
            if (state.task && state.task.id === action.payload) {
                state = { ...state, task: null }
            } else {
                state = { ...state, task: { ...selTask, selected: true } }
            }

            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload && task.selected) {
                        return { ...task, selected: false }
                    } else if (task.id === action.payload) {
                        return { ...task, selected: true }
                    } else {
                        return { ...task, selected: false }
                    }
                }),
            }
        }
        case types.COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed,
                            completionDate: task.completed ? null : Date.now(),
                        }
                    } else {
                        return task
                    }
                }),
            }
        }
        case types.EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
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
