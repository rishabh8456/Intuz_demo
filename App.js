/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions
} from 'react-native';

const BannerWidth = Dimensions.get('window').width
const BannerHeight = Dimensions.get('window').height

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataArray: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },
        { id: 9, name: 'Product 9' },
        { id: 10, name: 'Product 10' },
        { id: 11, name: 'Product 11' },
        { id: 12, name: 'Product 12' },
        { id: 13, name: 'Product 13' },
        { id: 14, name: 'Product 14' },
        { id: 15, name: 'Product 15' },
        { id: 16, name: 'Product 16' },
        { id: 17, name: 'Product 17' },
        { id: 18, name: 'Product 18' },
        { id: 19, name: 'Product 19' },
        { id: 20, name: 'Product 20' },
      ],
      page1: true,
      page2: false,
      flatListData: []
    }
  }

  componentDidMount() {
    this.changeIndex()
  }

  changeIndex() {
    let tempData = []
    this.setState({
      flatListData: []
    }, () => {
      if (this.state.page1) {
        for (let index = 0; index < 10; index++) {
          tempData.push(this.state.dataArray[index])
        }
        this.setState({ flatListData: tempData })
      } else {
        for (let index = 10; index < 20; index++) {
          tempData.push(this.state.dataArray[index])
        }
        this.setState({ flatListData: tempData })
      }
    })
  }

  renderPage(item, index) {
    return (
      <View style={styles.flatlistView} >
        <Text>{item.name}</Text>
      </View>
    )
  }

  pageSelection(pageNo) {
    if (pageNo == 1) {
      this.setState({ page1: true, page2: false }, () => this.changeIndex())
    } else {
      this.setState({ page1: false, page2: true }, () => this.changeIndex())
    }
  }

  render() {
    const { flatListData } = this.state
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.flatListContainer} >
          <FlatList
            ref={ref => this.flatList = ref}
            numColumns={4}
            bounces={false}
            data={flatListData}
            extraData={this.state}
            renderItem={({ item, index }) => this.renderPage(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.paginationView} >
          <TouchableOpacity onPress={() => this.pageSelection(1)} style={[styles.pageNumberView, { backgroundColor: (this.state.page1) ? 'black' : 'white' }]} >
            <Text style={{ color: (!this.state.page1) ? 'black' : 'white' }} >1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pageSelection(2)} style={[styles.pageNumberView, { marginLeft: 10, backgroundColor: (this.state.page2) ? 'black' : 'white' }]} >
            <Text style={{ color: (!this.state.page2) ? 'black' : 'white' }}>2</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatListContainer: {
    marginTop: 10,
    marginHorizontal: 10
  },
  flatlistView: {
    height: BannerHeight * 0.1,
    width: (BannerWidth / 4) - 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    flex: 1
  },
  pageNumberView: {
    height: 30,
    width: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


