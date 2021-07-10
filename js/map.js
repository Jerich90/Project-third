let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [54.361188, 18.689939],
        zoom: 12,
        controls: []
    });

    const coords = [
        [54.363387, 18.629511],
        [54.397908, 18.609887],
        [54.349770, 18.616260],
        [54.336521, 18.667851]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);