import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';

const FirstPage = ({navigation}) => { // Используем далее метод "хуков", позволяющий нам запоминать значения, которые мы вводим в "поле ввода" и выводить эти значения в тех местах, в которых нам это нужно (в нашем случае выводить их на других страницах с целью визуализации и запоминания программой того, что пользователь ввел).
const [userSName, setUserSName] = useState('');
const [userName, setUserName] = useState('');
const [userFName, setUserFName] = useState('');
const [userAge, setUserAge] = useState('');
const [userStyd, setUserStyd] = useState('');
const [userWork, setUserWork] = useState('');
const [userExp, setUserExp] = useState('');


  return (
    <SafeAreaView style = {{flex: 1}}>
    
      <View style = {styles.container}>

        <Text style = {styles.header}> 
        {
          // Здесь мы вводим название страницы, которое будет визуализировано на странице приложения.
        }
          ✒РЕГИСТРАЦИЯ
        </Text>

        <Image
          style = {styles.Logo}
          source = {{uri: 'https://i.ebayimg.com/images/g/jooAAOSwpBdeAVsM/s-l400.jpg'}}
        />
        {
          // Только что мы вставили картинку, которая будет в нашем приложении. Картинки я добавляю для улучшения визуального восприятия пользователя приложения. Картинки будут на каждой странице нашего приложения, кроме последней страницы ( о причине такого решения будет написано позже).
        }

        {
          // Напишем текст, который объяснит пользователю, что нужно вводить в "окна ввода".
        }

        <Text style = {styles.heading}>
          Добро пожаловать!
        </Text>

        <Text style = {styles.textStyle}>
          Введите Ваши данные:
        </Text>

        <Text style = {styles.textStyle2}>
          (обязательно заполнить поля со значком *)
        </Text>

        {
          // Реализуем сами "окна ввода", в каждом из которых напишем что конкретно нужно вводить пользователю, будь то фамилия, имя или стаж работы (всего таких "окон ввода" будет реализовано семь штук на странице Регистрации).
        }

        <TextInput // Создаем "окно ввода".
          value = {userSName} // При помощи метода "хуков" мы даем название (в данном случае "userSName") элементу, под которым оно будет импортироваться на другую страницу.
            onChangeText = {(userSname) => 
              setUserSName(userSname)} // Вводим функцию, способную при изменении текста в "окне ввода" изменять заданное нами значение ранее на значение, которое ввел пользователь.
              placeholder = {'Фамилия*'} // Вводим текст, который будет визуализирован в "окне ввода" до того, как пользователь введет туда любой другой текст.
                style = {styles.inputStyle} // Задаем "окну ввода" графический стиль, который также написали самостоятельно.
        />

        <TextInput // Создаем новое "окно ввода", которое работает по аналогии с тем "окном ввода", работа которого была описана выше (меняется только текст внутри самого "окна ввода", который виден пользователю перед тем как в него что-либо написать, а также имя запоминаемого значения, которое в дальнейшем будет также перенесено на другую страницу приложения). Все дальнейшие окна ввода работаеют по этому принципу (по принципу аналогии с первым окном).
          value = {userName}
            onChangeText = {(userName) => 
              setUserName(userName)}
              placeholder = {'Имя*'}
                style = {styles.inputStyle}
        />

        <TextInput
          value = {userFName}
            onChangeText = {(userFName) => 
              setUserFName(userFName)}
              placeholder = {'Отчество'}
                style = {styles.inputStyle}
        />

         <TextInput
          value = {userAge}
            onChangeText = {(userAge) => 
              setUserAge(userAge)}
              placeholder = {'Возраст*'}
                style = {styles.inputStyle}
        />

        <TextInput
          value = {userStyd}
            onChangeText = {(userStyd) => 
              setUserStyd(userStyd)}
              placeholder = {'Образование*'}
                style = {styles.inputStyle}
        />

        <TextInput
          value = {userWork}
            onChangeText = {(userWork) => 
              setUserWork(userWork)}
              placeholder = {'Профессия*'}
                style = {styles.inputStyle}
        />

         <TextInput
          value = {userExp}
            onChangeText = {(userExp) => 
              setUserExp(userExp)}
              placeholder = {'Стаж работы по профессии'}
                style = {styles.inputStyle}
        />

        <View style = {{flex: 1}}>
        </View>

        <Button // Создаем кнопку, при нажатии на которую пользователя перенесет на страницу "Профиля" нашего приложения (конкретно через данную кнопку будут перенесены еще и все данные, которые пользователь ввел в предыдущие "окна ввода").
          title = "Профиль" // Название кнопки.
            onPress = {() =>
              navigation.navigate('Profile', {
                paramKey: userSName,
                paramKey2: userName,
                paramKey3: userFName,
                paramKey4: userAge,
                paramKey5: userStyd,
                paramKey6: userWork,
                paramKey7: userExp,
              }) // Была описана функция, которая преносит как пользователя, так и написанную им информацию на страницу "Профиль".
            }
        />

        <View style = {{flex: 0.1}}>
        </View>

        <Button // По аналогии с предыдущей, создаем новую кнопку, но уже без функции перенесения информации из "окон ввода" (так как там данная информация не потребуется).
          title = "Критерии поиска вакансий" // Название кнопки.
          onPress = {() =>
            navigation.navigate('Search', {
            }) // Страница, на которую нас переносит данная кнопка (в данном случае страница "Критерии поиска вакансий").
          }
        />

      </View>

      {
        // Теперь создадим текст, который будет висеть внизу нашего приложения (текст, который должен указывать на ссылку в интернете на наш сайт, но так как у нас такого сайта нет, то этот текст используется как потенциальное продолжение работы приложения). Такой текст будет висеть на каждой странице приложения (кроме последней, так как она выполняет чисто функциональную работу, поэтому еще там и нет никакого текста или картинок), а потому описание данной функции текста я опишу здесь, и потом к нему не буду возвращаться.
      }

      <Text style = {{textAlign: 'center', backgroundColor: 'rgb(0, 152, 250)'}}>

      {
        // Выше мы описали выравнивание текста и цвет самого текста. Ниже мы вводим сам текст, который будет виден в приложении.
      }
        www.EGORKER.com
      </Text>

    </SafeAreaView>

  );
};

export default FirstPage;

const styles = StyleSheet.create({ // Далее идет описание графического интерфейса приложения, которые были выбраны самолично. Не вижу большого смысла рассказывать абсолютно про каждую строчку, которая меняет цвет, выравние и т.д., а потому опишу только те, которые встречаются первый раз, дабы в дальнейшем к этому не возращаться. Однако какую конкретно деталь меняют те или иные настройки графического интерфейса будут описаны на каждой странице.

  container: { // Весь экран целиком (здесь вводятся общие данные, которые будут использованы, если не нуждаются в изменениях, будь то цвет или выравнивание).
    flex: 1, // Занимаемое пространство на странице приложения.
    alignItems: 'center', // Выравнивание предметов (будь то картинка, "окно ввода" и подобное).
    padding: 3, // Отступ сверху и снизу.
    backgroundColor: 'rgb(0, 152, 250)' // Цвет.
  },

  header: { // Надпись "Регистрация".
    fontSize: 25, // Размер шрифта.
    fontWeight: 'bold', // Стиль шрифта.
    textAlign: 'center', // Выравнивание текста.
  },

  heading: { // Надпись "Добро пожаловать!".
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 5, // Отступ по вертикали.
    fontWeight: 'bold'
  },

  textStyle: { // Надпись "Введите ваши данные".
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5, // Отступ сверху.
    fontWeight: 'bold',
  },

  textStyle2: { // Текст, идущий в скобках.
    fontSize: 13,
    marginBottom: 7, // Отступ снизу.
  },

  inputStyle: { // Визуальный стиль "окон ввода".
    textAlign: 'center',
    width: '85%', // Ширина.
    height: 37, // Высота.
    marginVertical: 8,
    backgroundColor: 'white', // Цвет заднего фона.
    borderRadius: '15px', // Радиус угловых границ.
    fontWeight: 'bold',
  },

  Logo: { // Картинка.
    height: 150,
    width: 150,
    borderRadius: '80px'
  }
  
});
