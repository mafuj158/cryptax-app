import { cn } from '@/lib/utils';
import { styled } from 'nativewind';
import { ReactNode } from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const StyledSafeAreaView = styled(RNSafeAreaView);

interface SafeAreaWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function SafeAreaWrapper({
    children,
    className
}: SafeAreaWrapperProps) {
    return (
        <StyledSafeAreaView className={cn("bg-background font-sf-pro-display-regular justify-center p-4 flex-col flex-1", className)}>
            {children}
        </StyledSafeAreaView>
    );
}
