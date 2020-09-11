import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image,
    FlatList,
    ActivityIndicator
} from "react-native";

import {
    Card, CardItem
} from 'native-base';

export default class UserAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataScource: []
        };
    }

    getUserFromApi = () => {
        return
        fetch("https://randomuser.me/api/?results=5")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    dataScource: this.state.dataScource.concat(responseJson.results)
                });
            })
            .catch(error => console.log(error));

    }

    _keyExtractor = (datasource, index) => datasource.email;

    componentDidMount() {
        this.getUserFromApi();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" color="green" />
                </View>
            )
        }
        return (
            <View style={styles.Container}>

                <View>
                    <FlatList>
                        data ={this.state.dataScource}

                    keyExtractor = {this._keyExtractor}
                    renderItem ={({ item }) => (

                            <Card>

                                <CardItem>
                                    <View style={styles.container}>
                                        <image
                                            source={{
                                                uri: item.picture.medium
                                            }} />

                                    </View>
                                    <Text>
                                        Name: {item.name.title}{item.name.first}
                                        {item.name.last}
                                    </Text>
                                    <Text>Email: {item.email}</Text>
                                    <View>


                                    </View>
                                </CardItem>

                            </Card>

                        )}

                    </FlatList>
                </View>
            )
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

    }



});
