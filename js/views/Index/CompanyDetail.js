import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { connect } from 'react-redux'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import constant from '../../expand/api'
import actions from './redux/actions'
import moment from 'moment'

const { companyDetail } = constant

class CompanyDetail extends React.PureComponent {

    componentDidMount() {
        let { id } = this.props.navigation.state.params
        const { companyDetailData } = this.props
        let data = {
            "id": id
        }
        companyDetailData(companyDetail, 'POST', data)
    }

    _heder = () => {
        let detail = this.props.companyDetail.item
        if (detail == null) {
            return <View/>
        }
        return (
            <View style={styles.headerBox}>
                {detail.map(d => {
                    return (
                        <>
                            <Text style={styles.title}>{d.title}</Text>
                            <Text style={styles.contentBox}>{d.content}</Text>
                            <Text style={styles.create}>{moment().format('YYYY-DD-MM hh:ss')}</Text>
                            <Image style={styles.image} source={{uri: d.url}}/>
                        </>
                    )
                })}
            </View>
        )
    }

    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='详情'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {this._heder()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default connect(({ companyDetail }) => ({ companyDetail }), dispatch => ({
    companyDetailData(url, method, data) {
        dispatch(actions.companyDetailData(url, method, data))
    }
}))(CompanyDetail)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerBox: {
        width: px2dp(320),
        alignSelf: 'center'
    },
    title: {
        fontSize: px2dp(16),
        fontWeight: '500'
    },
    create: {
        fontSize: px2dp(12),
        color: '#333',
        width: px2dp(320),
        textAlign: 'right'
    },
    contentBox: {
        marginVertical: px2dp(16),
        width: px2dp(320),
    },
    image: {
        marginVertical: px2dp(16),
        width: px2dp(320),
        height: px2dp(320)
    }
})