import { Image, View, ViewProps, ImageProps } from 'react-native'
import { cn } from '@/lib/utils'

interface LogoProps extends ViewProps {
    className?: string
    imageClassName?: string
    imageProps?: Partial<ImageProps>
}

const Logo = ({ className, imageClassName, imageProps, ...props }: LogoProps) => {
    return (
        <View className={cn('h-12 w-52', className)} {...props}>
            <Image 
                source={require('@/assets/images/logo.png')} 
                className={cn('w-full h-full object-contain', imageClassName)} 
                {...imageProps}
            />
        </View>
    )
}

export default Logo
