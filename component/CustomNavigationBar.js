import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

function CustomNavigationBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      
      {/* Settings icon always visible */}
      <Appbar.Action 
        icon="cog" 
        onPress={() => navigation.navigate('Settings')} 
      />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
