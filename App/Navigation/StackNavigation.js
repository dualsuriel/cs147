import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyStoriesScreen from '../Screens/MyStoriesScreen';
import MyStoryDetailsScreen from '../Screens/MyStoryDetailsScreen';
import ShareStoryScreen from '../Screens/ShareStoryScreen';
import BrowseStoriesScreen from '../Screens/BrowseStoriesScreen';
import BrowseStoryDetailsScreen from '../Screens/BrowseStoryDetailsScreen';
import CreateStoryScreen from '../Screens/CreateStoryScreen';
import CreatePageScreen from '../Screens/CreatePageScreen';
import ChooseBackgroundScreen from '../Screens/ChooseBackgroundScreen';
import ChooseCharacterScreen from '../Screens/ChooseCharacterScreen';
import FinishedStoryScreen from '../Screens/FinishedStoryScreen';
import ViewCommentsScreen from '../Screens/ViewCommentsScreen';
import AddCommentScreen from '../Screens/AddCommentScreen';
import ReadStoryScreen from '../Screens/ReadStoryScreen';
import ReadMyStoriesScreen from '../Screens/ReadMyStoriesScreen';

const MyStoriesStack = createStackNavigator({
  MyStoriesScreen: { screen: MyStoriesScreen },
  MyStoryDetailsScreen: { screen: MyStoryDetailsScreen },
  ShareStoryScreen: { screen: ShareStoryScreen },
  ViewCommentsScreen: { screen: ViewCommentsScreen },
  ReadMyStoriesScreen: { screen: ReadMyStoriesScreen },
},
{
  headerMode: 'none',
});

const CreatePageStack = createStackNavigator({
  CreatePageScreen: { screen: CreatePageScreen },
  ChooseBackgroundScreen: { screen: ChooseBackgroundScreen },
  ChooseCharacterScreen: { screen: ChooseCharacterScreen },
},
{
  mode: 'modal',
  headerMode: 'none',
});

const ReadMyStoriesStack = createStackNavigator({
  ReadMyStoriesScreen: { screen: ReadMyStoriesScreen },
  ChooseBackgroundScreen: { screen: ChooseBackgroundScreen },
  ChooseCharacterScreen: { screen: ChooseCharacterScreen },
},
{
  mode: 'modal',
  headerMode: 'none',
});

const CreateStoryStack = createStackNavigator({
  CreateStoryScreen: { screen: CreateStoryScreen },
  CreatePageScreen: { screen: CreatePageStack },
  FinishedStoryScreen: { screen: FinishedStoryScreen },
  ShareStoryScreen: { screen: ShareStoryScreen },
},
{
  headerMode: 'none',
});


const BrowseStack = createStackNavigator({
  BrowseStoriesScreen: { screen: BrowseStoriesScreen },
  BrowseStoryDetailsScreen: { screen: BrowseStoryDetailsScreen },
  AddCommentScreen: { screen: AddCommentScreen },
  ReadStoryScreen: { screen: ReadStoryScreen },
},
{
  headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
   Me: { screen: MyStoriesStack },
   Create: { screen: CreateStoryStack },
   Browse: { screen: BrowseStack },
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: (tintColor) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Me') {
          iconName = 'ios-contact';
        } else if (routeName === 'Create') {
          iconName = 'ios-add-circle';
        } else if (routeName === 'Browse') {
          iconName = 'ios-book';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={35} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  });

export default TabNavigator;
