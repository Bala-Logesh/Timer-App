import { useState } from 'react'
import { View, Pressable, Image, KeyboardAvoidingView } from 'react-native'
import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import styles from './styles'
import { flexBox } from '../../globals/GlobalStyles'
import { ProfileForm } from './components'

export default function PersonalInfo() {
    const [image, setImage] = useState(false)
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
    })

    const onPressHandler = () => {
        edit && console.log(data)
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
