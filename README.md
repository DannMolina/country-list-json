List of countries in json format that includes country dial code, country abbreviation and flag.

## Get Started
- npm install country-list-json
- import countries 

## Usage
**Get country name**
- countries.name

**Get dial code**
- countries.dial_code

**Get country code**
- countries.code

**Get country flag**
- countries.flag

## Data Example
```json
{ 
      name: "Russia",
      dial_code: "+7", 
      code: "RU", 
      flag: "🇷🇺" 
} 
```

## Implementation Example
```javascript
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {countries} from 'country-list-json';

const App = () => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.name} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={item => item.code}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lavender',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

