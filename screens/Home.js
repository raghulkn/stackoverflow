import React,{Component} from 'react';
import { Text, View ,FlatList,TouchableOpacity,SafeAreaView } from "react-native"
import Header from '../components/header';

//style
import style from '../globalstyle';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

// fetch data
import fetchSearchApi from '../model/fetchSearchApi';

const initialstate={
    page: 1,
    items:'',
    searchValue:""
}

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state=initialstate
        this.initializestate=this.initializestate.bind(this)
        this.SearchSubmit=this.SearchSubmit.bind(this)
        this.loadMore=this.loadMore.bind(this)
        console.log(this.state.items)
    }
    initializestate(){
        this.setState(initialstate)
    }
    async SearchSubmit(searchText){
            this.setState(initialstate)
            this.setState({searchValue:searchText});
            let data =await fetchSearchApi(searchText,this.state.page);
            this.setState({items:data.items})  
            this.setState({page:this.state.page+1})
    }
    async loadMore(){
        if(this.state.page<10)
        {
        let data =await fetchSearchApi(this.state.searchValue,this.state.page);
        this.setState({items:this.state.items.concat(data.items)}) 
        this.setState({page:this.state.page+1})
        }
    }
    listFooter(){
      return<Text>Loading</Text>
    }
    render(){
    return(
        <SafeAreaView style={style.container}>
            <Header SearchSubmit={this.SearchSubmit} initializeState={this.initializestate}/>
            <View style={style.cardContainer}>
            {this.state.items===""? <Text style={style.textLoading}>Search to load ....</Text>:
            <FlatList
            data={this.state.items}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('details',{question_id:item.question_id,textTitle: item.title})}>
                    <View style={style.card}>
                        <View style={style.cardLeftSide}>
                            <MaterialIcons name="question-answer" size={24} color="white" />
                            <Text style={style.text}>{item.answer_count}</Text>
                            <AntDesign name="caretup" size={24} color="white" />
                            <Text style={style.text}>{item.score}</Text>
                        </View>
                        <View style={style.cardRightSide}>
                          <View>
                            <Text style={style.text}>Question asked by {item.owner.display_name}</Text>
                          </View>
                          <View>
                            <Text style={style.textTitle}>{item.title}</Text>
                          </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => {
                return item.question_id.toString()}}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={this.listFooter}
            />}
            </View>
        </SafeAreaView>
    )
    }
}