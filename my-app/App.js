import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Platform } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';

// Komponen Slider Kompatibel Web & Mobile
const SliderComponent = ({ value, onValueChange }) => {
  if (Platform.OS === 'web') {
    return (
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value))}
        style={{ width: '100%', marginBottom: 10 }}
      />
    );
  } else {
    const Slider = require('@react-native-community/slider').default;
    return (
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={1}
        maximumValue={100}
        step={1}
        value={value}
        onValueChange={onValueChange}
      />
    );
  }
};

export default function App() {
  const [idBarang, setIdBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [alamatTujuan, setAlamatTujuan] = useState('');
  const [pengirim, setPengirim] = useState('Budi');
  const [jumlahBarang, setJumlahBarang] = useState(1);
  const [tanggalKirim, setTanggalKirim] = useState('');
  const [penerima, setPenerima] = useState('');
  const [dataTerkirim, setDataTerkirim] = useState([]);

  const handleSubmit = () => {
    const data = {
      idBarang,
      namaBarang,
      alamatTujuan,
      pengirim,
      jumlahBarang,
      tanggalKirim,
      penerima
    };
    setDataTerkirim([...dataTerkirim, data]);

    // Reset form
    setIdBarang('');
    setNamaBarang('');
    setAlamatTujuan('');
    setPengirim('Budi');
    setJumlahBarang(1);
    setTanggalKirim('');
    setPenerima('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Form Input Data Barang</Text>

        <Text style={styles.label}>ID Barang</Text>
        <TextInput style={styles.input} value={idBarang} onChangeText={setIdBarang} placeholder="Masukkan ID" />

        <Text style={styles.label}>Nama Barang</Text>
        <TextInput style={styles.input} value={namaBarang} onChangeText={setNamaBarang} placeholder="Nama Barang" />

        <Text style={styles.label}>Alamat Tujuan</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          multiline
          numberOfLines={4}
          value={alamatTujuan}
          onChangeText={setAlamatTujuan}
          placeholder="Alamat lengkap tujuan"
        />

        <Text style={styles.label}>Pengirim</Text>
        <View style={styles.pickerContainer}>
          <RNPicker
            selectedValue={pengirim}
            onValueChange={(itemValue) => setPengirim(itemValue)}
          >
            <RNPicker.Item label="Sherly" value="Sherly" />
            <RNPicker.Item label="Febry" value="Febry" />
            <RNPicker.Item label="Anggun" value="Anggun" />
          </RNPicker>
        </View>

        <Text style={styles.label}>Jumlah Barang: {jumlahBarang}</Text>
        <SliderComponent value={jumlahBarang} onValueChange={setJumlahBarang} />

        <Text style={styles.label}>Tanggal Kirim</Text>
        <TextInput
          style={styles.input}
          value={tanggalKirim}
          onChangeText={setTanggalKirim}
          placeholder="YYYY-MM-DD"
        />

        <Text style={styles.label}>Penerima</Text>
        <TextInput style={styles.input} value={penerima} onChangeText={setPenerima} placeholder="Nama penerima" />

        <Button title="Simpan" onPress={handleSubmit} />
      </View>

      <Text style={[styles.title, { marginTop: 30 }]}>List Data Terkirim</Text>
      {dataTerkirim.map((item, index) => (
        <View key={index} style={styles.itemBox}>
          <Text>ID: {item.idBarang}</Text>
          <Text>Nama: {item.namaBarang}</Text>
          <Text>Tujuan: {item.alamatTujuan}</Text>
          <Text>Pengirim: {item.pengirim}</Text>
          <Text>Jumlah: {item.jumlahBarang}</Text>
          <Text>Tanggal: {item.tanggalKirim}</Text>
          <Text>Penerima: {item.penerima}</Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  formBox: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    marginBottom: 4,
    color: '#555',
    fontWeight: '500',
  },
  input: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  pickerContainer: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  itemBox: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  }
});
