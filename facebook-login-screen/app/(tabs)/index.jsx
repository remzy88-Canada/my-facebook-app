import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter your mobile number or email address");
      return;
    }

    if (password.trim() === "") {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    Alert.alert("Success", "Login successful!");
  }

  function handleCreateAccount() {
    Alert.alert("Create Account", "Create new account button clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topBar}>
        <Text style={styles.backArrow}>‹</Text>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>f</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile number or email address"
          placeholderTextColor="#8c98a4"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8c98a4"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgottenText}>Forgotten Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateAccount}
        >
          <Text style={styles.createText}>Create new account</Text>
        </TouchableOpacity>

        <Text style={styles.metaText}>∞ Meta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e2028",
    paddingHorizontal: 30,
  },

  topBar: {
    height: 70,
    justifyContent: "center",
  },

  backArrow: {
    color: "#ffffff",
    fontSize: 48,
    fontWeight: "300",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 90,
    marginBottom: 110,
  },

  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#1877f2",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#ffffff",
    fontSize: 78,
    fontWeight: "bold",
    marginTop: 14,
  },

  formContainer: {
    width: "100%",
  },

  input: {
    height: 70,
    borderWidth: 1,
    borderColor: "#566b76",
    borderRadius: 20,
    paddingHorizontal: 28,
    color: "#ffffff",
    fontSize: 22,
    marginBottom: 18,
    backgroundColor: "rgba(255,255,255,0.03)",
  },

  loginButton: {
    height: 70,
    borderRadius: 35,
    backgroundColor: "#0866e8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  loginText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
  },

  forgottenText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "600",
    marginTop: 36,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 35,
  },

  createButton: {
    height: 67,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: "#0866e8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  createText: {
    color: "#0866e8",
    fontSize: 22,
    fontWeight: "600",
  },

  metaText: {
    color: "#d7dee5",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
