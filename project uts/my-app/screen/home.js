import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.icon}>🕌</Text>
      <Text style={styles.title}>Selamat Datang di Cahaya Hati</Text>
      <Text style={styles.subtitle}>
        Temukan inspirasi harianmu melalui kata bijak, doa, dan amalan ringan yang penuh makna.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Kata Bijak')}>
        <Text style={styles.buttonText}> Kata Bijak</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Doa Harian')}>
        <Text style={styles.buttonText}> Doa Harian</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Amalan Harian')}>
        <Text style={styles.buttonText}> Amalan Harian</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>"Sedikit namun rutin lebih dicintai Allah daripada banyak tapi jarang." 💜</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3e5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4a148c', 
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6a1b9a', 
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#8e24aa', 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 14,
    marginVertical: 10,
    width: '85%',
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    fontStyle: 'italic',
    color: '#7b1fa2', 
    fontSize: 14,
    textAlign: 'center',
  },
});
