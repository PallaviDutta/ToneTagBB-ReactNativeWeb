import React, {Component} from 'react';
import data from '../jsondata/data.json';
import {Text, StyleSheet, ScrollView} from 'react-native';
export class StoreItemsList extends Component {
  state = {
    data: data,
  };

  render() {
    const categoryList = this.state.data.data.section.map((data) => {
      return (
        <Text style={styles.itemHorizontalScrollStyle}>
          {data.category_name}
        </Text>
      );
    });

    return <ScrollView horizontal={true}>{categoryList}</ScrollView>;
  }
}
const styles = StyleSheet.create({
  itemHorizontalScrollStyle: {
    marginTop: 10,
    margin: 15,
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 5,
  },
});
export default StoreItemsList;
