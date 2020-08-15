import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { px2dp } from '../../utils/px2dp'
import { Calendar, LocaleConfig } from 'react-native-calendars'


// 日历组件 中文替换
LocaleConfig.locales['fr'] = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['周天', '周一', '周二', '周三', '周四', '周五', '周六']
};
LocaleConfig.defaultLocale = 'fr';

// 日历组件 标记点的颜色
const vacation = { key: 'vacation', color: '#33D9B5', selectedDotColor: '#33D9B5' };

class CalendarPage extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='日历'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.calendarBox}>
                {renderTop}
                <Calendar
                    monthFormat={' yyyy MM '}
                    // 日历打卡记录
                    markedDates={{
                        '2020-08-20': { selected: true, selectedColor: '#FFC1B5' },
                        '2020-08-21': { dots: [vacation], selected: true, selectedColor: '#FFC1B5' },
                        '2020-08-22': { dots: [vacation] },
                        '2020-08-23': { dots: [vacation] },
                    }}
                    markingType={'multi-dot'}

                />
            </SafeAreaView>
        )
    }
}

export default CalendarPage

const styles = StyleSheet.create({
    calendarBox: {
        flex: 1
    }
})