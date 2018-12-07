import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import MyStoriesScreen from '../Screens/MyStoriesScreen';
import MyStoryDetailsScreen from '../Screens/MyStoryDetailsScreen';
import ShareStoryScreen from '../Screens/ShareStoryScreen';
import BrowseStoriesScreen from '../Screens/BrowseStoriesScreen';
import BrowseStoryDetailsScreen from '../Screens/BrowseStoryDetailsScreen';
import CreateStoryScreen from '../Screens/CreateStoryScreen';
import CreatePageScreen from '../Screens/CreatePageScreen';
import ChooseBackgroundScreen from '../Screens/ChooseBackgroundScreen';
import ChooseCharacterScreen from '../Screens/ChooseCharacterScreen';
import ReadOthersStoriesScreen from '../Screens/ReadOthersStories';

const MyStoriesStack = createStackNavigator({
  MyStoriesScreen: { screen: MyStoriesScreen },
  MyStoryDetailsScreen: { screen: MyStoryDetailsScreen },
  ShareStoryScreen: { screen: ShareStoryScreen },
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

const ReadOthersStoriesStack = createStackNavigator({
  ReadOthersStoriesScreen: { screen: ReadOthersStoriesScreen },
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
},
{
  headerMode: 'none',
});



const BrowseStack = createStackNavigator({
  BrowseStoriesScreen: { screen: BrowseStoriesScreen },
  BrowseStoryDetailsScreen: { screen: BrowseStoryDetailsScreen },
  ReadOthersStoriesScreen: { screen: ReadOthersStoriesScreen },
},
{
  headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
   Me: { screen: MyStoriesStack },
   Create: { screen: CreateStoryStack },
   Browse: { screen: BrowseStack },
});

export default TabNavigator;
