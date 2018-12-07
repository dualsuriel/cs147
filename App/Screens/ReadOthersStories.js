import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Metrics from '../Themes/Metrics';

import NarrowStoryBanner from '../Components/NarrowStoryBanner';

export default class BrowseStoryDetailsScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.curIdx = this.props.navigation.getParam("index")
    this.currentPageIndex = this.curIdx+1
    this.state={
      title: this.props.navigation.getParam("title"),
      author: this.props.navigation.getParam("author"),
      color: this.props.navigation.getParam("color"),
      image: this.props.navigation.getParam("image"),
      index: this.props.navigation.getParam("index")+1,
      imageSets:this.props.navigation.getParam("imageSets"),
      story: this.props.navigation.getParam("story")
    }
    this.nextStory =this.nextStory.bind(this);
    this.onFinishReading = this.onFinishReading.bind(this)
    this.currentPageIndexText = this.currentPageIndex+"/4";
  };

  nextStory(){
    this.props.navigation.push("ReadOthersStoriesScreen",this.state);
  }

  onFinishReading(){
    this.props.navigation.popToTop();
  }

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
          <Text style={styles.storyText}> {this.state.story[this.curIdx]} </Text>
          <Image
          source = {this.state.imageSets[this.curIdx]}
          />

        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{this.currentPageIndexText}</Text>
        </View>
        <View style={styles.buttonRow}>
        {
            this.curIdx===3 &&
            <TouchableOpacity onPress={this.onFinishReading} style={[styles.button,{backgroundColor:this.state.color,width:280}]}>
            <Text style={styles.buttonText}>Finish Reading</Text>
            </TouchableOpacity>
          }
          {
            this.curIdx!=3 &&
            <TouchableOpacity onPress={this.onFinishReading} style={[styles.button,{backgroundColor:this.state.color}]}>
            <Text style={styles.buttonText}>Finish Reading</Text>
            </TouchableOpacity>
          }
          {
            this.curIdx!=3 &&
            <TouchableOpacity onPress={this.nextStory} style={[styles.button,{backgroundColor:this.state.color}]}>
            <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          }

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
    marginRight: 40,
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
