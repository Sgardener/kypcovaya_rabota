import 'react-native-gesture-handler'; // Здесь мы имортируем уже имеющиеся функции, а также импортируем созданные нами страницы из папки, тоже созданную нами (данные метод импорта используется на каждой странице, которые используются далее, меняются при этом только сами компоненты, которые мы импортируем).
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './pages/Registration'; // Импорт наших страниц из папки осуществляется только на этой странице, так как она отвечает за навигацию между ними.
import Profile from './pages/Profile';
import Search from './pages/Search';
import SearchList from './pages/SearchList'

const Stack = createStackNavigator();



const App = () => { // Создаем названия страниц, то есть их имена, на которые будут адресовываться ссылки в дальнейшем.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Registration">

        <Stack.Screen 
          name = "Registration" // Формальное имя страницы.
          component = {Registration} // Имя страницы, на которое будут адресовываться другие страницы (при помощи метода навигации).
          options = {{ // Задаем название и цвет верхней панели (он везде одинаковый, хотя можно и поменять).
            title: 'EGORKER', // Название страницы.
            headerStyle: {
              backgroundColor: 'rgb(0, 152, 250)', // Цвет верхней панели.
            },
            headerTintColor: '#A60400', // Цвет шрифта верхней панели.
            headerTitleStyle: {
              fontWeight: 'bold', // Шрифт верхней панели.
              textAlign: 'center', // Выравнивание страницы (в данном случае используется выравнивание по центру).
            },
          }}
        />

        <Stack.Screen // Делаем все по аналогии с первой страницей ("Registarion"), меняя только индекс страницы (будь то вторая ("Profile"), третья ("Search") или четвертая ("SearchList")).
          name = "Profile"
          component = {Profile}
          options = {{
            title: 'EGORKER',
            headerStyle: {
              backgroundColor: 'rgb(0, 152, 250)',
            },
            headerTintColor: '#A60400',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name = "Search"
          component = {Search}
          options = {{
            title: 'EGORKER', 
            headerStyle: {
              backgroundColor: 'rgb(0, 152, 250)',
            },
            headerTintColor: '#A60400',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name = "SearchList"
          component = {SearchList}
          options = {{
            title: 'EGORKER', 
            headerStyle: {
              backgroundColor: 'rgb(0, 152, 250)',
            },
            headerTintColor: '#A60400',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
