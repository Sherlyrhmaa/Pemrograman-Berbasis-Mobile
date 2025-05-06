import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AmalanHarian() {
  const amalanList = [
    "1. Membaca Al-Qur'an setiap hari.",
    "2. Melakukan shalat wajib lima waktu.",
    "3. Mengingat Allah melalui dzikir setiap waktu.",
    "4. Bersedekah meskipun sedikit setiap hari.",
    "5. Berdoa setelah shalat wajib.",
    "6. Menghormati orang tua dan keluarga.",
    "7. Membantu orang yang membutuhkan dengan tulus.",
    "8. Menjaga kebersihan dan kerapian diri dan lingkungan.",
    "9. Menjaga silaturahmi dengan keluarga dan teman-teman.",
    "10. Bersyukur atas segala nikmat yang diberikan Allah.",
    "11. Membantu sesama tanpa mengharap imbalan.",
    "12. Menghindari perbuatan yang sia-sia atau maksiat.",
    "13. Berusaha memperbaiki akhlak dan perilaku setiap hari.",
    "14. Memaafkan kesalahan orang lain dan tidak menyimpan dendam.",
    "15. Memperbaiki niat dalam setiap pekerjaan dan aktivitas."
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Amalan Harian</Text>
      </View>

      {amalanList.map((amalan, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.amalanText}>{amalan}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e5f5', // ungu muda
    padding: 16,
  },
  header: {
    backgroundColor: '#8e24aa', // ungu tua
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginBottom: 30, // Menambahkan jarak lebih besar
    alignItems: 'center',
    marginTop: 16,
  },
  headerText: {
    fontSize: 28, // Mengubah ukuran font header lebih besar
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18, // Border lebih besar
    padding: 20,
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#7b1fa2',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 12,
  },
  amalanText: {
    fontSize: 16,
    color: '#6a1b9a', // ungu tua
    marginBottom: 12,
    fontStyle: 'italic',
    lineHeight: 24,
  },
});
