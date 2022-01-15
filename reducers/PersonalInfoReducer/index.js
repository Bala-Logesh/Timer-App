import * as types from './types'

export const initialPersonalInfoState = {
    name: '',
    email: '',
    age: '',
    gender: '',
}

const PersonalInfoReducer = (state = initialPersonalInfoState, action) => {
    switch (action.type) {
        case types.SAVE_PERSONAL_DATA:
            console.log({ ...state, ...action.payload })
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default PersonalInfoReducer
