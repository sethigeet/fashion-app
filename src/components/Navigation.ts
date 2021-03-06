import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export interface AuthNavigationProps<
    RouteName extends keyof AuthenticationRoutes
> {
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthenticationRoutes, RouteName>,
        StackNavigationProp<AppRoutes, "Authentication">
    >;
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: CompositeNavigationProp<
        DrawerNavigationProp<HomeRoutes, RouteName>,
        StackNavigationProp<AppRoutes, "Home">
    >;
    route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};

export type AuthenticationRoutes = {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
};

export type HomeRoutes = {
    OutfitIdeas: undefined;
    FavouriteOutfits: undefined;
    TransactionHistory: undefined;
    EditProfile: undefined;
    NotificationsSettings: undefined;
    Cart: undefined;
};
