import { Stack } from "expo-router";

const Layout = ()=> {

    return(
        <Stack>
            <Stack.Screen name="index" options={{title: "Login"}}/>
            <Stack.Screen name="home/index" options={{title: "Home"}}/>
            <Stack.Screen name="products/index" options={{title: "Products"}}/>
        </Stack>
    )
}

export default Layout