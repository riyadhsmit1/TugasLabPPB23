import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MyProfile = () => {
  const [name, setName] = useState('Riyadh Smit');
  const [bio, setBio] = useState('Mahasiswa IBIK');
  const [photo, setPhoto] = useState(require('./assets/Foto-semit.jpeg'));

  const handleEditProfile = () => {
    if (name === 'Riyadh Smit') {
      setName('Achmad Riyadh Semit.');
      setBio('232310040 TI-23-KA');
    } else {
      setName('Riyadh Smit');
      setBio('Mahasiswa IBIK');
    }
  };

  const handleChangePhoto = () => {
    if (photo === require('./assets/Foto-semit.jpeg')) {
      setPhoto(require('./assets/Foto-semit2.png'));
    } else {
      setPhoto(require('./assets/Foto-semit.jpeg'));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={photo}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={handleChangePhoto}
      >
        <Text style={styles.buttonText}>Ganti Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MyProfile;
