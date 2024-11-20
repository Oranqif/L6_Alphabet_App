import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert} from "react-native";
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View>
            <Text>Letter: </Text>
            <TextInput
                style={{borderWidth: 1}}
                value={letter}
                onChangeText={setLetter}
                maxLength={1}
            >
            </TextInput>
            <View style={styles.ParentButtonStyle}>
                <Button
                    title='Save'
                    onPress={() => {
                        let index_num = 1
                        if (route.params.type === 'Vowels') {
                            index_num = 0;
                        }
                        datasource[index_num].data[route.params.index].key = letter;
                        navigation.navigate('Home')
                    }
                }
                />
                <Button
                    title='Delete'
                    onPress={() => {
                        let index_num = 1
                        if (route.params.key === 'Vowels') {
                            index_num = 0;
                        }
                        Alert.alert('Are you sure?','',
                            [
                                {text: 'Yes', onPress: () => {
                                        datasource[index_num].data.splice(route.params.index,1);
                                        navigation.navigate('Home')
                                    }
                                },
                                {text: 'No'}
                            ]
                        )
                    }
                }
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    ParentButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10
    },
})

export default Edit;
