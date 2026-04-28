import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const router = useRouter()

    return (
        <SafeAreaView className='bg-background flex-1'>
            <View className='bg-background px-6 flex flex-col justify-between min-h-full py-4'>
                {/* Logo */}
                <View className='h-12 w-52 self-center mb-8'>
                    <Image source={require('@/assets/images/logo.png')} className='w-full h-full object-contain' />
                </View>

                {/* Content */}
                <View className='flex-1 justify-center'>
                    <Text className='text-4xl text-start text-foreground font-bold mb-2'>
                        Happening now
                    </Text>
                    <Text className='text-lg text-start text-foreground font-medium mb-12'>
                        Join today.
                    </Text>

                    {/* Google Sign Up Button */}
                    <TouchableOpacity 
                        className='bg-background border border-common-gray rounded-full py-4 px-4 flex-row items-center justify-center mb-4'
                        onPress={() => console.log('Google sign up')}
                    >
                        <MaterialCommunityIcons name="google" size={20} color="#1a1a1a" />
                        <Text className='text-foreground font-medium ml-3 text-base'>
                            Sign up with Google
                        </Text>
                    </TouchableOpacity>

                    {/* Apple Sign Up Button */}
                    <TouchableOpacity 
                        className='bg-background border border-common-gray rounded-full py-4 px-4 flex-row items-center justify-center mb-4'
                        onPress={() => console.log('Apple sign up')}
                    >
                        <MaterialCommunityIcons name="apple" size={20} color="#1a1a1a" />
                        <Text className='text-foreground font-medium ml-3 text-base'>
                            Sign up with Apple
                        </Text>
                    </TouchableOpacity>

                    {/* Divider with OR */}
                    <View className='flex-row items-center my-6'>
                        <View className='flex-1 h-px bg-common-gray' />
                        <Text className='mx-4 text-secondary text-base font-medium'>OR</Text>
                        <View className='flex-1 h-px bg-common-gray' />
                    </View>

                    {/* Create Account Button */}
                    <TouchableOpacity 
                        className='bg-primary rounded-full py-4 px-4 items-center justify-center mb-6'
                        onPress={() => router.push('/signup')}
                    >
                        <Text className='text-white font-semibold text-base'>
                            Create account
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Terms and Sign In */}
                <View className='mb-4'>
                    <Text className='text-xs text-secondary text-center mb-4 leading-5'>
                        By signing up, you agree to the{' '}
                        <Text className='text-primary font-semibold'>Terms of Service</Text>
                        {' '}and{' '}
                        <Text className='text-primary font-semibold'>Privacy Policy</Text>
                        {', '}including{' '}
                        <Text className='text-primary font-semibold'>Cookie Use</Text>.
                    </Text>
                    <Text className='text-base text-center'>
                        <Text className='text-secondary'>Already have an account? </Text>
                        <Pressable onPress={() => router.push('/signin')}>
                            <Text className='text-primary font-semibold'>Sign in</Text>
                        </Pressable>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen