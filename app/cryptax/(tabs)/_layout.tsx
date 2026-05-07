import AiIcon from "@/components/icons/ai"
import CrypstoreIcon from "@/components/icons/crypstore"
import NewsIcon from "@/components/icons/news"

import { Tabs } from "expo-router"
import { View } from "react-native"

type TabRoute = {
    name: string
    title: string
    icon: React.ComponentType<{ focused: boolean }>
}

const TabLayout = () => {

    const tabRoutes: TabRoute[] = [
        {
            name: "index",
            title: "News",
            icon: NewsIcon,
        },
        {
            name: "ai-search",
            title: "AI Search",
            icon: AiIcon,
        },
        {
            name: "crypstore",
            title: "Crypstore",
            icon: CrypstoreIcon,
        },
    ]

    const renderTabs = () => {
        return tabRoutes.map((route) => {
            const IconComponent = route.icon
            return (
                <Tabs.Screen
                    key={route.name}
                    name={route.name}
                    options={{
                        title: route.title,
                        tabBarIcon: ({ focused }) => (
                            <View className="flex size-6 justify-center items-center">
                                <IconComponent focused={focused} />
                            </View>
                        )
                    }}
                />
            )
        })
    }

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2b7fff',
            tabBarInactiveTintColor: '#373737',
            tabBarStyle: {
                backgroundColor: '#ffffff',
                shadowColor: '#000',
                height: 70,
                shadowOffset: {
                    width: 0,
                    height: -10,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 4,
            },
            tabBarLabelStyle: {
                fontSize: 13,
                fontFamily: 'sf-pro-display-semibold'
            }
        }}>
            {renderTabs()}
        </Tabs>
    )
}

export default TabLayout