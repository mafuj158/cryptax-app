import { View, Text } from 'react-native'
import React from 'react'

const Or = () => {
    return (
        <View className='flex w-full overflow-hidden relative text-black my-4 items-center justify-center'>
            <View className='w-full h-px absolute bg-[#C1C4CC]' />
            <Text className='text-lg font-semibold px-4 bg-background'>OR</Text>
        </View>
    )
}

export default Or