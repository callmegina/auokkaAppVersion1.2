import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import TabOne from './tabOneScreen';
import TabTwo from './tabTwoScreen';
import TabThree from './tabThreeScreen';
import TabFour from './tabFourScreen';
import TabFive from './tabFiveScreen';
import TabSix from './tabSixScreen';



import getTheme from './native-base-theme/components';

import mytheme from './native-base-theme/variables/custom';

const OrderScreen = ({ navigation }) => {
    return (

        <Container>

            <Tabs renderTabBar={() => <ScrollableTab />}
            >
                <Tab heading="全部订单">
                    <TabOne />
                </Tab>
                <Tab heading="未支付">
                    <TabTwo />
                </Tab>
                <Tab heading="准备发货">
                    <TabThree />
                </Tab>
                <Tab heading="全部发货">
                    <TabFour />
                </Tab>
                <Tab heading="部分发货">
                    <TabFive />
                </Tab>
                <Tab heading="已取消">
                    <TabSix />
                </Tab>
            </Tabs>

        </Container>


    )
}
export default OrderScreen;


const styles = StyleSheet.create({


});

