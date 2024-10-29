import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ed4609', // 底部tab字体颜色
      headerStyle: {
        backgroundColor: '#25292e', // 顶部title底色，配合headerShown:true使用
      },
      headerShadowVisible: false,
      headerTintColor: '#fff', // 底部title颜色，配合headerShown:true使用
      tabBarStyle: {
        backgroundColor: '#fff', // 底部tab背景色
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '主页',
          headerShown: false, // 是否展示顶部title
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>;
          }
        }} />
      <Tabs.Screen
        name="about"
        options={{
          title: '知识',
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name={focused ? 'book' : 'book-outline'}
              color={color} size={24}
            />
          }
      }} />
      <Tabs.Screen name='mine' options={{
        title: '设置',
        headerTitleStyle: {
          fontSize: 14,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0b6db2',
          height: 50,
        },
        headerTintColor: '#fff',
        tabBarIcon: ({color, focused}) => {
          return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24}/>
        }
      }}/>
    </Tabs>
  );
}
