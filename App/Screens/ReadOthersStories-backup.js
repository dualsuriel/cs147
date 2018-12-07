import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import NarrowStoryBanner from '../Components/NarrowStoryBanner';

export default class ReadOthersStoriesScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Story Details</Text>
      </View>
        <NarrowStoryBanner
          title={this.props.navigation.state.params.title}
          color={this.props.navigation.state.params.color}
          image={this.props.navigation.state.params.image}
          />
        <View style={styles.storyContainer}>
          <Text style={styles.storyText}>This morning we got an entire class period for reading books! </Text>
          <Image
          source={require('../Images/funday1.jpg')}
          />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>1/4</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.onFinishReading} style={styles.button}>
            <Text style={styles.buttonText}>Finish Reading</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
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
  storyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 40,
    marginLeft: 40,
    marginBottom: 20,
  },
  storyText: {
    fontSize: 20,
  },
  numberContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 20,
    color: '#626262',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#5CBD9B',
    borderRadius: 5,
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    width: 140,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
