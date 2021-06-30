import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { COLORS } from "../../../../assets/constant";


const Button = ({title}) => {
    return (
    <View style={styles.screenContainer}>
        <Pressable style={({pressed}) => [
            {
                backgroundColor: pressed ? COLORS.WHITE30 : COLORS.WHITE10 ,
            },
            styles.button,
        ]}>
            <Text style={styles.buttonText}> {title} </Text>

        </Pressable>
    </View>
    );
};

const SmallButton = ({title}) => {
    return (
    <View style={styles.screenContainer}>
        <Pressable style={({pressed}) => [
            {
                backgroundColor: pressed ? COLORS.WHITE30 : COLORS.WHITE10 ,
            },
            styles.button,
        ]}>
            <Text style={styles.buttonText}> {title} </Text>

        </Pressable>
    </View>
    );
};

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BLUE,
    },
    button:{
        padding: 10,
        justifyContent:"center",
        alignContent: "center",
        height: "auto",
        width:'70%',
        margin:10,
 
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
})

export default Button;