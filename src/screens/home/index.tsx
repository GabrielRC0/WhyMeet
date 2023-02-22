
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from '../../components/Participant';

export default function Homer() {
    const [Participants, setParticipants] = useState<string[]>([]);
    const [ParticipantName, setParticipantName] = useState ('');



    function handleParticipantAdd() {
        if(Participants.includes(ParticipantName)){
        return Alert.alert("participante existe", "ja existe um participant com esse nome")
        }
        setParticipants(prevState => [...prevState, ParticipantName]);
        setParticipantName('');
        console.log("você clicou no botão de adicionar");
    }

    function handleParticipantRemove(name: string){
        setParticipants(prevState => prevState.filter(Participant => Participant !== name))

        Alert.alert("remnos", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant !== name))
            },
            {
                text:'Não',
                style:'cancel'
            }
        ])
        console.log(`você clicou no botão de remover  aa${name}`)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.eveName}>
                Nome do evento
            </Text>

            <Text style={styles.eveDate}>
                Sexta, 4 de novembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    keyboardType='default' 
                    onChangeText={text => setParticipantName(text)}
                    value={ParticipantName}
                />


                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttontext}>aasdass</Text>
                </TouchableOpacity>
            </View>
            
            
            <FlatList
            data={Participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name={item} onRemove={() => handleParticipantRemove(item)}></Participant>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Adicione participantes para maior controle da sua Meeting!
                </Text>
            )}
            />



        </View>
    )
}