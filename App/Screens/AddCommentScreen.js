import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';

export default class MyStoryDetailsScreen extends React.Component {

    displayPopup() {
    Alert.alert(
      'Comment shared!',
      'Thank you for your support.',
      [
        {text: 'Great!', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>You Finished!</Text>
          <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
            <Text style={styles.exitButton}>X</Text>
          </TouchableOpacity>
        </View>
        <StoryBanner
          title={this.props.navigation.state.params.title}
          color={this.props.navigation.state.params.color}
          image={this.props.navigation.state.params.image}
          />
        <View style={styles.infoContainer}>
        <Text style={styles.subheaderText}>What do you want to say to {this.props.navigation.state.params.author}?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.displayPopup} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>Your story inspired me!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.displayPopup} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>{"I'm going through something similar."}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.displayPopup} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>I believe in you!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.displayPopup} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>{"I'm happy you had such a great day!"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exitButton: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    borderRadius: 5,
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
