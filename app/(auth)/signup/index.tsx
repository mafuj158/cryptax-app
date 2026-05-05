import { styled } from "nativewind";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

type FormData = {
    fullName: string;
    email: string;
    password: string;
    gender: string;
    birthDate: string;
    address: string;
    interests: string[];
};
const SafeAreaView = styled(RNSafeAreaView)

const SignUpScreen = () => {


    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <SafeAreaView className='bg-background justify-center p-4 flex-col flex-1'>

            <TextInput
                keyboardType="email-address"
                className="p-5 bg-white" textContentType="fullStreetAddress" />

        </SafeAreaView>

    );
}

export default SignUpScreen;