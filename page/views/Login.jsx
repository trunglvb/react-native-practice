import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

// create a component
const Login = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.imageBackGround}
				source={{
					uri: "https://vapa.vn/wp-content/uploads/2022/12/anh-nen-ip-12-pro-max-002.jpg",
				}}
				resizeMode="cover"
			></ImageBackground>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBackGround: {
		flex: 1,
		justifyContent: "center",
	},
});

export default Login;
