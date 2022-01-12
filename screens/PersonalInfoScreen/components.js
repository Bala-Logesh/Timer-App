import { ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'

export function ProfileForm({ data, setData, edit }) {
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            bounces={false}
        >
            <CustomInput
                value={data.name}
                setValue={setData}
                title='name'
                editable={edit}
            />
            <CustomInput
                value={data.age}
                setValue={setData}
                title='age'
                keyboard='numeric'
                editable={edit}
            />
            <CustomInput
                value={data.email}
                setValue={setData}
                title='email'
                keyboard='email-address'
                editable={edit}
            />
            <CustomInput
                value={data.gender}
                setValue={setData}
                placeHolder="I'd prefer not to say"
                title='gender'
                editable={edit}
            />
        </ScrollView>
    )
}
