import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyBio = {
  identity: {
    npm: 212310040,
    firstname: "Achmad",
    middlename: "Riyadh",
    lastname: "Semit",
  },
  educations: [
    { id: 1, school: "SDS Amaliah Ciawi" },
    { id: 2, school: "MTS FATHAN MUBINA" },
    { id: 3, school: "SMK WIKRAMA Bogor" },
  ],
  mobile_phone: 812345679,
  email: "2232310040@student.ibik.ac.id",
  gender: 'M',
  tall_body: 171,
  weight_body: 64.5,
};

const BioDetails = (props) => {
  const { identity, mobile_phone, email } = props.bio;
  return (
    <View>
      <Text style={styles.text}>NPM: {identity.npm}</Text>
      <Text style={styles.text}>Name: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
      <Text style={styles.text}>Phone: {mobile_phone}</Text>
      <Text style={styles.text}>Email: {email}</Text>
    </View>
  );
};

export default class MyBioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: MyBio,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>My Bio</Text>
        <BioDetails bio={this.state.bio} />

        <Text style={styles.subheading}>Educations:</Text>
        {this.state.bio.educations.map(edu => (
          <Text key={edu.id} style={styles.text}>- {edu.school}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
});
