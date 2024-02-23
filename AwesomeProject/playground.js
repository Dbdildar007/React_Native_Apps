import react,{useContext} from 'react'
import {View,Text} from 'react-native'
import { AuthContext } from './src/context/AuthContext'

const Playground = ()=>{

    const {userData,setuserData} = useContext(AuthContext);
   
    return(
        <View>
            <Text>
                plagourbnd
                {userData}
              
            </Text>
        </View>
    )
}
export default Playground;