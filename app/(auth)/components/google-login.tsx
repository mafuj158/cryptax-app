import { Image, Text, TouchableOpacity, View } from "react-native"

const GoogleLogin = () => {
    return (
        <TouchableOpacity className='flex flex-row w-full gap-3 disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center p-2 min-h-14 border border-[#5B6477] rounded-full' >
            <View className='size-7 flex items-center justify-center'>
                <Image source={require('@/assets/images/google.png')} className='w-full h-full object-contain' />
            </View>
            <Text className='text-black text-base font-medium capitalize'>Continue with Google</Text>
        </TouchableOpacity>
    )
}

export default GoogleLogin