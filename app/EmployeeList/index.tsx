import Header from "../../src/components/Header";
import { api } from "../../src/lib/api";
import { FlatList, StatusBar, VStack } from "native-base";
import { useState, useEffect } from "react";
import EmployeesCard from "../../src/components/EmployeesCard";
import { Employee } from "../../src/interfaces/employees";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator } from "react-native";

interface ApiResponse {
  data: Employee[];
  limit: number;
  page: number;
  total: number;
}

const EmployeeList = () => {
  const { bottom } = useSafeAreaInsets();
  const [employees, setEmployees] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchEmployees() {
    setIsLoading(true);
    const response = await api.get("user");
    setEmployees(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <VStack
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={() => router.back()} title="Nossos colaboradores" />

      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color={"#000"} />
        </View>
      ) : (
        <FlatList
          data={employees?.data}
          renderItem={({ item }) => <EmployeesCard data={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "column",
            justifyContent: "center",
          }}
          paddingLeft={8}
          paddingTop={3}
          paddingBottom={bottom}
        />
      )}
    </VStack>
  );
};
export default EmployeeList;
