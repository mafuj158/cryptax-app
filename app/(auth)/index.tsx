import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import CommonButton from '@/components/common-button';
import GoogleLogin from '@/app/(auth)/components/google-login';
import AppleLogin from '@/app/(auth)/components/apple-login';
import Logo from '@/components/logo';
import Or from '@/app/(auth)/components/or';

const SafeAreaView = styled(RNSafeAreaView)

const HomeScreen = () => {

    const router = useRouter()

    // main render
    return (
        <SafeAreaView className='bg-background justify-center p-4 flex-col flex-1'>
            {/* logo */}
            <Logo className='self-center mb-16' />
            {/* text */}
            <View className='flex text-black flex-col gap-6 mb-5'>
                <Text className='text-3xl font-bold'>Happening now</Text>
                <Text className='text-xl font-medium'>Join today.</Text>
            </View>
            {/* social login buttons */}
            <View className='flex flex-col gap-4'>
                {/* google */}
                <GoogleLogin />
                {/* apple */}
                <AppleLogin />
            </View>
            {/* or */}
            <Or />
            {/* create account button */}
            <CommonButton onPress={() => router.push('/(auth)/signup')} >
                Create Account
            </CommonButton>
            {/* footer text */}
            <Text className='text-black mt-4 mb-8 text-center text-base font-medium'>
                By signing up, you agree to the <Link href={'/'} className='text-primary font-medium'>Terms of Service</Link> and <Link href={'/'} className='text-primary font-medium'>Privacy Policy</Link>.
            </Text>
            <Text className='text-black text-center text-base font-medium'>
                <Text>Already have an account? </Text>
                <Link href={'/(auth)/signin'} className='text-primary underline font-medium'>Sign In</Link>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;