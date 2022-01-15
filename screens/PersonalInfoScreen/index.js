import { useState, useContext } from 'react'
import { View, Pressable, Image, KeyboardAvoidingView } from 'react-native'
import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import styles from './styles'
import { flexBox } from '../../globals/GlobalStyles'
import { ProfileForm } from './components'
import { DataContext } from '../../context'
import { savePersonalInfoAction } from '../../reducers'

export default function PersonalInfo() {
    const {
        personalInfo: { state, dispatch },
    } = useContext(DataContext)

    const [image, setImage] = useState(false)
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState(state)

    const onPressHandler = () => {
        edit && dispatch(savePersonalInfoAction(data))
        setEdit(!edit)
    }

    return (
        <ContainerWrapper noPaddingTop>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%' }}
                behavior={Platform.OS === 'ios' ? 'height' : ''}
            >
                <View style={styles.profileTop}>
                    <Pressable
                        style={[flexBox.flex, { flex: 1 }]}
                        onPress={() => setImage(!image)}
                    >
                        {image ? (
                            <Image
                                source={require('../../assets/avatar.png')}
                                style={styles.image}
                            ></Image>
                        ) : (
                            <View style={styles.image}></View>
                        )}
                    </Pressable>
                    <ButtonsWrapper>
                        <CustomButton
                            text={edit ? 'Save Profile' : 'Edit Profile'}
                            onPress={() => onPressHandler()}
                        />
                    </ButtonsWrapper>
                </View>
                <View style={styles.profileBottom}>
                    <ProfileForm data={data} setData={setData} edit={edit} />
                </View>
            </KeyboardAvoidingView>
        </ContainerWrapper>
    )
}
