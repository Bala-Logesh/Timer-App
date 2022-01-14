import { useCallback, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { fontSize, flexBox, GlobalStyles } from '../../globals/GlobalStyles'
import { keyExtractor } from '../../globals/utilities'
import styles from './styles'

const HEIGHT = fontSize.xxxlarge

function renderContent({ item }) {
    return (
        <View style={[flexBox.flex]}>
            <Text style={[GlobalStyles.title, styles.scrollerText]}>
                {item === '' ? null : item < 10 ? `0${item}` : item}
            </Text>
        </View>
    )
}

function getItemLayout(_, index) {
    return {
        length: HEIGHT,
        offset: HEIGHT * index,
        index,
    }
}

function Scroller({ name, index, data, setIndex, reset }) {
    let refFlatList = null

    const handleVieweableItemsChanged = useCallback(function ({
        viewableItems,
        changed,
    }) {
        let item
        if (viewableItems.length === 0) {
            item = changed[0]
        } else {
            item = viewableItems[0]
        }
        setIndex(prev => ({ ...prev, [name]: item?.index }))
        refFlatList && refFlatList.scrollToIndex({ index })
    },
    [])

    function scrollToItem() {
        refFlatList && refFlatList.scrollToIndex({ index })
    }

    useEffect(() => {
        refFlatList.scrollToIndex({ index: 0 })
    }, [reset])

    return (
        <View style={styles.scrollerList}>
            <FlatList
                ref={ref => (refFlatList = ref)}
                initialScrollIndex={index}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={scrollToItem}
                onViewableItemsChanged={handleVieweableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}
                getItemLayout={getItemLayout}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderContent}
            />
        </View>
    )
}

export default Scroller
