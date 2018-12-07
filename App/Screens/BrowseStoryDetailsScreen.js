import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';
import InfoSquare from '../Components/InfoSquare';

export default class BrowseStoryDetailsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Story Details</Text>
      </View>
        <StoryBanner
          title={this.props.navigation.state.params.title}
          color={this.props.navigation.state.params.color}
          image={this.props.navigation.state.params.image}
          />
        <View style={styles.infoContainer}>
          <InfoSquare
            title={this.props.navigation.state.params.pages}
            subtitle='pages'
            color={this.props.navigation.state.params.color}/>
          <InfoSquare
            title={this.props.navigation.state.params.date}
            subtitle='created'
            color={this.props.navigation.state.params.color}/>
        </View>
        <View style={styles.infoContainer}>
          <InfoSquare
            title={this.props.navigation.state.params.grade}
            subtitle='grade'
            color={this.props.navigation.state.params.color}/>
          <InfoSquare
            title={this.props.navigation.state.params.author}
            subtitle='author'
            color={this.props.navigation.state.params.color}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ReadOthersStoriesScreen",this.props.navigation.state.params)} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>Read Story</Text>
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
    marginLeft: 20
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
    backgroundColor: '#5CBD9B',
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
