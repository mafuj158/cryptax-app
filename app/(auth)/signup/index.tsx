import CommonButton from '@/components/common-button'
import CommonInput from '@/components/common-input'
import Logo from '@/components/logo'
import SafeAreaWrapper from '@/components/safe-area-wrapper'
import { SignupRequest } from '@/types'
import { validatePassword } from '@/utils/validatePassword'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'


const SignUpScreen = () => {

    // hooks
    const router = useRouter()
    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<SignupRequest>({
        mode: 'onSubmit',
        defaultValues: {
            email: "",
            password: "",
            password_confirmation: "",
            first_name: "",
            last_name: "",
            is_terms: false
        },
    });

    const handleSignUp = (data: SignupRequest) => {
        // TODO: Implement sign in logic
        console.log("Form submitted with data:", data)
    }

    const onInvalidSubmit = (errors: any) => {
        console.log("Form validation errors:", errors);
    }

    // main render
    return (
        <SafeAreaWrapper>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingVertical: 12,
                }}>
                {/* logo */}
                <Logo className='self-center mb-10' />
                {/* text */}
                <Text className='mb-4 text-2xl font-sf-pro-display-semibold'>Sign up to CRYPTAX</Text>
                {/* login form */}
                <KeyboardAvoidingView
                    className='mb-4 flex flex-col gap-3'
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    {/* first name */}
                    <CommonInput
                        validationRules={{
                            required: "First name is required"
                        }}
                        type='text'
                        label='First Name'
                        control={control}
                        errors={errors}
                        register_as='first_name'
                    />
                    {/* last name */}
                    <CommonInput
                        validationRules={{
                            required: "Last name is required"
                        }}
                        type='text'
                        label='Last Name'
                        control={control}
                        errors={errors}
                        register_as='last_name'
                    />
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
                            validate: (value) =>
                                typeof value === "string"
                                    ? validatePassword(value)
                                    : "Invalid password",
                        }}
                        type='password'
                        label='Password'
                        control={control}
                        errors={errors}
                        register_as='password'
                    />
                    {/* confirm password */}
                    <CommonInput
                        validationRules={{
                            required: "Password confirmation is required",
                            validate: (value) => value === watch('password') || "Passwords do not match"
                        }}
                        type='password'
                        label='Confirm Password'
                        control={control}
                        errors={errors}
                        register_as='password_confirmation'
                    />
                    <CommonButton className='mt-2' onPress={handleSubmit(handleSignUp, onInvalidSubmit)}>
                        Sign Up
                    </CommonButton>
                </KeyboardAvoidingView>

                {/* footer text */}
                <Text className='text-black text-center text-base font-medium'>
                    <Text>Already have an account? </Text>
                    <Link href={'/(auth)/signin'} className='text-primary font-sf-pro-display-bold'>Sign In</Link>
                </Text>
            </ScrollView>
        </SafeAreaWrapper>
    )
}

export default SignUpScreen;