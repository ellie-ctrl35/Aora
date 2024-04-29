import { useNavigation } from '@react-navigation/native';

const useNavigateToScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return navigateToScreen;
};

export default useNavigateToScreen;
