import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookMarkScreen from './screens/BookMarkScreen';

import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';


const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
   const [userToken, setUserToken] = React.useState(null);

   const authContext = React.useMemo(() => ({
      signIn: () => {
        setUserToken('fgkj');
        setIsLoading(false);
      }, 
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      signUp: () => {
        setUserToken('fgkj');
        setIsLoading(false);
      },
    }));

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  }, []);

  if(isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken !== null  ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingScreen" component={SettingScreen} />
              <Drawer.Screen name="BookMarkScreen" component={BookMarkScreen} />
          </Drawer.Navigator>
        ):
         <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;