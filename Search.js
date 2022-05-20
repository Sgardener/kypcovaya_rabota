import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';


const ThirdPage = ({navigation}) => {
  return(
    <SafeAreaView style = {{flex: 1}}>

      <View style = {styles.container}>
   
        <Text style = {styles.header}>

        {
          // Текст вверху страницы.
        }
          🔍КРИТЕРИИ ПОИСКА ВАКАНСИЙ
        </Text>

        {
          // Опять вставляем картинку.
        }

        <Image
          style = {styles.Logo}
          source = {{uri: 'https://e7.pngegg.com/pngimages/567/59/png-clipart-computer-icons-others-miscellaneous-cdr.png'}}
        />

        {
          // Далее идет визуализация текста для критериев поиска вакансий, который будет видеть пользователь.
        }

        <Text style = {styles.textStyle}>
          Введите данные:
        </Text>

        <Text style = {styles.textStyle2}>
          (обязательно заполнить поля со значком *)
        </Text>

        {
          // Также снова создаем "окна ввода", по аналогии с теми, которые были спользованы на первой странице нашего приложения.
        }

        <TextInput
          placeholder = {'Заработная плата (в рублях)*'}
            style = {styles.inputStyle}
        />

        <TextInput
          placeholder = {'Кол-во рабочих дней в неделю*'}
            style = {styles.inputStyle}
        />
        <Text style = {styles.textStyle3}>
          (для полей ниже нужно написать "да" или "нет")
        </Text>

        <TextInput
          placeholder = {'Наличие социального пакета*'}
            style = {styles.inputStyle}
        />

         <TextInput
          placeholder = {'Нормированный рабочий день*'}
            style = {styles.inputStyle}
        />

        <TextInput
          placeholder = {'Наличие командировок*'}
            style = {styles.inputStyle}
        />

        <View style = {{flex: 1}}>
        </View>

        <Button // Создаем кнопку с возможностью перехода на четвертый экран приложения с функциональной и основной частью нешего приложения.
          title = 'Поиск вакансий по списку'
            onPress = {() =>
              navigation.navigate('SearchList', {
              })
            }
        />

        <View style = {{flex: 0.1}}>
        </View>

        <Button // реализуем кнопку для выхода из приложения.
          title = "Выход"
            onPress = {() =>
              navigation.navigate('Registration', {
              })
            }
        />

      </View>

      <Text style = {{textAlign: 'center', backgroundColor: 'rgb(0, 152, 250)'}}>
        www.EGORKER.com
      </Text>

    </SafeAreaView>

  );
};

export default ThirdPage;

const styles = StyleSheet.create({

  container: { // Весь экран целиком
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgb(0, 152, 250)'
  },

  header: { // Текст "Критерии поиска вакансии"
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textStyle: { // Текст "Введите данные"
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },

  textStyle2: { // Текст "(обязательно заполнить поля со значком *)".
    fontSize: 13,
    marginBottom: 7,
  },

  textStyle3: { // Текст "(для полей ниже нужно написать "да" или "нет")".
    fontSize: 13,
    marginTop: 10,
  },

  inputStyle: { // Натсройки "окон ввода"
    textAlign: 'center',
    width: '85%',
    height: 37,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: '15px',
    fontWeight: 'bold',
  },

  Logo: { // Картинка
    height: 100,
    width: 100,
    borderRadius: '80px',
    alignSelf: 'center',
  }

});
