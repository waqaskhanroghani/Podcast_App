import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Logo</Text>
          </View>
        </View>

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}>
            <Icon name="logo-facebook" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Icon name="logo-google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
            <Icon name="logo-apple" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Signup Link */}
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink}>Sign up here</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
