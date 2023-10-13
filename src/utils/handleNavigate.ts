import { router } from "expo-router";


export const handleNavigate = (route: string) => {
    router.push(`/${route}`);
  };

export const goBack = () => {
    router.back();
  };