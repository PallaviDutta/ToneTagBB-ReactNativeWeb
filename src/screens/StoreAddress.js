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
const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export class StoreAddress extends Component {
  state = {
    data: data,
  };
  render() {
    // console.log('render', this.state.data.data.store_details.name);
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          activeOpacity={0.6}
          //onPress={this.handleBackButton}
        >
          <MaterialIcon
            name="arrow-back"
            size={ScreenHeight * 4}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>
            {this.state.data.data.store_details.name}
          </Text>
          <Text style={styles.headerSubTitleText}>
            {this.state.data.data.store_details.address}
          </Text>
        </View>
        <TouchableOpacity style={styles.filterContainer} activeOpacity={0.8}>
          <MaterialIcon name="search" size={ScreenHeight * 4} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: ScreenHeight * 2.5,
    //marginBottom: ScreenHeight * 0.8,
  },
  backButtonContainer: {
    // borderWidth: 1,
    marginLeft: ScreenWidth * 4.5,
  },
  headerTitleContainer: {
    // borderWidth: 1,
    marginLeft: ScreenWidth * 3,
  },
  headerTitleText: {
    fontFamily: 'Rubik-Medium',
    fontSize: ScreenHeight * 2.5,
    letterSpacing: 0.25,
    textAlign: 'left',
    color: '#060606',
  },
  headerSubTitleText: {
    fontFamily: 'Rubik-Medium',
    fontSize: ScreenHeight * 2,
    letterSpacing: 0.25,
    textAlign: 'left',
    color: '#060606',
  },
  filterContainer: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'flex-end',
    marginRight: ScreenWidth * 7,
  },
});

export default StoreAddress;
