import Toast from "react-native-root-toast";
import { useRouter } from "expo-router";

const accounts = [
  {
    email: "jane@ufpr.br",
    password: "123456",
  },
];

export const handleMockLogin = async (email: string, password: string) => {
  const router = useRouter();
  const accountExists = accounts.some(
    (account) => account.email === email && account.password === password
  );

  if (!accountExists) {
    const toast = Toast.show("Login ou Senha inválidos", {
      duration: Toast.durations.LONG,
      position: 50,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: "#B90504",
      textColor: "#f5f9ff",
      onShow: () => {},
      onShown: () => {},
      onHide: () => {},
      onHidden: () => {},
    });

    setTimeout(function () {
      Toast.hide(toast);
    }, 2500);
  } else {
    router.push("Home");
  }
};
