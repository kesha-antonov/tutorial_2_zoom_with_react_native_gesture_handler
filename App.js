import React from 'react'
import {
  Image,
  useWindowDimensions,
  StyleSheet,
  View,
  SafeAreaView,
  Animated,
} from 'react-native'
import Zoom from './app/Zoom'

function App () {
  const { width: deviceWidth } = useWindowDimensions()

  function renderImage ({ scale, translateX, translateY }) {
    return (
      <Animated.Image
        source={require('./app/images/iceland.jpeg')}
        style={[
          { width: deviceWidth, height: 500 },
          {
            transform: [
              { scale },
              { translateX },
              { translateY },
            ]
          }
        ]}
      />
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Zoom
        renderImage={renderImage}
        imageWidth={deviceWidth}
        imageHeight={500}
        inFlatList={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})

export default App
