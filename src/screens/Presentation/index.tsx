import { useState } from "react";
import { View, Image, ImageResizeMode } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TapHandler } from 'components/TapHandler'
import { styles } from "./styles";

const uri = 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

export function Presentation() {
  const [liked, setLiked] = useState(false);
  const [resizeMode, setResizeMode] = useState<ImageResizeMode>("contain")
  const heartIcon = liked ? 'heart' : 'hearto';

  function toggleResizeMode() {
    setResizeMode(state => state === 'contain' ? 'cover' : 'contain');
  }

  function toggleLiked() {
    setLiked(state => !state);
  }

  return (
    <View style={styles.container}>
      <TapHandler onSingleTap={toggleResizeMode} onDoubleTap={toggleLiked} style={styles.tapHandlerContainer}>
        <Image
          resizeMode={resizeMode}
          source={{ uri }}
          style={styles.image}
        />
      </TapHandler>

      <View style={styles.containerIcons}>
        <AntDesign name={heartIcon} onPress={toggleLiked} style={[styles.icon, liked && styles.iconActive]} />
        <AntDesign name="message1" style={styles.icon} />
        <AntDesign name="sharealt" style={styles.icon} />
      </View>
    </View>
  );
}
