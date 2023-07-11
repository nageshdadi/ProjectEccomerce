import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {
  homeCorroselData,
  newArrivelName,
  seeAllName,
  dolorSign,
} from './TopHomeConfig';
import TopHomeController from './TopHomeController';
import {btnBackgroundClr} from '../../config/Config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export class TopHome extends TopHomeController {
  render() {
    const {indexImage, productsData} = this.state;
    const activedot1 = indexImage === 0 ? btnBackgroundClr : '#d8dce3';
    const activedot2 = indexImage === 1 ? btnBackgroundClr : '#d8dce3';
    const activedot3 = indexImage === 2 ? btnBackgroundClr : '#d8dce3';
    return (
      <View style={styles.topHomeContainer}>
        <View style={styles.corrosleCrad}>
          <View>
            <ImageBackground
              source={{uri: `${homeCorroselData[indexImage].image}`}}
              resizeMode="cover"
              style={styles.corrosleimgCard}
              imageStyle={styles.imageCorrosle}>
              <Text style={styles.corrosleTitleText}>
                {homeCorroselData[indexImage].title}
              </Text>
              <Text style={styles.descriptionText}>
                {homeCorroselData[indexImage].lable}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.dotsCard}>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot1}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot2}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot3}`}}>
                .
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.seeAllCard}>
          <View style={styles.fireCard}>
            <Text style={styles.newArrifalText}>{newArrivelName}</Text>
            <MaterialCommunityIcons name="fire" size={25} color="#ed570c" />
          </View>
          <Text style={styles.seeAllText}>{seeAllName}</Text>
        </View>
        <View style={styles.flatListCard}>
          <FlatList
            data={productsData}
            numColumns={2}
            renderItem={({item}: {item: any}) => (
              <View style={styles.itemCrad}>
                <Image
                  style={styles.itemImage}
                  resizeMode="contain"
                  source={{uri: `${item.thumbnail}`}}
                />
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Text style={styles.itemPriceText}>
                  {dolorSign}
                  {item.price}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topHomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageCorrosle: {
    height: 150,
    width: '100%',
    borderRadius: 15,
  },
  corrosleimgCard: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  corrosleCrad: {
    marginBottom: 10,
    marginTop: 30,
  },
  corrosleTitleText: {
    fontSize: 20,
    color: '#0b111f',
    marginBottom: 10,
    fontWeight: '500',
    width: 250,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#b6ba',
    fontSize: 15,
  },
  dotsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsText: {
    fontSize: 50,
  },
  seeAllCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  newArrifalText: {
    fontSize: 23,
    color: '#0b111f',
    fontWeight: '600',
    marginRight: 10,
  },
  seeAllText: {
    fontSize: 16,
    color: '#6a79c4',
  },
  fireCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListCard: {
    paddingBottom: 250,
  },
  itemCrad: {
    backgroundColor: '#fff',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    height: 180,
    width: 160,
    marginBottom: 10,
    borderRadius: 15,
  },
  itemTitleText: {
    fontSize: 20,
    maxWidth: 140,
    color: '#0b111f',
    textAlign: 'center',
    fontWeight: '500',
  },
  itemPriceText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
});
export default TopHome;
