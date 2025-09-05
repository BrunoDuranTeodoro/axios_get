import React, { useEffect, useState} from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import api from "./src/devices/api";

export default App(){

  const[users, setUsers] = useState([]);

  const API = "http://localhost:3000/users"

  async function fetchUsers() {
    try{
      const response = await api.get(API);
      setUsers(response.data)
    }catch(error){
      console.error("Error GET:", error.message);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  const _render() => {
    const vet = [];
    users.map((item, index) => {
      vet.push(
        <View key={index}>
          <Text style={styles.item}>
              ID:{item.id}
              NOME:{item.name}
              EMAIL:{item.email}
          </Text>
        </View>
      )
    })
    return vet;
  }

  
}