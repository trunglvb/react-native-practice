//import liraries
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Login from "./Login";

// create a component
const RootComponent = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Login />
		</SafeAreaView>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

//make this component available to the app
export default RootComponent;
