import React, {Component} from 'react';
import data from '../../data.json';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SectionList,
  Image,
  ScrollView,
} from 'react-native';
export class StoreItemsList extends Component {
  render() {
    //console.log('render');
    return (
      <View
        style={{
          backgroundColor: '#F5F5F5',
        }}>
        <ScrollView horizontal={true}>
          <Text style={styles.itemHorizontalScrollStyle}>Food Grain</Text>
          <Text style={styles.itemHorizontalScrollStyle}>Pulses</Text>
          <Text style={styles.itemHorizontalScrollStyle}>Flours</Text>
          <Text style={styles.itemHorizontalScrollStyle}>Edible Oil</Text>
          <Text style={styles.itemHorizontalScrollStyle}>Spices</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemHorizontalScrollStyle: {
    marginTop: 10,
    margin: 15,
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
  },
});
export default StoreItemsList;
