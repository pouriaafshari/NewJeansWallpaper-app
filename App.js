import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFetchBlob from 'rn-fetch-blob';


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

      <TouchableOpacity onPress={() => {navigation.navigate('newjeans')}} style={styles.button}>
        <Image source={require('./assets/allBG.webp')} style={styles.img}></Image>
        <Text style={styles.buttonText}>NewJeans</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('danielle')}} style={styles.button}>
        <Image source={require('./assets/danielleBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Danielle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('hanni')}} style={styles.button}>
        <Image source={require('./assets/hanniBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Hanni</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('minji')}} style={styles.button}>
        <Image source={require('./assets/minjiBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Minji</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('hyein')}} style={styles.button}>
        <Image source={require('./assets/hyeinBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Hyein</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('haerin')}} style={styles.button}>
        <Image source={require('./assets/haerinBG.jpg')} style={styles.img}></Image>
        <Text style={styles.buttonText}>Haerin</Text>
      </TouchableOpacity>
  
      <BannerAd
        unitId={"ca-app-pub-4916084825755749/7287021860"}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />

    </View>
  )
}

const Minji = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const Hyein = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const NewJeans = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const Danielle = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const Hanni = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const Haerin = ({ navigation }) =>
{
  const renderImageItem = ({ item }) => {
    const openImage = () =>
    {
      navigation.navigate('FullSizeImage', { imageUri: item.url });
    }
  
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </TouchableOpacity>
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

const FullSizeImageScreen = ({ route }) => {
  const { imageUri } = route.params;

  const handleDownload = async () => {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'jpg',
    })
      .fetch('GET', imageUri)
      .then(res => {
        CameraRoll.save(res.data, 'photo')
          .then(res => console.log(res))
          .catch(err => console.log(err))
        Alert.alert("Download success.")
      })
      .catch(error => console.log(error));
  };

  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width: 'auto', height: '100%' }} />
      <View style={styles.container2}>
        <TouchableOpacity style={styles.buttonContainer2} onPress={ handleDownload }>
          <Text style={styles.buttonText2}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />
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
  container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonContainer2: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  }
});
