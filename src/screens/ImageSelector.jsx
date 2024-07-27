import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colores } from '../global/colors';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../features/UserSlice';
import { usePostProfileImageMutation, useGetProfileimageQuery } from '../services/testServices';

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [isImageFromCamera, setIsImageFromCamera] = useState(false);

    const dispatch = useDispatch();
    const [triggerPostImage, result] = usePostProfileImageMutation();
    const { localId } = useSelector((state) => state.auth.value);
    const { data: imageFromBase } = useGetProfileimageQuery(localId);

    const verifyCameraPermission = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
          alert('Permission to access camera is required!');
      }
      return status === 'granted';
  };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermission();
        setIsImageFromCamera(true);
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.2,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
      try {
          dispatch(setCameraImage(image));
          const result = await triggerPostImage({ image, localId }).unwrap();
          console.log('Image posted successfully:', result);
          if (isImageFromCamera) {
              const asset = await MediaLibrary.createAssetAsync(image);
              console.log('Asset created:', asset);
          }
          navigation.goBack();
      } catch (error) {
          console.error('Error creating asset or posting image:', error);
      }
  };

    return (
        <View style={styles.container}>
            {image || imageFromBase ? (
                <>
                    <Image
                        style={styles.img}
                        resizeMode='cover'
                        source={{ uri: image || imageFromBase?.image }}
                    />
                    <Pressable
                        onPress={pickImage}
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                    >
                        <Text style={{ color: "#fff" }}>Tomarme otra foto</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                        onPress={confirmImage}
                    >
                        <Text style={{ color: "#fff" }}>Me gusta esta foto</Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <View style={styles.containerPhoto}>
                        <Text>No hay foto</Text>
                    </View>
                    <Pressable
                        onPress={pickImage}
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                    >
                        <Text style={{ color: "#fff" }}>Tomarme una foto</Text>
                    </Pressable>
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    btn: {
        marginTop: 10,
        backgroundColor: colores.salmon,
        width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5
    },
    img: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100
    },
    containerPhoto: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});