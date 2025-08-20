// App.tsx
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import RootStack from "./navigators/RootStack";
import { getItem } from "./services/storage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const savedUser = await getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        console.log("Erro ao recuperar user:", err);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <RootStack user={user} />;
}
