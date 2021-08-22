import React,{useState ,useEffect} from 'react'
import { View,Text,FlatList,SafeAreaView} from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fetchAnswerApi from "../model/fetchAnswerApi";
import style from '../globalstyle';
import { paddingLeft } from 'styled-system';

export default function DetailsScreen({navigation,route}) {
  const { width } = useWindowDimensions();
  const [data, setdata] = useState('');
  useEffect(()=>{
    async function fetchData(){
      const response = await fetchAnswerApi(route.params.question_id);
      setdata(response.items);
      console.log(data)
    }
    fetchData();
  },[])

  const tagsStyles={
    pre:{
      backgroundColor:'#fbfbfb'
    }
  }
  return (
    <SafeAreaView style={style.cardContainer}>
      <Text style={style.textTitle}>{route.params.textTitle}</Text>
      {data ===''?<Text style={style.textLoading}>Loading</Text>:<FlatList
      data={Object.values(data)}
      renderItem={({item})=>{
        return <View style={style.card}>
          <View style={style.cardLeftSide}>
            <Text style={style.text}>Answered By:{item.owner.display_name}</Text>
            {item.is_accepted?<MaterialCommunityIcons name="sticker-check" size={24} color="white" />:<Text></Text>}
            <AntDesign name="caretup" size={24} color="white" />
            <Text style={style.text}>{item.score}</Text>
          </View>
          <View style={style.cardRightSide}>
          <RenderHtml
            originWhitelist={['*']}
            contentWidth={width}
            tagsStyles={tagsStyles}
            source={{ html: item.body }}
          />
          </View>
        </View>
      }}
      keyExtractor={(item)=>{
      return item.answer_id.toString()
      }}
      />}
    </SafeAreaView>
  );
}
