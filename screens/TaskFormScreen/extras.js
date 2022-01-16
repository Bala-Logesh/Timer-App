import moment from "moment"

export const priorities = ['High', 'Medium', 'Low']

export const intervals = [
    {
        title1: 'Tasks',
        title2: 'Intervals',
        start: 1,
        end: 11,
        name: 'taskInterval',
    },
    {
        title1: 'Work Interval',
        title2: 'Hours',
        start: 0,
        end: 24,
        name: 'workIntervalHH',
    },
    {
        title1: 'Work Interval',
        title2: 'Minutes',
        start: 0,
        end: 60,
        name: 'workIntervalMM',
    },
    {
        title1: 'Short Break',
        title2: 'Minutes',
        start: 0,
        end: 60,
        name: 'break',
    },
]

export const initialFormData = {
    name: '',
    description: '',
    priority: 'Low',
    taskInterval: 0,
    workIntervalHH: 0,
    workIntervalMM: 0,
    break: 0,
    completed: false,
    selected: false,
    completedIntervals: 0,
    completionDate: null,
    date: moment(new Date()).format('DD/MM/YYYY'),
    time: moment(new Date()).format('hh:mm A'),
}