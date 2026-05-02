import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const SignUpScreen = () => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        // TODO: Implement sign up logic
        console.log('Sign up with:', { name, email, password })
    }

    return (
        <SafeAreaView className='bg-background flex-1'>
            <ScrollView className='bg-background px-6 py-4'>
                <Text className='text-3xl font-bold text-foreground mb-2'>
                    Create your account
                </Text>
                <Text className='text-secondary text-base mb-8'>
                    Join CRYPTAX today
                </Text>

                {/* Name Input */}
                <View className='mb-6'>
                    <Text className='text-foreground font-medium mb-2'>Full Name</Text>
                    <TextInput
                        className='bg-common-gray rounded-lg px-4 py-3 text-foreground'
                        placeholder='Enter your full name'
                        placeholderTextColor='#86868b'
                        value={name}
                        onChangeText={setName}
                    />
                </View>

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
                <View className='mb-8'>
                    <Text className='text-foreground font-medium mb-2'>Password</Text>
                    <TextInput
                        className='bg-common-gray rounded-lg px-4 py-3 text-foreground'
                        placeholder='Create a password'
                        placeholderTextColor='#86868b'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity
                    className='bg-primary rounded-full py-4 items-center justify-center mb-4'
                    onPress={handleSignUp}
                >
                    <Text className='text-white font-semibold text-base'>
                        Create account
                    </Text>
                </TouchableOpacity>

                {/* Sign In Link */}
                <View className='flex-row justify-center items-center'>
                    <Text className='text-secondary'>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/signin')}>
                        <Text className='text-primary font-semibold'>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen