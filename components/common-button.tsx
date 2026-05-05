import React from "react";
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    StyleProp,
    ViewStyle,
} from "react-native";
import { cn } from "@/lib/utils";   // ← Now works with NativeWind

interface CommonButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset"; // Not used in RN, kept for compatibility
    link?: boolean;
    className?: string;
    path?: string;
    isLoading?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    children,
    link = false,
    className,
    path,
    isLoading = false,
    onPress,
    disabled = false,
    style,
}) => {
    const handlePress = () => {
        if (disabled || isLoading) return;
        if (link && path) {
            // Handle navigation here (Expo Router, React Navigation, etc.)
            console.warn("Navigation to:", path);
            // navigation.navigate(path); // or router.push(path)
        } else {
            onPress?.();
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={handlePress}
            disabled={disabled || isLoading}
            className={cn(
                "bg-primary w-full disabled:opacity-50 disabled:cursor-not-allowed border border-transparent p-2 hover:opacity-50 min-h-14 rounded-full flex-row items-center justify-center capitalize",
                className
            )}
        >
            {isLoading ? (
                <ActivityIndicator color="#ffffff" size="small" />
            ) : (
                <Text className="text-white text-base font-medium capitalize">
                    {children}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default CommonButton;