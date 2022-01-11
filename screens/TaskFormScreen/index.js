import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'

export default function TaskForm({ navigation }) {
    return (
        <ContainerWrapper>
            <ButtonsWrapper>
                <CustomButton text={'Go Back'} onPress={navigation.goBack} />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
