import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function LayOutFlexBox() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={[styles.body]}>
				<View style={styles.box1}>
					<View style={styles.box1left}>
						<View
							style={[styles.flex1red, { borderRadius: 10 }]}
						></View>
					</View>
					<View style={styles.box1right}>
						<Text style={{ fontSize: 16 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Text>
					</View>
				</View>
				<View style={styles.box2}>
					<View style={styles.box2row1}>
						<View
							style={[
								styles.flexCenter,
								{ flex: 2, backgroundColor: "yellow" },
							]}
						>
							<Text style={{ fontSize: 16, fontWeight: 700 }}>
								Text center test
							</Text>
						</View>
						<View style={styles.flex1red}>
							<View style={styles.flex1green}></View>
							<View style={styles.flex1blue}></View>
						</View>
					</View>
					<View style={styles.box2row2}>
						<View style={styles.flex1green}></View>
						<View style={styles.flex1blue}></View>
						<View style={styles.flex1red}></View>
					</View>
				</View>
				<View style={styles.box3}>
					<View style={styles.box3Contetnt}>
						<View style={styles.box3ContentChild}></View>
					</View>
				</View>
				<View style={styles.box4}>
					<View style={styles.box4Content}>
						<View
							style={[
								styles.box4Button,
								{ backgroundColor: "#e2e8f0" },
							]}
						>
							<Text>Save</Text>
						</View>
						<View
							style={[
								styles.box4Button,
								{ backgroundColor: "#94a3b8" },
							]}
						>
							<Text>Cancel</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	body: {
		flex: 1,
		borderWidth: 1,
		borderColor: "gray",
	},
	flexCenter: {
		justifyContent: "center",
		alignItems: "center",
	},
	box1: {
		flex: 1,
		flexDirection: "row",
	},
	box1left: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: "gray",
		padding: 15,
	},
	box1right: {
		flex: 2,
		padding: 15,
	},
	box2: {
		flex: 2,
		backgroundColor: "green",
	},
	box2row1: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "row",
	},
	box2row2: {
		flex: 1,
		flexDirection: "row",
	},
	box3: {
		flex: 2,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "pink",
	},
	box3Contetnt: {
		width: "60%",
		height: "60%",
		position: "relative",
		backgroundColor: "violet",
	},
	box3ContentChild: {
		height: "50%",
		aspectRatio: 1,
		position: "absolute",
		zIndex: 2,
		right: -20,
		top: -20,
		backgroundColor: "red",
	},
	box4: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box4Content: {
		width: "80%",
		height: "50%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	box4Button: {
		width: "45%",
		height: "100%",
		borderWidth: 2,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	flex1green: {
		flex: 1,
		backgroundColor: "green",
	},
	flex1blue: {
		flex: 1,
		backgroundColor: "blue",
	},
	flex1red: {
		flex: 1,
		backgroundColor: "red",
	},
});
