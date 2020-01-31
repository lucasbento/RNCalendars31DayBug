import React from 'react';
import {SafeAreaView} from 'react-native';
import {CalendarList} from 'react-native-calendars';

const App = () => {
  return (
    <SafeAreaView>
      <CalendarList
        horizontal={true}
        scrollEnabled={false}
        hideArrows={false}
      />
    </SafeAreaView>
  );
};

export default App;
