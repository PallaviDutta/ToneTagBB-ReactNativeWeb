import React, {Component} from 'react';
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

import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ItemWithDescription from '../components/ItemWithDescription';

import productImage from '../assets/fortuneRice.png';
import productImage1 from '../assets/kohinoorRice.png';

const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;

export class BuyingScreen extends Component {
  state = {
    totalQuantity: 0,
    products: [
      {
        category: 'Food Grain',
        data: [
          {
            key: '1',
            title: 'Fortune Everyday Basmati Rice Full Grain - 1Kg',
            subtitle: '₹ 149.00',
            qty: 1,
            icon: <Image source={productImage}></Image>,
          },
          {
            key: '2',
            title: 'Fortune Everyday Basmati Rice Full Grain - 5Kg',
            subtitle: '₹ 449.00',
            qty: 1,
            icon: <Image source={productImage}></Image>,
          },
          {
            key: '3',
            title: 'Kohinoor Royale Authentic Biryani Basmati Rice - 0.5Kg',
            subtitle: '₹ 79.00',
            qty: 1,
            icon: <Image source={productImage1}></Image>,
          },
          {
            key: '4',
            title: 'Kohinoor Royale Authentic Biryani Basmati Rice - 5Kg',
            subtitle: '₹ 550.00',
            qty: 1,
            icon: <Image source={productImage1}></Image>,
          },
        ],
      },
      {
        category: 'Edibles',
        data: [
          {
            key: '1',
            title: 'Fortune Everyday Basmati Rice Full Grain - 1Kg',
            subtitle: '₹ 449.00',
            qty: 0,
            icon: <Image source={productImage}></Image>,
          },
          {
            key: '2',
            title: 'Fortune Everyday Basmati Rice Full Grain - 1Kg',
            subtitle: '₹ 449.00',
            qty: 0,
            icon: <Image source={productImage}></Image>,
          },
          {
            key: '3',
            title: 'Fortune Everyday Basmati Rice Full Grain - 1Kg',
            subtitle: '₹ 449.00',
            qty: 0,
            icon: <Image source={productImage}></Image>,
          },
        ],
      },
    ],
  };

  handleIncreaseButton = (category, index) => {
    let products = [...this.state.products];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category == category) {
        products[i].data[index].qty += 1;
      }
    }
    let totalQuantity = this.state.totalQuantity;
    this.setState(
      {...this.state, products, totalQuantity: totalQuantity + 1},
      () => {
        // console.log(this.state.products);
      },
    );
  };
  handleDecreaseButton = (category, index) => {
    let products = [...this.state.products];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category == category) {
        if (products[i].data[index].qty > 0) {
          products[i].data[index].qty -= 1;
        }
      }
    }
    let totalQuantity = this.state.totalQuantity;
    this.setState(
      {...this.state, products, totalQuantity: totalQuantity - 1},
      () => {
        // console.log(this.state.products);
      },
    );
  };

  handleBackButton = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    let totalQuantity = 0;
    for (let i = 0; i < this.state.products.length; i++) {
      for (let j = 0; j < this.state.products[i].data.length; j++) {
        totalQuantity += this.state.products[i].data[j].qty;
      }
    }
    this.setState({totalQuantity});
  }

  render() {
    console.log('render');
    return (
      <View style={styles.screen}>
        <View style={styles.contentContainer}>
          <View style={styles.productListContainer}>
            <SectionList
              sections={this.state.products}
              keyExtractor={(item, index) => {
                // console.log('item and index for key', item, index);
                return item.title + index;
              }}
              renderItem={(item) => {
                // console.log(item);
                return (
                  <ItemWithDescription
                    title={item.item.title}
                    subtitle={item.item.subtitle}
                    icon={item.item.icon}
                    qty={item.item.qty}
                    itemCategory={item.section.category}
                    itemIndex={item.index}
                    increaseItemQuantity={this.handleIncreaseButton}
                    decreaseItemQuantity={this.handleDecreaseButton}
                  />
                );
              }}
              renderSectionHeader={({section: {category}}) => (
                <View style={styles.productCategoryContainer}>
                  <Text style={styles.productCategoryText}>{category}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: ScreenWidth * 5,
  },

  productCategoryContainer: {
    marginLeft: ScreenWidth * 2.4,
    marginTop: ScreenHeight * 3,
    marginBottom: ScreenHeight,
  },
  productCategoryText: {
    fontFamily: 'Rubik-Medium',
    fontSize: ScreenHeight * 2,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  checkoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  checkoutButtonContainer: {
    borderWidth: 1,
    // borderColor: 'white',
    flexDirection: 'row',
    marginBottom: ScreenHeight * 4,
    width: ScreenWidth * 90,
    padding: ScreenWidth * 2,
    borderRadius: ScreenWidth * 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
    elevation: 6,
  },
  buttonTextContainer: {
    padding: ScreenWidth * 2,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  checkoutButtonText: {
    fontFamily: 'Rubik',
    fontSize: ScreenWidth * 4,
    letterSpacing: 1.25,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  checkoutCountContainer: {
    flexDirection: 'row',
    width: ScreenWidth * 10,
    height: ScreenWidth * 10,
    borderRadius: ScreenWidth * 5,
    backgroundColor: '#FFFFFF',
  },

  checkoutCountText: {
    width: '100%',
    height: '100%',
    fontFamily: 'Rubik-Medium',
    fontSize: ScreenWidth * 3,
    letterSpacing: 1.05,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000000',
  },
  logo: {
    height: 80,
  },
  itemHorizontalScrollStyle: {
    marginTop: 10,
    margin: 15,
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
  },
});

export default BuyingScreen;
