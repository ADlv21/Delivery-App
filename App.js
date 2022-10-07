import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import {
    BasketScreen,
    Delivery,
    DetailedRestaurant,
    Home,
    PreparingOrderScreen,
} from "./screens";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen
                            name="DetailedRestaurant"
                            component={DetailedRestaurant}
                        />
                        <Stack.Screen
                            name="Basket"
                            component={BasketScreen}
                            options={{
                                presentation: "modal",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="PreparingOrderScreen"
                            component={PreparingOrderScreen}
                            options={{
                                presentation: "fullScreenModal",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Delivery"
                            component={Delivery}
                            options={{
                                presentation: "fullScreenModal",
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>
    );
}
