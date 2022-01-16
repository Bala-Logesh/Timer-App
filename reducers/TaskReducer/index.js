import * as types from './types'

export const initialTaskState = {
    task: {},
    tasks: [
        {
            break: 25,
            completed: false,
            selected: false,
            completedIntervals: 0,
            date: '16/01/2022',
            description: 'Task2',
            id: '1642317675174',
            name: 'Task2',
            priority: 'High',
            taskInterval: 10,
            time: '12:50 PM',
            workIntervalHH: 23,
            workIntervalMM: 59,
        },
        {
            break: 0,
            completed: true,
            selected: false,
            completedIntervals: 0,
            date: '16/01/2022',
            description: 'Title',
            id: '1642317598655',
            name: 'Title',
            priority: 'Low',
            taskInterval: 2,
            time: '12:49 PM',
            workIntervalHH: 10,
            workIntervalMM: 20,
        },
    ],
}

const TaskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return { ...state, tasks: [action.payload, ...state.tasks] }
        case types.SELECT_TASK: {
            let task = state.tasks.find(t => t.id === action.payload)
            if (task.selected === true) {
                task = {}
            } else {
                task.selected = true
            }
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload && task.selected === true) {
                        return { ...task, selected: false }
                    } else if (task.id === action.payload) {
                        return { ...task, selected: true }
                    } else {
                        return { ...task, selected: false }
                    }
                }),
                task,
            }
        }
        case types.COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return { ...task, completed: !task.completed }
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
