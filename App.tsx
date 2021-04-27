import React from 'react'
import {
  View,
  Text, 
  Button, 
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native'

const movieCategoriesList = [
  'Action',
  'Anime',
  'Award-Winning',
  'Brazilian',
  'Children & Family',
  'Classics',
  'Comedies',
  'Documentaries',
  'Dramas',
  'Faith & Spirituality',
  'Fantasy',
  'Hollywood',
  'Horror',
  'Independent',
  'International',
  'LGBTQ',
  'Music & Musicals',
  'Police',
  'Romance',
  'Sci-Fi',
  'Sports',
  'Stand-Up Comedy',
  'Thriller'
]


export default function App(){
  return(
    <View style={styles.conteiner}>
      <View style={styles.buttonConteiner}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let randomNumber = Math.floor(Math.random() * 23)
          let category = movieCategoriesList[randomNumber]

          return Alert.alert(category)
        }}
      >
        <Text style={styles.buttonText}>RANDOM CATEGORY</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: '#141414',
    justifyContent: 'center',
    height: '100%'
  },
  buttonConteiner:{
    //alignItems: 'center',
    marginHorizontal: 30,
  },
  button:{
    backgroundColor: '#ed0c17',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 25
  },
  buttonText:{
    color: 'white',
    fontSize: 15
  }
})