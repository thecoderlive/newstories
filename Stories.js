import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_cover}
    source={{uri: item.story_cover}}
    />
<Text style={styles.story_name}>{item.story_name}</Text>
<Image
    style={styles.eye_icon}
    source={{uri: item.eye_icon}}
   />
<Text style={styles.views}>{item.views}</Text>
<Image
    style={styles.play_icon}
    source={{uri: item.play_icon}}
   />
<Text style={styles.about_story}>{item.about_story}</Text>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Stories;

const styles = StyleSheet.create({
    'story_cover': {
        'width': '45vw',
        'height': '65vw',
        'marginTop': 5,
        'borderRadius': 8
    },
    'story_name': {
        'color': '#6f6d6d',
        'fontSize': 17,
        'fontWeight': '800',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'eye_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'views': {
        'color': '#030202',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'play_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'about_story': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#050505'
    }
});