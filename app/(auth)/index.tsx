import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)

const HomeScreen = () => {
    const router = useRouter()

    return (
        <SafeAreaView className='bg-background justify-center p-4 flex-col flex-1'>
            {/* logo */}
            <View className='h-12 w-52 self-center my-4'>
                <Image source={require('@/assets/images/logo.png')} className='w-full h-full object-contain' />
            </View>

            <Link className='p-3 max-w-72 w-full text-white bg-primary rounded-full text-center self-center text-lg font-semibold' href={'/cryptax'}>
                Get Started
            </Link>
        </SafeAreaView>
    )
}

export default HomeScreen;