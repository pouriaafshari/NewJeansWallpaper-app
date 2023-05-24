import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import { Button } from 'react-native-web';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MinjiWallpapers = 
[
  {id: '1', url: require('./assets/minji.png')},
  {id: '2', url: require('./assets/minji.png')},
  {id: '3', url: require('./assets/minji.png')},
  {id: '4', url: require('./assets/minji.png')},
  {id: '5', url: require('./assets/minji.png')}
]

function Menu({ navigation })
{
  return(
    <View style={styles.container}>

      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      <Pressable onPress={() => {navigation.navigate('newjeans')}} style={styles.button}>
        <Image source={require('./assets/allBG.webp')} style={styles.img}></Image>
        <Text style={styles.buttonText}>NewJeans</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('danielle')}} style={styles.button}>
        <Image source={require('./assets/danielleBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Danielle</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('hanni')}} style={styles.button}>
        <Image source={require('./assets/hanniBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Hanni</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('minji')}} style={styles.button}>
        <Image source={require('./assets/minjiBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Minji</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('hyein')}} style={styles.button}>
        <Image source={require('./assets/hyeinBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Hyein</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('haerin')}} style={styles.button}>
        <Image source={require('./assets/haerinBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Haerin</Text>
      </Pressable>
  
    </View>
  )
}

const Minji = (props) =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={props.name}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='menu'>
        <Stack.Screen name='menu' component={Menu} />
        <Stack.Screen name='newjeans' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
        <Stack.Screen name='danielle' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
        <Stack.Screen name='hanni' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
        <Stack.Screen name='minji' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
        <Stack.Screen name='hyein' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
        <Stack.Screen name='haerin' component={()=>{return(<Minji name={MinjiWallpapers}/>)}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f3fc',
    alignItems: 'center',
  },
  header: {
    padding: 10,
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#def4ff'
  },
  headerText: {
    fontSize: 30,
    color: 'white',

  },
  button: {
    flex: 0.4,
    width: '100%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    opacity: 0.6
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    opacity: 0.6,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    margin: 1,
  },
  image: {
    width: '100%',
    maxWidth: 250,
    height: 290,
    borderRadius: 5,
  },
});
