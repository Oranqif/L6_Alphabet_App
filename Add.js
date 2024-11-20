import React, { useState } from 'react';
import { Text, TextInput, View, Button } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState();
    return (
        <View>
            <Text>Letter: {letter} </Text>
            <TextInput onChangeText={setLetter}>
            </TextInput>
            <Text>Letter Type: {letterType}</Text>
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items=
                    {[
                        { label: "Vowels", value: "Vowels" },
                        { label: "Consonants", value: "Consonants"}
                    ]}
            />
            <Button
                title="Submit"
                onPress={() => {
                    let item = {key: letter};
                    let index_num = 1;
                    if(letterType === 'Vowels') {
                        index_num = 0;
                    }
                    datasource[index_num].data.push(item);
                    navigation.navigate('Home')
                }
            }
            />
        </View>
    );
};

export default Add;
