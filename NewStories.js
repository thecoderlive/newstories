import React from 'react'
import { TextInput, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'

const NewStories = () => (
<ScrollView style={styles.new_stories} showsVerticalScrollIndicator={false}>
<TextInput style={styles.search} placeholder={'Search'} />
<Stories item={item.stories}/>
</ScrollView>
)

export default NewStories;

const styles = StyleSheet.create({
    'search': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    }
});