import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	useColorScheme,
	StatusBar,
} from "react-native";
import RootComponent from "./page/views";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" />
			<RootComponent />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
