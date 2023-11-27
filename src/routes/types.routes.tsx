import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ROUTER_SCREEN_NAMES } from "../utils/constants";

export type RootStackParamList = {
  [ROUTER_SCREEN_NAMES.HOME]: undefined;
  [ROUTER_SCREEN_NAMES.SIGNIN]: undefined;
  [ROUTER_SCREEN_NAMES.LOGIN]: undefined;
  [ROUTER_SCREEN_NAMES.MESSAGE]: undefined;
  [ROUTER_SCREEN_NAMES.PROFILE]: undefined;
  [ROUTER_SCREEN_NAMES.SEARCH]: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;