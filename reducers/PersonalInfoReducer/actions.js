import * as types from './types'

export const savePersonalInfoAction = personalInfo => {
    return {
        type: types.SAVE_PERSONAL_DATA,
        payload: personalInfo,
    }
}
