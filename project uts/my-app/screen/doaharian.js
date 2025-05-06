import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function DoaHarian() {
  const doaList = [
    {
      judul: "Doa Bangun Tidur",
      arab: "ٱلْـحَمْدُ لِلّٰهِ ٱلَّذِيْٓ أَحْيَانَا بَعْدَ مَآ أَمَاتَنَا وَإِلَيْهِ ٱلنُّشُوْرُ",
      latin: "Alhamdulillahil ladzi ahyana ba’da ma amatana wa ilaihin nusyur.",
      arti: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dibangkitkan."
    },
    {
      judul: "Doa Masuk Kamar Mandi",
      arab: "ٱللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
      latin: "Allahumma inni a’udzu bika minal khubutsi wal khaba’its.",
      arti: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari jin laki-laki dan jin perempuan."
    },
    {
      judul: "Doa Keluar Kamar Mandi",
      arab: "ٱلْـحَمْدُ لِلّٰهِ الَّذِي أَذْهَبَ عَنِّي الأَذَى وَعَافَانِي",
      latin: "Alhamdulillahil ladzii adzhaba ‘anniyal adzaa wa ‘aafaany.",
      arti: "Segala puji bagi Allah yang telah menghilangkan kotoran dariku dan menyehatkanku."
    },
    {
      judul: "Doa Sebelum Makan",
      arab: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ، بِسْمِ اللَّهِ",
      latin: "Allahumma baarik lanaa fiimaa razaqtanaa wa qinaa ‘adzaa bannaar, bismillah..",
      arti: "Ya Allah, berkahilah rezeki yang Engkau berikan kepada kami dan peliharalah kami dari siksa neraka. Dengan menyebut nama Allah."
    },
    {
      judul: "Doa Sesudah Makan",
      arab: "ٱلْـحَمْدُ لِلّٰهِ ٱلَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ ٱلْمُسْلِمِينَ",
      latin: "Alhamdulillahil ladzi ath’amana wasaqana waja’alana minal muslimin.",
      arti: "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami sebagai orang-orang muslim."
    },
    {
      judul: "Doa Keluar Rumah",
      arab: "بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",
      latin: "Bismillahi tawakkaltu ‘alallah, laa haula walaa quwwata illa billah.",
      arti: "Dengan nama Allah, aku bertawakkal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah."
    },
    {
      judul: "Doa Masuk Rumah",
      arab: "بِسْمِ اللّٰهِ وَلَجْنَا وَبِسْمِ اللّٰهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا",
      latin: "Bismillahi walajna wa bismillahi kharajna wa ‘ala rabbina tawakkalna.",
      arti: "Dengan nama Allah kami masuk, dan dengan nama Allah kami keluar, dan kepada Tuhan kami, kami bertawakkal."
    },
    {
      judul: "Doa Sebelum Belajar",
      arab: "ٱللّٰهُمَّ إِنِّيْ أَسْأَلُكَ فَهْمَ ٱلنَّبِيِّينَ وَحِفْظَ ٱلْمُرْسَلِيْنَ وَٱلْمَلَائِكَةِ ٱلْمُقَرَّبِيْنَ...",
      latin: "Allahumma inni as-aluka fahman nabiyyin wa hifdzal mursalin wa ilhamal malaaikatil muqarrabin...",
      arti: "Ya Allah, berikanlah aku pemahaman seperti para nabi, hafalan seperti para rasul, dan ilham seperti para malaikat yang dekat dengan-Mu."
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {doaList.map((doa, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.judul}>{doa.judul}</Text>
          <Text style={styles.arab}>{doa.arab}</Text>
          <Text style={styles.latin}>{doa.latin}</Text>
          <Text style={styles.arti}>{doa.arti}</Text>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#7b1fa2',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 8,
  },
  arab: {
    fontSize: 20,
    color: '#4a148c',
    marginBottom: 6,
    textAlign: 'right',
  },
  latin: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7b1fa2',
    marginBottom: 4,
  },
  arti: {
    fontSize: 14,
    color: '#4a148c',
  },
});
