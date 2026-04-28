import { Tabs } from "expo-router"

const CryptaxLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="News" options={{title:"News"}} />
            <Tabs.Screen name="AiSearch" options={{title:"AI Search"}} />
            <Tabs.Screen name="Settings" options={{title:"Settings"}} />
        </Tabs>
    )
}

export default CryptaxLayout