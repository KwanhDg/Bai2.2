import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/checked.png'),
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/group.png'),
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/group.png'),
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/group.png'),
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/checked.png'),
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/icons/checked.png'),
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notification}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={notifications}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Text style={styles.header}>Thông báo</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  notification: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
});

export default App;
