import React,{useState} from 'react'
import { View,Text,StyleSheet,FlatList} from 'react-native'


const BookMark = () => {
    const [data,setData]=useState([
        {name:'x',title:'good boi'},
        {name:'y',title:'good girl'},
        {name:'z',title:'good boyss'},
        {name:'a',title:'goodness boi'},
        {name:'d',title:'bad boi'},
        {name:'s',title:'goofly boi'},
        {name:'xa',title:'good boi'},
        {name:'xc',title:'waaaw boi'},
        {name:'xx',title:'naughty boi'},
    ])
    return (
        <View  style={styles.container}>
            <Text>
                <FlatList 
                    data={data}
                    renderItem={({item})=>{
                        <View >
                            <Text>{item.name}</Text>
                            <Text>{item.title}</Text>
                        </View>
                        
                        
                    }}
                    keyExtractor={item => item.id} />
            </Text>
        </View>
    )
}

export default BookMark

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }

})
