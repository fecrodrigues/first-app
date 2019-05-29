import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class PeopleDetailPage extends React.Component {
    render() {
        const {people} = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <Image style={ styles.avatar } source={{ uri: people.picture.large }} />
                
                <View style={ styles.detailContainer }>
                    <View style={ styles.line }>
                        <Text style={styles.cellLabel}>Email: </Text>
                        <Text style={styles.cellContent}>{ people.email }</Text> 
                    </View>

                    <View style={ styles.line }> 
                        <Text style={styles.cellLabel}>outra blablabla: </Text>
                        <Text style={styles.cellContent}>{ people.email }</Text> 
                    </View>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },

    avatar: {
        aspectRatio: 1
    },

    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },

    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },

    cellLabel: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    
    cellContent: {
        fontSize: 15,
        paddingLeft: 5
    }
})

export default PeopleDetailPage;