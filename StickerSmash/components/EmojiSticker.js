import { View, Image } from "react-native";
import Animated, { useAnimatedStyle, userSharedValue, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture,GestureDetector } from "react-native-gesture-handler";


const EmojiSticker = ({ imageSize, stickerSource}) => {

    const scaleImage = useSharedValue(imageSize)

    const doubleTap = Gesture.Tap().numberOfTaps(2)
    .onStart(()=>{
        if(scaleImage.value !== imageSize *2){
            scaleImage.value = scaleImage.value *2
        }
    })


    return( 
        <View style={{top: -350}}>
            <Animated.Image 
                source={stickerSource}
                resizeMode = "contain"
                style={{width: imageSize, height: imageSize}}
            />
        </View>
    )
}

export default EmojiSticker