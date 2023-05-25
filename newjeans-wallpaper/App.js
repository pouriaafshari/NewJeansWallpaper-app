import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from 'react-native-web';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Newjeansurl = 'https://pouriaafshari.github.io/NewJeans-image/newjeans.json';
let newjeansWallpaper = [];

async function GetNewjeans()
{
    const Response = await fetch(Newjeansurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          newjeansWallpaper[i] = dataBlock;
        }
    }
}
GetNewjeans();

const Danielleurl = 'https://pouriaafshari.github.io/NewJeans-image/danielle.json';
let danielleWallpaper = [];

async function GetDanielle()
{
    const Response = await fetch(Danielleurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          danielleWallpaper[i] = dataBlock;
        }
    }
}
GetDanielle();

const Minjiurl = 'https://pouriaafshari.github.io/NewJeans-image/minji.json';
let minjiWallpaper = [];

async function GetMinji()
{
    const Response = await fetch(Minjiurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          minjiWallpaper[i] = dataBlock;
        }
    }
}
GetMinji();

const Hanniurl = 'https://pouriaafshari.github.io/NewJeans-image/hanni.json';
let hanniWallpaper = [];

async function GetHanni()
{
    const Response = await fetch(Hanniurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          hanniWallpaper[i] = dataBlock;
        }
    }
}
GetHanni();

const Hyeinurl = 'https://pouriaafshari.github.io/NewJeans-image/hyein.json';
let hyeinWallpaper = [];

async function GetHyein()
{
    const Response = await fetch(Hyeinurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          hyeinWallpaper[i] = dataBlock;
        } 
    }
}
GetHyein();

const Haerinurl = 'https://pouriaafshari.github.io/NewJeans-image/haerin.json';
let haerinWallpaper = [];

async function GetHaerin()
{
    const Response = await fetch(Haerinurl);
    const Data = await Response.json();

    if (Response.ok)
    {
        for (let i = 0; i < Data.length; i++) 
        {
          let dataBlock = {id: Data[i].id, url: Data[i].url};
          haerinWallpaper[i] = dataBlock;
        } 
    }
}
GetHaerin();

const Stack = createNativeStackNavigator();

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

const Minji = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={minjiWallpaper}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Hyein = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={hyeinWallpaper}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const NewJeans = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={newjeansWallpaper}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Danielle = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={danielleWallpaper}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Hanni = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={hanniWallpaper}
        numColumns={3}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Haerin = () =>
{
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image src={item.url} style={styles.image} />
      </View>
    );
  };

  return(
    <View>
      <FlatList
        data={haerinWallpaper}
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
        <Stack.Screen name='menu' component={ Menu } />
        <Stack.Screen name='newjeans' component={ NewJeans } />
        <Stack.Screen name='danielle' component={ Danielle } />
        <Stack.Screen name='hanni' component={ Hanni } />
        <Stack.Screen name='minji' component={ Minji } />
        <Stack.Screen name='hyein' component={ Hyein } />
        <Stack.Screen name='haerin' component={ Haerin } />
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
