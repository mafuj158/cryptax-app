import { Tabs } from "expo-router"
import { Image, View } from "react-native"

const TabLayout = () => {

    const tabRoutes = [
        {
            name: "index",
            title: "News",
            focusedIcon: require("@/assets/icons/focused-news.png"),
            unfocusedIcon: require("@/assets/icons/unfocused-news.png")
        },
        {
            name: "ai-search",
            title: "AI Search",
            focusedIcon: require("@/assets/icons/focused-ai.png"),
            unfocusedIcon: require("@/assets/icons/unfocused-ai.png")
        },
        {
            name: "crypstore",
            title: "Crypstore",
            focusedIcon: require("@/assets/icons/focused-ai.png"),
            unfocusedIcon: require("@/assets/icons/unfocused-ai.png")
        },
        {
            name: "more",
            title: "More",
            focusedIcon: require("@/assets/icons/focused-news.png"),
            unfocusedIcon: require("@/assets/icons/unfocused-news.png")
        },
        {
            name: "setting",
            title: "Setting",
            focusedIcon: require("@/assets/icons/focused-news.png"),
            unfocusedIcon: require("@/assets/icons/unfocused-news.png")
        },
    ]

    const renderTabs = () => {
        return tabRoutes.map((route) => (
            <Tabs.Screen
                key={route.name}
                name={route.name}
                options={{
                    title: route.title,
                    tabBarIcon: ({ focused }) => (
                        <View className="flex size-6 justify-center items-center">
                            <Image
                                source={focused ? route.focusedIcon : route.unfocusedIcon}
                                className="w-full h-full object-contain"
                            />
                        </View>
                    )
                }}
            />
        ))
    }


    // main render
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

export default TabLayout;