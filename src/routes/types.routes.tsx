import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;