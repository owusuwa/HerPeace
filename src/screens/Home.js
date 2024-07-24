import React from "react";
import { View , Text, Image, Picker} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component{
    state={
        city:"Accra"
    }
    render(){
        return(
            <ScrollView style={{backgroundColor: "#fff"}}>
                 <View style={{
                    flexDirection: "row",
                    alignContent: "center",
                    marginTop:40,
                    marginHorizontal:20
                 }}>
                     <View style={{width:"10%"}}>
                        <Image
                            source={require('../images/food logo.jpg')}
                            style={{width: 80, height: 40}}
                        />
                     </View>
                     <View style={{width:"88%"}}>
                        <Picker selectedValue={this.state.city}
                        style={{height:50,width:160}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({city:itemValue})
                        }>
                        <Picker.Item label="Accra" value="Accra" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Kumasi" value="Kumasi" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Tamale" value="Tamale" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Sunyani" value="Sunyani" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Cape Coast" value="Cape Coast" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Koforidua" value="Koforidua" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Ho" value="Ho" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Wa" value="Wa" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Techiman" value="Techiman" style={{fontWeight:"bold"}}/>
                        <Picker.Item label="Bolgatanga" value="Bolgatanga" style={{fontWeight:"bold"}}/>
                        </Picker>
                 </View>
                 </View>
            </ScrollView>
        )
    }
}