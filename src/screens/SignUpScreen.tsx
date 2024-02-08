import React from 'react';
import auth from '../auth/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {View, TextInput, Button} from 'react-native';

import User from '../interfaces/user';

// inscription
const registerUser = async (User: User) => {
  try {
    await createUserWithEmailAndPassword(auth, User.email, User.password);
    console.log('Utilisateur inscrit');
  } catch (error) {
    console.error(error);
  }
};

const SignUpScreen = () => {
  const [user, setUser] = React.useState<User>({email: '', password: ''});

  const handleEmailChange = (email: string) => {
    setUser(prevUser => ({...prevUser, email}));
  };

  const handlePasswordChange = (password: string) => {
    setUser(prevUser => ({...prevUser, password}));
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={user.email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={user.password}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={() => registerUser(user)} />
    </View>
  );
};

export default SignUpScreen;
