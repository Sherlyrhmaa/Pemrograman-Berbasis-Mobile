import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function KataBijak() {
  const kataBijakList = [
    "1. Jangan bersedih, Allah selalu bersama kita. (QS. At-Tawbah: 40)",
    "2. Tawakal itu bukan pasrah, tapi usaha maksimal dan percaya pada takdir Allah. (QS. At-Tawbah: 51)",
    "3. Dunia ini tempat singgah, akhirat tujuan utama. (QS. Al-Imran: 185)",
    "4. Istiqomah itu berat, tapi buahnya manis. (QS. Al-Fussilat: 30)",
    "5. Sabar dan shalat adalah penolong terbaik. (QS. Al-Baqarah: 153)",
    "6. Rezeki tidak akan tertukar, tenanglah dalam ikhtiar. (QS. Al-Isra: 23)",
    "7. Jaga lisan, karena ia bisa menuntunmu ke surga atau neraka. (QS. Al-Hijr: 9)",
    "8. Allah tidak melihat rupa dan hartamu, tapi hati dan amalmu. (QS. Al-Hujurat: 13)",
    "9. Jangan iri dengan dunia orang lain, belum tentu dia bahagia seperti yang terlihat. (QS. Al-Baqarah: 109)",
    "10. Maafkan orang lain seperti engkau ingin Allah memaafkanmu. (QS. Al-A'raf: 199)",
    "11. Jadikan Al-Qur'an sahabat hidupmu. (QS. Al-Furqan: 30)",
    "12. Setiap kesulitan pasti ada kemudahan, janji Allah itu pasti. (QS. Ash-Sharh: 5-6)",
    "13. Tidak ada yang sia-sia dari doa yang tulus. (QS. Ghafir: 60)",
    "14. Ketika dunia menjauh, Allah tetap dekat. (QS. Al-Baqarah: 186)",
    "15. Hijrah itu berat di awal, indah di akhir. (QS. An-Nisa: 100)",
    "16. Ridho Allah lebih penting dari pujian manusia. (QS. Al-Baqarah: 272)",
    "17. Berhenti sejenak untuk sujud adalah cara terbaik menyelesaikan masalah. (QS. Al-Isra: 109)",
    "18. Amal kecil tapi konsisten lebih dicintai Allah. (QS. Al-Bayyina: 7)",
    "19. Hati yang dekat dengan Allah akan selalu tenang. (QS. Ar-Ra'd: 28)",
    "20. Syukur adalah kunci bahagia, bukan banyaknya harta. (QS. Ibrahim: 7)"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata-Kata Bijak</Text>
      {kataBijakList.map((kata, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>{kata}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3e5f5', // ungu muda
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8e24aa', // ungu tua
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto', // Menambahkan jenis font yang lebih elegan
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16, // Mengubah radius agar lebih lembut
    padding: 18,
    marginBottom: 16,
    elevation: 8,
    shadowColor: '#7b1fa2',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    borderWidth: 1, // Menambahkan border tipis
    borderColor: '#8e24aa', // Warna border yang sama dengan judul
  },
  text: {
    fontSize: 16,
    color: '#6a1b9a', // ungu tua
    fontStyle: 'italic',
    lineHeight: 24,
  },
});
