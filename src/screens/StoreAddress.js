import React, {Component} from 'react';
import data from '../jsondata/data.json';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;
export class StoreAddress extends Component {
  state = {
    data: data,
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          activeOpacity={0.6}>
          <View>
            <Image
              style={styles.iconSize}
              source={require('../assets/back.png')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer} style={{marginLeft: 15}}>
          <Text style={styles.headerTitleText}>
            {this.state.data.data.store_details.name}
          </Text>
          <Text style={styles.headerSubTitleText}>
            {this.state.data.data.store_details.address}
          </Text>
        </View>

        <View style={styles.iconConatinerSizeEnd}>
          <Image
            style={styles.iconSize}
            source={require('../assets/search.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: ScreenHeight * 2.5,
    flex: 1,
  },
  backButtonContainer: {
    marginLeft: ScreenWidth * 4.5,
  },
  headerTitleContainer: {
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
    flex: 1,
    alignItems: 'flex-end',
    marginRight: ScreenWidth * 7,
  },
  iconConatinerSizeEnd: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
  },
  iconSize: {
    width: 25,
    height: 25,
  },
});

export default StoreAddress;
