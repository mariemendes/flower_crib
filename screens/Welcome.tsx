import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles } from '../components/styles';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { getItem, deleteItem } from "../services/storage";

const Welcome = ({ navigation, route }) => {
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        // tenta pegar do SecureStore primeiro
        const storedUser = await getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else if (route?.params) {
          // se veio do Login, salva no estado
          setUser(route.params);
        }
      } catch (e) {
        console.log("Erro ao carregar usuário:", e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [route]);

  const handleLogout = async () => {
    await deleteItem("user");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.subTitle}>No user found</Text>
        <CustomButton title="Go to Login" onPress={() => navigation.navigate("Login")} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.innerContainer}>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/adaptive-icon.png')}
        />
        <Text style={[styles.pageTitle, styles.pageTitleWelcome]}>Welcome!</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>{user.fullName}</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>{user.email}</Text>

        <View style={styles.welcomeContainer}>
          <View style={styles.formArea}>
            <Image
              style={styles.avatar}
              resizeMode="cover"
              source={require('../assets/adaptive-icon.png')}
            />
            <View style={styles.line}></View>
            <CustomButton title="Logout" onPress={handleLogout} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
