import { Stack } from "expo-router";
import { MyContextProvider } from "./context/MyContext";



const Layout = ()=> {


    return(
        <MyContextProvider>
            <Stack>
                <Stack.Screen name="index" options={{title: "Login"}}/>
                <Stack.Screen name="home/index" options={{title: "Home"}}/>
                <Stack.Screen name="groups/index" options={{title: "Groups"}}/>
                <Stack.Screen name="inventory/index" options={{title: "Inventory"}} />
                <Stack.Screen name="product/index" options={{title: "Products"}} />
                <Stack.Screen name="establishment/index" options={{title: "Establishments"}} />
            </Stack>
        </MyContextProvider>
    )
}

export default Layout