import CommonButton from '@/components/common-button'
import CommonInput from '@/components/common-input'
import Logo from '@/components/logo'
import SafeAreaWrapper from '@/components/safe-area-wrapper'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import AppleLogin from '../components/apple-login'
import GoogleLogin from '../components/google-login'
import Or from '../components/or'
import { SigninRequest } from '@/types'





const SignInScreen = () => {

    // hooks
    const router = useRouter()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninRequest>({
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            password: "",
        },
    });



    const handleSignIn = (data: SigninRequest) => {
        // TODO: Implement sign in logic
        console.log("Form submitted with data:", data)
        router.push('/cryptax/(tabs)')
    }

    const onInvalidSubmit = (errors: any) => {
        console.log("Form validation errors:", errors);
    }

    return (
        <SafeAreaWrapper>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                {/* logo */}
                <Logo className='self-center mb-16' />
                {/* text */}
                <Text className='mb-4 text-2xl font-sf-pro-display-semibold'>Sign in to CRYPTAX</Text>
                {/* social login buttons */}
                <View className='flex w-full flex-col gap-4'>
                    {/* google */}
                    <GoogleLogin />
                    {/* apple */}
                    <AppleLogin />
                </View>
                {/* or */}
                <Or />
                {/* login form */}
                <KeyboardAvoidingView
                    className='mb-4 flex flex-col gap-4'
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    {/* email */}
                    <CommonInput
                        validationRules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        }}
                        type='email'
                        label='Email'
                        control={control}
                        errors={errors}
                        register_as='email'
                    />
                    {/* password */}
                    <CommonInput
                        validationRules={{
                            required: "Password is required",
                        }}
                        type='password'
                        label='Password'
                        control={control}
                        errors={errors}
                        register_as='password'
                    />
                    <CommonButton className='mt-2' onPress={handleSubmit(handleSignIn, onInvalidSubmit)}>
                        Sign In
                    </CommonButton>
                </KeyboardAvoidingView>
                {/* footer text */}
                <Text className='text-black text-center text-base font-medium'>
                    <Text>Don&#39;t have an account? </Text>
                    <Link href={'/(auth)/signup'} className='text-primary font-sf-pro-display-bold'>Sign Up</Link>
                </Text>
            </ScrollView>
        </SafeAreaWrapper>
    )
}

export default SignInScreen