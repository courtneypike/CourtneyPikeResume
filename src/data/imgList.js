const images = require.context('./images_videos', true, /\.jpg$/);

const imageData = {
    imageList: [
        {id: 1, src: images('./coverify-1.jpg')},
        {id: 2, src: images('./coverify-2.jpg')},
        {id: 3, src: images('./coverify-3.jpg')},
        {id: 4, src: images('./coverify-4.jpg')},
    ],
};

export default imageData;