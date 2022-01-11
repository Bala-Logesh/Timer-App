import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import styles from './styles'

export default function TaskList({ navigation }) {
    return (
        <ContainerWrapper>
            <ButtonsWrapper>
                <CustomButton
                    text={'+ Add New Task'}
                    onPress={() => navigation.navigate('Form')}
                />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
