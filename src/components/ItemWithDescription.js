import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;

const decreaseQtyButton = (
  <Image
    source={require('../assets/minus.png')}
    style={{width: 10, height: 10}}
  />
);

class ItemWithDescription extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.qty !== this.props.qty;
  }

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
    <Image
      source={require('../assets/plus.png')}
      style={{width: 10, height: 10}}
    />
  );

  render() {
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  iconContainer: {
    alignItems: 'center',
    padding: ScreenWidth * 2.4,
    marginRight: ScreenWidth * 3,
  },
  descContainer: {
    flex: 1,
    paddingVertical: ScreenHeight * 2.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  titleSubtitleContainer: {
    justifyContent: 'center',
    flex: 7,
  },
  titleText: {
    fontFamily: 'Rubik-Bold',
    flexWrap: 'wrap',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#060606',
  },
  subtitleText: {
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgb(142, 142, 142)',
  },
  rightActionContainer: {
    flex: 6,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: ScreenWidth * 2,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 10,
    padding: 5,
  },
  decreaseButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  quantityText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  increaseButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.8,
  },
  increaseButtonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    flexDirection: 'row-reverse',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
    width: 80,
    height: 40,
  },
  addButtonStyle: {
    fontSize: 15,
    margin: 3,
    color: '#FFA500',
  },
});

export default ItemWithDescription;
