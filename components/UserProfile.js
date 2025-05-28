import react from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";


const UserProfile = () => {
    const [profiles, setProfiles] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const [newProfileID, setNewProfileId] = useState(null);
    const [newStreet, setNewStreet] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newState, setNewState] = useState('');
    const [newZip, setNewZip] = useState('');


    const [UserProfile, setUserProfile] = useState(
        {   
            name: '',
            email: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip: ''
            }
        }
    );
    

    const addProfile = () => {
      const newUserProfile = {
        id: profiles.length > 0 ? (parseInt(profiles[profiles.length - 1].id) + 1).toString() : '1',
        name, 
        email,
        address: {
          street,
          city,
          state,
          zip
        }
      }
      setProfiles(prevProfile => [...prevProfile, newUserProfile]);
      // Clear input fields
      setName('');
      setEmail('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    };

    
    const deleteProfile = (id) => {
        setProfiles(prevProfile => prevProfile.filter(profile => profile.id !== id));
    };

    const updateAddressById = (id) => {
    setProfiles(prevProfile =>
        prevProfile.map(profile =>
        profile.id === id
          ? {
              ...profile,
                address: {
                street: newStreet || profile.address.street,
                city: newCity || profile.address.city,
                state: newState || profile.address.state,
                zip: newZip || profile.address.zip
              },
            }
          : profile
      )
    );
    // Reset inputs and selected ID
    setNewProfileId(null);
    setNewStreet('');
    setNewCity('');
    setNewState('');
    setNewZip('');
    };

    const renderProfile = ({ item }) => (
    <View style={styles.profileCard}>
      <Text style={styles.profileText}>Name: {item.name}</Text>
      <Text style={styles.profileText}>Email: {item.email}</Text>
      <Text style={styles.profileText}>
        Address: {item.address.street}, {item.address.city}, {item.address.state}, {item.address.zip}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => deleteProfile(item.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNewProfileId(item.id)}
          style={styles.updateButton}
        >
          <Text style={styles.buttonText}>Update Address</Text>
        </TouchableOpacity>
      </View>

      {newProfileID === item.id && (
        <View style={styles.updateSection}>
          <TextInput
            style={styles.input}
            placeholder="New Street"
            value={newStreet}
            onChangeText={setNewStreet}
          />
          <TextInput
            style={styles.input}
            placeholder="New City"
            value={newCity}
            onChangeText={setNewCity}
          />
          <TextInput
            style={styles.input}
            placeholder="New State"
            value={newState}
            onChangeText={setNewState}
          />
          <TextInput
            style={styles.input}
            placeholder="New Zip"
            value={newZip}
            onChangeText={setNewZip}
          />
          <Button title="Save Address" onPress={() => updateAddressById(item.id)} />
        </View>
      )}
    </View>
  );




    return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip"
        value={zip}
        onChangeText={setZip}
      />

      <Button title="Add Profile" onPress={addProfile} />

      <Text style={[styles.header, { marginTop: 30 }]}>Profiles</Text>

      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={renderProfile}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
  },
  profileCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  profileText: {
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
  },
  updateButton: {
    backgroundColor: '#4da6ff',
    padding: 8,
    borderRadius: 5,
  },
  updateSection: {
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserProfile;
