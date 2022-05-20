import React, { useRef, useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Animated, Button} from 'react-native';

const FadeInView = (props) => {
const fadeAnim = useRef(new Animated.Value(0)).current

useEffect(() => { // Здесь будет описан функция "анимации", которую я решил использовать для улучшения визуальной состовляющей приложения. В данном приложении анимированным будет текст, который выводится из полей "Имя", "Фамилия" и "Отчество" с предыдущего окна приложения.
  Animated.timing(
    fadeAnim,
    {
      toValue: 1, // Возможность включить или выключить анимацию (если бы стояол "0", то анимация бы не работала).
      duration: 2500, // Время, через которое появится текст.
    }
  ).start();
}, [fadeAnim])

return (
  <Animated.View
    style = {{
      ...props.style,
      opacity: fadeAnim, // Способ самой анимации, визуализирующей текст.
    }}
  >
    {props.children}
  </Animated.View>
);
}

const SecondPage = ({route, navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
    
      <View style = {styles.container}>

        <Text style = {styles.header}>
        {
          // Текст в верхней части страницы
        }
          🏠ПРОФИЛЬ
        </Text>

        {
          // Снова добавим картинку
        }

        <Image
          style = {styles.Logo}
          source = {{uri: 'https://st2.depositphotos.com/1776223/10838/v/950/depositphotos_108389964-stock-illustration-vector-speech-icon.jpg'}}
        />

        <Text style = {styles.heading}>
          Рады Вас приветствовать!
        </Text>

        <FadeInView>

        {
          // Далее была выполнена визуализации текста, которую пользователь вводил в предыдущем окне приложения. Работает все через метод "хуков", о котором говорилось ранее. Ту информацию, которую вводил пользователь в "окна ввода" теперь визуализируется на этом окне приложения.
        }

          <Text style = {styles.heading2}>
            {route.params.paramKey} {route.params.paramKey2} {route.params.paramKey3}
          </Text>

        </FadeInView>

        <Text style = {styles.heading3}>
          Ваш возраст: {route.params.paramKey4}
        </Text>

        <Text style = {styles.heading3}>
          Ваше образование: {route.params.paramKey5}
        </Text>

        <Text style = {styles.heading3}>
          Ваша профессия: {route.params.paramKey6}
        </Text>

        <Text style = {styles.heading3}>
          Ваш стаж работы по вакансии: {route.params.paramKey7}
        </Text>

        <View style = {{flex: 1}}>
        </View>

        <Button // Создание кнопки для перехода на страницу "Критерии поиска вакансий".
          title = "Критерии поиска вакансий" // Название кнопки
            onPress = {() =>
              navigation.navigate('Search', {
            })
          }
        />

        <View style = {{flex: 0.1}}>
        </View>

        <Button // Создание кнопки для выхода из приложения (в нашем случае выход из приложения отправит пальзователя на окно регистрации, чтобы он как бы заново вошел в приложение).
          title = "Выход" // Название кнопки
            onPress = {() =>
              navigation.navigate('Registration')
            }
        />

        </View>
      
        <Text style = {{textAlign: 'center', backgroundColor: 'rgb(0, 152, 250)'}}>
          www.EGORKER.com
        </Text>

    </SafeAreaView>

  );
};

export default SecondPage;

const styles = StyleSheet.create({

  container: { // Весь экран целиком.
    flex: 1,
    backgroundColor: 'rgb(0, 152, 250)',
    padding: 20,
  },

    header: { // Надпись "Профиль".
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heading: { // Надпись "Рады Вас приветствовать!".
    fontSize: 22,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heading2: { // Текст, который пользователь вводил в поля "Имя", "Фамилия" и "Отчество" в предыдущем окне приложения.
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heading3: { // Весь другой текст, который пользователь вводил в "окна ввода".
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
    alignItems: 'left',
  },

  Logo: { // Картинка
    height: 100,
    width: 100,
    borderRadius: '80px',
    alignSelf: 'center',
  }

});
