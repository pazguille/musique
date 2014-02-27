var musique = new Musique({
    'playlist': [{
        'title': 'Ilumine',
        'artist': 'Efflugence',
        'album': 'Ilumine EP',
        'poster': '#c0392b',
        'src': 'https://github.com/RoamTouch/demo-gkplayer-web/raw/gh-pages/tracks/track01.mp3'
    },
    {
        'title': 'The One',
        'artist': 'Marsbeing ft Deniz Reno',
        'album': 'FutureGarage',
        'poster': '#2980b9',
        'src': 'https://github.com/RoamTouch/demo-gkplayer-web/raw/gh-pages/tracks/track02.mp3'
    }]
});

describe('Musique', function () {
    it('should be defined.', function () {
        expect(typeof Musique).toEqual('function');
    });
});

describe('An instance of Musique should have the following methods:', function () {

    var methods = ['play', 'setTrack', 'pause', 'stop', 'next', 'prev', 'volume', 'reset', 'toggle', 'mute'],
        i = 0,
        len = methods.length;

    for (i; i < len; i += 1) {
        (function (i){
            it('.' + methods[i] + '()', function () {
                expect(musique[methods[i]]).not.toEqual(undefined);
                expect(typeof musique[methods[i]]).toEqual('function');
            });
        }(i));
    }
});