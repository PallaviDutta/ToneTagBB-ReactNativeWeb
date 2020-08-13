import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;

const decreaseQtyButton = (
  <MaterialCommunityIcon name="minus" size={ScreenWidth * 4} color="#FFA500" />
);

class ItemWithDescription extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.title === this.props.title);
    // console.log(nextProps.subtitle === this.props.subtitle);
    // console.log(nextProps.icon === this.props.icon);
    // console.log(nextProps.qty === this.props.qty);
    // console.log(nextProps.itemCategory === this.props.itemCategory);
    // console.log(nextProps.itemIndex === this.props.itemIndex);
    // console.log(
    //   nextProps.increaseItemQuantity === this.props.increaseItemQuantity,
    // );
    // console.log(
    //   nextProps.decreaseItemQuantity === this.props.decreaseItemQuantity,
    // );
    // console.log('---------------------------------');
    return nextProps.qty !== this.props.qty;
  }
  //const {itemStyle, iconStyle, icon} = this.props;

  handleIncreaseButton = () => {
    this.props.increaseItemQuantity(
      this.props.itemCategory,
      this.props.itemIndex,
    );
  };
  handleDecreaseButton = () => {
    this.props.decreaseItemQuantity(
      this.props.itemCategory,
      this.props.itemIndex,
    );
  };

  increaseQtyButton = (
    <MaterialCommunityIcon
      name="plus"
      size={ScreenWidth * 4}
      color={this.props.qty ? '#FFA500' : '#757575'}
    />
  );

  render() {
    // console.log('ItemWithDescription: ', this.props);
    return (
      <View
        style={
          this.props.itemStyle
            ? {...styles.itemContainer, ...this.props.itemStyle}
            : styles.itemContainer
        }>
        {this.props.icon ? (
          <View
            style={
              this.props.iconStyle ? this.props.iconStyle : styles.iconContainer
            }>
            {this.props.icon}
          </View>
        ) : null}

        <View
          style={
            this.props.descContainerStyle
              ? {...styles.descContainer, ...this.props.descContainerStyle}
              : styles.descContainer
          }>
          {this.props.title ? (
            <View style={styles.titleSubtitleContainer}>
              <Text
                style={
                  this.props.titleTextStyle
                    ? {...styles.titleText, ...this.props.titleTextStyle}
                    : styles.titleText
                }>
                {this.props.title}
              </Text>

              {this.props.subtitle ? (
                <Text
                  style={
                    this.props.subtitleTextStyle
                      ? {
                          ...styles.subtitleText,
                          ...this.props.subtitleTextStyle,
                        }
                      : styles.subtitleText
                  }>
                  {this.props.subtitle}
                </Text>
              ) : null}
            </View>
          ) : null}
          {this.props.hasOwnProperty('qty') ? (
            <View style={styles.rightActionContainer}>
              {this.props.qty === 0 ? (
                <View style={styles.increaseButtonContainer1}>
                  <Text style={styles.addButtonStyle}>Add</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.handleIncreaseButton}>
                    {this.increaseQtyButton}
                  </TouchableOpacity>
                </View>
              ) : null}
              {this.props.qty ? (
                <View style={styles.buttonContainer}>
                  <View style={styles.increaseButtonContainer}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={this.handleIncreaseButton}>
                      {this.increaseQtyButton}
                    </TouchableOpacity>
                  </View>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantityText}>{this.props.qty}</Text>
                  </View>

                  <View style={styles.decreaseButtonContainer}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={this.handleDecreaseButton}>
                      {decreaseQtyButton}
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  iconContainer: {
    // borderWidth: 1,
    alignItems: 'center',
    padding: ScreenWidth * 2.4,
    marginRight: ScreenWidth * 3,
  },
  descContainer: {
    // borderWidth: 1,
    flex: 1,
    paddingVertical: ScreenHeight * 2.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  titleSubtitleContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    flex: 7,
  },
  titleText: {
    fontFamily: 'Rubik-Bold',
    flexWrap: 'wrap',
    fontSize: ScreenHeight * 2,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#060606',
  },
  subtitleText: {
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    fontSize: ScreenHeight * 1.8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgb(142, 142, 142)',
  },
  rightActionContainer: {
    // borderWidth: 1,
    flex: 6,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: ScreenWidth * 2,
  },
  buttonContainer: {
    // borderWidth: 1,
    // flex: 1,
    // justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    borderRadius: ScreenWidth * 1.8,
    padding: ScreenWidth * 1.8,
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  decreaseButtonContainer: {
    // borderWidth: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
  },
  quantityContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
  },
  quantityText: {
    fontFamily: 'Rubik-Medium',
    fontSize: ScreenWidth * 4,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  increaseButtonContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
  },
  increaseButtonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
    flexDirection: 'row-reverse',
    borderRadius: ScreenWidth * 1.8,
    padding: ScreenWidth * 2,
    borderWidth: 1,
    borderColor: '#FFA500',
    width: '78%',
    height: '38%',
  },
  addButtonStyle: {
    fontSize: ScreenHeight * 1.8,
    margin: 3,
    color: '#FFA500',
  },
});

export default ItemWithDescription;
