import React,{useState} from 'react';
import style from '../globalstyle';
import { View,TextInput, Button} from 'react-native';

export default function header({initializeState,SearchSubmit}){
    const [textChange, settextChange] = useState(true)
    const [searchText, setsearchText] = useState('')
    const textChangeHandle=(value)=>{
        setsearchText(value)
        if(!textChange){
          initializeState()
          settextChange(true)
        }
    }
    const onSubmitHandle=()=>{
        SearchSubmit(searchText)
        settextChange(false)
    }
    return (
        <View style={style.header}>
          <View style={style.textInput}>
            <TextInput
            placeholder="Search here"
            onChangeText={textChangeHandle}
            />
          </View>
          <View style={style.button}>
          <Button
            title="Submit"
            onPress={onSubmitHandle}
            />
          </View>
        </View>
    )
}