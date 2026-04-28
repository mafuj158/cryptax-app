import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

interface CustomSplashScreenProps {
    onFinish: () => void;
}

export default function CustomSplashScreen({ onFinish }: CustomSplashScreenProps) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();

        const timer = setTimeout(() => {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(onFinish);
        }, 10000);

        return () => clearTimeout(timer);
    }, [fadeAnim, scaleAnim, onFinish]);

    return (
        <View className="flex-1 justify-center items-center bg-black">
            <Animated.View
                className="items-center gap-5"
                style={[
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <Animated.Text
                    style={{
                        opacity: fadeAnim,
                        fontFamily: 'PlusJakartaSans-Bold',
                    }}
                    className="text-4xl font-bold text-white"
                >
                    CrypTax
                </Animated.Text>
            </Animated.View>
        </View>
    );
}

