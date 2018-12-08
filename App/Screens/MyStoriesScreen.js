import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Images from '../Themes/Images';

import StoryHeader from '../Components/StoryHeader';
import StoryCard from '../Components/StoryCard';


export default class MyStoriesScreen extends React.Component {

  state = {
    stories: [
      {
        title: 'Dream Big',
        image: Images.school1,
        color: '#5CBD9B',
        id: 0,
        pages:4,
        grade:'7th',
        date:"Oct 12th",
        index: 0,
        imageSets: [Images.me1,Images.me2,Images.me3,Images.me4],
        story: ['Today in class, we had a discussion about what career we would like to choose in future.','I have always been very interested in the universe, including but limited to planets, star, sun and black hole.','Maybe I could become an astronaut? I do not know, but I will make my best effort.','Dream big!']
      },
      {
        title: 'Writing Partner',
        image: Images.desk,
        color: '#0984E3',
        id: 1,
        pages:4,
        grade:'8th',
        date:"Oct 10th",
        index: 0,
        imageSets: [Images.kate1,Images.kate2,Images.kate3,Images.kate4],
        story: ['I probably need a partner for my writing class.','I was too impatient to proofread my last assignment','Working with a partner would be much more fun.','Writing is supposed be fun rather than painful.']
      },
      {
        title: 'Fly to the Moon',
        image: Images.city,
        color: '#FF5252',
        id: 1,
        pages:4,
        grade:'8th',
        date:"Oct 10th",
        index: 0,
        imageSets: [Images.mary1,Images.mary2,Images.mary3,Images.mary4],
        story: ['So overwhelmed this week...','I almost skipped my workout routine because I was too sleepy.','My cat is all I have now since mom and dad will not be at home recently','I felt lonely sometimes, but can take care of myself.']
      },
      {
        title: 'Rockstar Painter',
        image: Images.desk,
        color: '#A29BFE',
        id: 1,
        pages:4,
        grade:'8th',
        date:"Oct 12th",
        index: 0,
        imageSets: [Images.dante1,Images.dante2,Images.dante3,Images.dante4],
        story: ['This morning we got an entire class period for reading books!','story2','story3','story4']
      },
    ]
  }

  onStoryPress(story) {
    this.props.navigation.navigate("MyStoryDetailsScreen", story);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Stories</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>Sad</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.stories}
            numColumns={2}
            renderItem={({item}) =>
              <View style={styles.storyView}>
                <StoryCard
                  title={item.title}
                  image={item.image}
                  color={item.color}
                  onStoryPress={this.onStoryPress.bind(this,item)}
                  />
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  button: {
    marginRight: 20,
  },
  buttonText: {
    color: '#C0C0C0',
    fontSize: 18,
    fontWeight: '500',
  },
  storyView: {
    margin: 10,
  }
});
