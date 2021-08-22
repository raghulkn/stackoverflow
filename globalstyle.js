import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
       display:'flex'
    },
    cardLeftSide:{
        flexDirection:'row',
        backgroundColor:'#3f51b5',
        padding:5,
        justifyContent:'center',
        width:'100%'
    },
    cardRightSide:{
        flexDirection:'column'
    },
    card:{
        backgroundColor:'#a3b1ff',
        borderStyle:'dotted',
        borderBottomColor:'#ffffff',
        alignItems:'center',
        borderRadius: 5,
        flexDirection:'column',
        margin: 5,
        padding:5,
    },
    cardContainer:{
        backgroundColor:'white'
    },
    textLoading:{
        color:"#3f51b5",
        fontSize:20,
        padding:20
    }
    ,
    header:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#2c387e'
    },
    textInput:{
        width:150,
        height: 30,
        margin: 12,
        borderWidth: 1,
        borderStyle:'dotted',
        backgroundColor:"#ffffff",
    },
    text:{
        color:'#ffffff',
        fontSize:12,
        paddingHorizontal: 10
    },
    textTitle:{
        color:'#6573c3',
        fontSize:14,
        paddingHorizontal:10,
        fontWeight:"bold",
    }
    ,
    button:{
        width:150,
        height: 30,
    }
})

export default style;