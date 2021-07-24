import * as React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image ,
    Dimensions 
     } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

export default function App() {
  const draggableItemList = [
    {
      
      "name": 6,
      "background_color": "red"
    },
    {
      "name": 4,
      "background_color": "pink"
    },
    {
      "name": 9,
      "background_color": "orange"

    },
    {
      "name": 7,
      "background_color": "#aaaaff"
    },
    {
      "name": 1,
      "background_color": "blue"
    },
    {
      "name": 3,
      "background_color": "green"
    },
    {
      "name": 4,
      "background_color": "brown"

    },
    {
      "name": 2,
      "background_color": "#aaaaff"
    },

  ];
  const FirstReceivingItemList = [
    {
      "name": "X",
      "background_color": '#FA8072'
    },
    {
      "name": "X",
      "background_color": 'purple'
    },
    {
      "name": "X",
      "background_color": 'yellow'
    },
    {
      "name": "X",
      "background_color": '#AFEEEE'
    }
  ];

  const [receivingItemList, setReceivedItemList] = React.useState(FirstReceivingItemList);
  const [dragItemMiddleList, setDragItemListMiddle] = React.useState(draggableItemList);

  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.draggableBox, { backgroundColor: item.background_color }]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
      </DraxView>
    );
  }

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }

  return (
    <GestureHandlerRootView
      style={gestureRootViewStyle}>
        
      <View>
        <Text style={styles.headerStyle}>Fun with Trains</Text>
      </View>
      <View style={styles.imgContainer}>
      <Image source={require('../assets/fib.jpg')} 
      style={styles.trainImg} />
</View>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.receivingContainer}>
            {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))}
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={dragItemMiddleList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={true}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: (Dimensions.get('window').width / 4) - 30,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 4) - 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -80,
    bottom:76,
    left:19.5
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  draggableBox: {
    width: (Dimensions.get('window').width / 4) - 28,
    borderRadius: 10,
    height: (Dimensions.get('window').width / 4) - 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
   // bottom:20,
   //top:-210,
   left:70,
   //marginBottom:20
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    padding: 5,
    height: 200
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100
  },
  textStyle: {
    fontSize: 18
  },
  headerStyle: {
    marginTop: 70,
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 85
  },
  trainImg:{
    resizeMode: "contain",
    width:380,
    height:350,
    marginTop:50,
    marginLeft:-15
},
imgContainer:{
  flex:0.05
}

});