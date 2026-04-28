import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignInScreen = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () => {
        // TODO: Implement sign in logic
        console.log('Sign in with:', { email, password })
        router.push('/cryptax')
    }

    return (
        <SafeAreaView className='bg-background flex-1'>
            <ScrollView className='bg-background px-6 py-4'>
                <Text className='text-3xl font-bold text-foreground mb-2'>
                    Welcome back
                </Text>
                <Text className='text-secondary text-base mb-8'>
                    Sign in to your account
                </Text>

                {/* Email Input */}
                <View className='mb-6'>
                    <Text className='text-foreground font-medium mb-2'>Email</Text>
                    <TextInput
                        className='bg-common-gray rounded-lg px-4 py-3 text-foreground'
                        placeholder='Enter your email'
                        placeholderTextColor='#86868b'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                    />
                </View>

                {/* Password Input */}
                <View className='mb-3'>
                    <Text className='text-foreground font-medium mb-2'>Password</Text>
                    <TextInput
                        className='bg-common-gray rounded-lg px-4 py-3 text-foreground'
                        placeholder='Enter your password'
                        placeholderTextColor='#86868b'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity className='mb-8'>
                    <Text className='text-primary font-semibold text-sm text-right'>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                {/* Sign In Button */}
                <TouchableOpacity
                    className='bg-primary rounded-full py-4 items-center justify-center mb-4'
                    onPress={handleSignIn}
                >
                    <Text className='text-white font-semibold text-base'>
                        Sign in
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View className='flex-row justify-center items-center'>
                    <Text className='text-secondary'>Don&apos;t have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <Text className='text-primary font-semibold'>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen