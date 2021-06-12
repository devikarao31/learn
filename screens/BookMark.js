import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const BookMark = () => {
    return (
        <View  style={styles.container}>
            <Text>
                BookMark
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
