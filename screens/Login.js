import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image source={require("../assets/images/yanmazbilet.png")} style={{ width: width * 0.43296, height: width * 0.41184 }} />
            <Text style={styles.title}>Hoşgeldiniz!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Mail Adresiniz"} />
                <TextInput style={styles.input} placeholder={"Şifreniz"} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Register") }}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Search") }}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "600",
        color: "#FF6101"
    },
    inputContainer: {
        width: "80%",
        paddingVertical: "5%",
    },
    input: {
        padding: 10,
        borderRadius: 40,
        backgroundColor: "lightgray",
        marginVertical: "3%",
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#FF6102",
        padding: 8,
        borderRadius: 24,
        width: "35%",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        textAlign: "center",
    }
})