import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const CameraScreen = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const camera = useRef<Camera | null>(null);
  const device = useCameraDevice('front'); // Use 'back' for the rear camera
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        const permission = await requestPermission();
        if (!permission) {
          Alert.alert("Camera Permission Denied", "Please allow camera access in settings.");
        }
      }
    })();
  }, [hasPermission]);

  const takePicture = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto();
        setPhoto(`file://${photo.path}`);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  if (!hasPermission) {
    return <Text style={styles.permissionText}>Camera permission is required</Text>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        // 📷 Show Captured Image with Retake & Confirm Options
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setPhoto(null)} style={styles.button}>
              <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("Photo Confirmed!", "You can now use the image.")} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // 📷 Show Camera Preview
        device && (
          <Camera
            ref={camera}
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
          />
        )
      )}

      {!photo && (
        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <Text style={styles.captureText}>Capture Selfie</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  camera: { flex: 1 },
  permissionText: { color: 'white', textAlign: 'center', marginTop: 50, fontSize: 18 },
  previewContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '90%', height: '80%', borderRadius: 10 },
  buttonContainer: { flexDirection: 'row', marginTop: 20 },
  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 10, marginHorizontal: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  captureButton: { position: 'absolute', bottom: 50, alignSelf: 'center', backgroundColor: '#6200ee', padding: 15, borderRadius: 50 },
  captureText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
