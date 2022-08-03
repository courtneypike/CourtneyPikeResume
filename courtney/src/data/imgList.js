const images = require.context('./images_videos', true, /\.jpg$/);

const imageData = {
    imageList: [
        {id: 1, src: images('./mochi1.jpg')},
        {id: 2, src: images('./mochi2.jpg')},
        {id: 3, src: images('./mochi3.jpg')},
        {id: 4, src: images('./mochi4.jpg')},
    ],
};

export default imageData;