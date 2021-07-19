import React, { useState } from "react";
import { styles } from "./style";

import {
    Image,
    FlatList,
    Text,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';

export default function List() {
    const [images, setimages] = useState([
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
        require('../Home/2.jpeg'),
    ]);
    const image = { uri: "https://filestore.community.support.microsoft.com/api/images/8954256a-cc48-4d73-a863-5c8ebe3c426c?upload=true" };
    return (

        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.txt}>My Photo Gallery</Text>
                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    renderItem={({ item, index }) => (
                        <Image source={item}
                            key={index + 1}
                            style={styles.img}
                        />
                    )}
                />
            </ImageBackground>
        </ScrollView>
    );
}