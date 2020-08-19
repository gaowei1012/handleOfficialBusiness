import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { connect } from 'react-redux'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import actions from './redux/actions'
import constant from '../../expand/api'
// import { Loading } from '../../utils/Loading'
import moment from 'moment'
import NavigationUtil from '../../utils/NavigationUtil'

const { compnyAll } = constant

class CompanyNews extends React.PureComponent {
    componentDidMount() {
        const { companyAllData } = this.props
        companyAllData(compnyAll, 'POST')
    }
    _detail = (id) => {
        NavigationUtil.goPage({id}, 'CompanyDetail')
    }
    _content = () => {
        const company = this.props.company.item
        if (company == null) {
            return <View />
        }
        return (
            <View style={styles.wapper}>
                {company.map(c => {
                    return <TouchableOpacity style={styles.itemBox} onPress={() => this._detail(c.id)} activeOpacity={1} key={c.id}>
                        <Image style={styles.image} source={{ uri: c.url }} />
                        <View style={styles.contentBox}>
                            <Text style={styles.title}>{c.title}</Text>
                            <Text numberOfLines={1} style={styles.desc}>{c.detail}</Text>
                            <Text style={styles.time}>{moment(c.create_at).format('YYYY-DD-MM hh:ss')}</Text>
                        </View>
                    </TouchableOpacity>
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
                title='企业资讯'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                <ScrollView>
                    {this._content()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default connect(({ company }) => ({ company }), dispatch => ({
    companyAllData(url, method) {
        dispatch(actions.companyAllData(url, method))
    }
}))(CompanyNews)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wapper: {
        width: px2dp(312),
        alignSelf: 'center'
    },
    image: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(8)
    },
    itemBox: {
        marginVertical: px2dp(10),
        flexDirection: 'row',
    },
    contentBox: {
        marginHorizontal: px2dp(10)
    },
    title: {
        marginVertical: px2dp(6),
        fontSize: px2dp(14),
        fontWeight: '600'
    },
    desc: {
        marginVertical: px2dp(6),
        fontSize: px2dp(12),
        color: '#333',
        width: px2dp(240)
    },
    time: {
        width: px2dp(240),
        textAlign: 'right',
        fontSize: px2dp(10),
        color: '#333'
    }
})
