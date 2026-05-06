import AppleLogin from '@/app/(auth)/components/apple-login';
import GoogleLogin from '@/app/(auth)/components/google-login';
import Or from '@/app/(auth)/components/or';
import CommonButton from '@/components/common-button';
import Logo from '@/components/logo';
import SafeAreaWrapper from '@/components/safe-area-wrapper';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

const HomeScreen = () => {

    const router = useRouter()

    // main render
    return (
        <SafeAreaWrapper>
            {/* logo */}
            <Logo className='self-center mb-16' />
            {/* text */}
            <View className='flex text-black flex-col gap-6 mb-5'>
                <Text className='text-3xl font-sf-pro-display-bold'>Happening now</Text>
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
            <Text className='text-black mt-4 mb-8 text-center text-base'>
                By signing up, you agree to the <Link href={'/'} className='text-primary font-sf-pro-display-bold'>Terms of Service</Link> and <Link href={'/'} className='text-primary font-sf-pro-display-bold'>Privacy Policy</Link>.
            </Text>
            <Text className='text-black text-center text-base font-medium'>
                <Text>Already have an account? </Text>
                <Link href={'/(auth)/signin'} className='text-primary font-sf-pro-display-bold'>Sign In</Link>
            </Text>
        </SafeAreaWrapper>
    )
}

export default HomeScreen;