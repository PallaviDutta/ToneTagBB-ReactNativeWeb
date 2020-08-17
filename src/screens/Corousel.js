import * as React from 'react';
import data from '../jsondata/data.json';
import {
  View,
  ImageBackground,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Card} from '../components/Card';
import {Title} from '../components/Title';

const ScreenWidth = Dimensions.get('window').width / 100;
const ScreenHeight = Dimensions.get('window').height / 100;

class Corousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: data,
    };
  }

  keyExtractor = (item, index) => index.toString();
  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            data: item.category_name,
          });
        }}>
        <View>
          <ImageBackground
            source={{uri: item.image_url}}
            style={styles.imageBackgroundStyle}></ImageBackground>
          <View style={styles.titleView}>
            <Title style={styles.titleStyle}>{item.category_name}</Title>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={this.state.data1.data.section}
          renderItem={this.renderCarousel}
        />
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
  },
  cardContainerStyle: {
    borderRadius: 8,
    overflow: 'hidden',
    //elevation: 7,
    margin: ScreenHeight * 2,
    width: 220,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  titleStyle: {
    color: 'black',
    fontSize: ScreenHeight * 2,
    marginVertical: 10,
  },
};
export default Corousel;
