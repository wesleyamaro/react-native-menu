import React from 'react';
import SideMenu from 'react-native-side-menu';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './src/menu';

export default class Application extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  isOpen: false,
		  selectedItem: 'About',
		};

		this.toggle = this.toggle.bind(this);
	}

	updateMenuState(isOpen) {
		this.setState({ isOpen });
	}

	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen,
		});
	}

	onMenuItemSelected = item =>
		this.setState({
			isOpen: false,
			selectedItem: item,
		});

	render() {
		const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

		return (
			<SideMenu menu={menu} isOpen={this.state.isOpen} onChange={isOpen => this.updateMenuState(isOpen)}>
        		<View style={styles.container}>
					<Text style={styles.welcome}>
						Welcome to React Native!
					</Text>

					<Text style={styles.instructions}>
						Current selected menu item is: {this.state.selectedItem}
					</Text>
        		</View>

				<TouchableOpacity onPress={this.toggle} style={styles.button}>
					<Text>Open Menu</Text>
				</TouchableOpacity>
      		</SideMenu>
		);
	}
}

const styles = StyleSheet.create({
	button: {
	  position: 'absolute',
	  top: 20,
	  padding: 10,
	},
	caption: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  alignItems: 'center',
	},
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
	instructions: {
	  textAlign: 'center',
	  color: '#333333',
	  marginBottom: 5,
	},
  });
