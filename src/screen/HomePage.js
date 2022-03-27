import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, 
        View, ScrollView, TextInput, 
        TouchableOpacity, StatusBar,
        KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {  
    const [text, inputText] = useState({ 
        berangkat: '',
        datang: '',
        layan: '',
        waktu: '',
        waktu: '',
    });

    const getInput = (userInput) => {
        return (val) => {
            inputText({ ...text, [userInput]: val });
        }
    }
  
    const onSubmit = () => {
        navigation.navigate('Detail', { text })
    } 

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#e6e6e6" />
        <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.main}>
                    <Text style={styles.title}>KapaLan</Text>
                    <Text style={styles.titleForm}>Keberangkatan</Text>
                    <View style={styles.search}>
                    <Icon name="ship" size={20} color='#145723'/>
                    <TextInput
                    style={styles.input}
                    placeholder="Pilih Pelabuhan Awal"
                    onChangeText={getInput('berangkat')}
                    value={text.berangkat}
                    />
                    </View>   
                    <Text style={styles.titleForm}>Tujuan</Text>
                    <View style={styles.search}>
                        <Icon name="ship" size={20} color='#145723' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Pelabuhan Tujuan"
                        onChangeText={getInput('datang')}
                        value={text.datang}
                        />
                    </View>  
                    <Text style={styles.titleForm}>Jenis Layanan</Text>
                    <View style={styles.search}>
                        <Icon name="robot" size={20} color='#145723' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Layanan"
                        onChangeText={getInput('layan')}
                        value={text.layan}
                        />
                    </View>             
                    <Text style={styles.titleForm}>Tanggal Keberangkatan</Text>
                    <View style={styles.search}>
                        <Icon name="calendar" size={20} color='#145723' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Tanggal Masuk"
                        onChangeText={getInput('waktu')}
                        value={text.waktu}
                        />
                    </View>
                    <Text style={styles.titleForm}>Jam keberangkatan</Text>
                    <View style={styles.search}>
                        <Icon name="clock" size={20} color='#145723' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Jam Masuk"
                        onChangeText={getInput('waktu')}
                        value={text.waktu}
                        />
                    </View>
                    <Text></Text>
                    <View style={styles.inputPerson}>
                        <View style={styles.detail_style}>
                            <Text style={styles.textPerson}>
                                Dewasa
                            </Text>
                            <Text style={styles.textPerson}>
                                1 Orang
                            </Text>
                        </View>
                    </View>            
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>
                        <Text style={styles.buttonText}><Icon style={styles.searchicon} name="search" size={15} color='#fffs'/>Cari</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomBar}>
                    <View style={styles.navbar}>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="home" size={30} color='#145723'/>
                            <Text style={styles.buttonbarText}>Beranda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Order')}>
                            <Icon name="book" size={30} color='#145723'/>
                            <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="ban" size={30} color='#145723'/>
                            <Text style={styles.buttonbarText}>Pembatalan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="grip-lines" size={30} color='#145723'/>
                            <Text style={styles.buttonbarText}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#e6e6e6",
  },
  title: {
    color: "#145723",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
  main: {
    margin: 30,
    marginTop: 50,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 0,
    shadowColor: "#bababa",
    shadowOpacity: 10,
    shadowRadius: 5,
  },
  search: {
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  titleForm: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#145723",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    color: "#000",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: 250,
    flex: 1,
  },
  inputPerson: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    color: "#000",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    // height: 5,
    flex: 1,
    marginBottom: 15,
  },
  textPerson: {
    textAlign: "center",
    paddingTop: 5,
  },
  searchicon: {
    paddingRight: 5,
  },
  button: {
    backgroundColor: "#16b11e",
    borderRadius: 10,
    marginHorizontal: 50,
    paddingVertical: 10,
    elevation: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomBar: {
    marginTop: 50,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 0,
    marginVertical: 0,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonbottomBar: {
    marginHorizontal: 23,
    alignItems: "center",
  },
  buttonbarText: {
    color: "#145723",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
  },
  detail_style: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default Home;