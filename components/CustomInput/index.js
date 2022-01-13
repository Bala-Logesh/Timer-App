import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { GlobalStyles, colors, fontSize } from '../../globals/GlobalStyles'
import { capitalize } from '../../globals/utilities'
import { styles } from './styles'
import { CardWrapper } from '../../globals/wrappers'

export default function CustomInput({
    title,
    showTitle = true,
    placeHolder = title,
    value,
    setValue,
    editable = false,
    keyboard = 'default',
}) {
    const onChangeTextHandler = value => {
        setValue(prevData => ({ ...prevData, [title]: value }))
    }

    return (
        <View>
            {title && showTitle && (
                <Text style={GlobalStyles.secondaryText}>
                    {title && capitalize(title)}
                </Text>
            )}
            <CardWrapper ai='flex-start' noBgColor={editable ? false : true}>
                <TextInput
                    keyboardType={keyboard}
                    value={value}
                    editable={editable}
                    onChangeText={onChangeTextHandler}
                    placeholder={
                        title !== placeHolder
                            ? placeHolder
                            : `Please enter ${title} here`
                    }
                    placeholderTextColor={colors.textLight}
                    style={styles.inputTitle}
                />
            </CardWrapper>
        </View>
    )
}
