# musique.js [![Build Status](https://secure.travis-ci.org/pazguille/musique.png)](http://travis-ci.org/pazguille/musique) [![devDependency Status](https://david-dm.org/pazguille/musique/dev-status.png)](https://david-dm.org/pazguille/musique#info=devDependencies)

> A JavaScript Music Player API without UI.

## How-to
[TODO]

## API
[WIP]

### Table of contents

- [Musique()](#)
- [Musique#play()](#)
- [Musique#setTrack()](#)
- [Musique#pause()](#)
- [Musique#stop()](#)
- [Musique#next()](#)
- [Musique#prev()](#)
- [Musique#volume()](#)
- [Musique#mute()](#)
- [Musique#reset()](#)
- [Musique#toggle()](#)

### Musique(options)
Creates a new instance of `Musique`.
- `options`: A given options to customize an instance.
    - `volume`: Set the volumen as a value from `0` to `100`. Default: `50`
    - `indexTrack`: A given number of the initial track. Default: `0`.
    - `muted`: Set if the instance starts muted. Default: `false`.
    - `playlist`: Define a collection of `track`s. Default: `[]`.
        - `track`
            - `title`
            - `artist`
            - `album`
            - `poster`
            - `src`
    - `autoplay`: Set if the instance starts playing automatically. Default: `false`.

```js
var musique = new Musique({
    'volume': '75'
});
```

### Musique#play([indexTrack])
Starts playback the current or a given `indexTrack`.
- `indexTrack`: A given number of track.

```js
musique.play();
```

```js
musique.play(12);
```

### Musique#setTrack(indexTrack)
Sets a given `indexTrack` as current `track`.
- `indexTrack`: A given number of track.

```js
musique.setTrack(4);
```

### Musique#pause()
Pauses playback.

```js
musique.pause();
```

### Musique#stop()
Stops playback and seeks to the beginning.

```js
musique.stop();
```

### Musique#next()
Jumps to the next track.

```js
musique.next();
```

### Musique#prev()
Jumps to the previous track.

```js
musique.prev();
```

### Musique#volume(value)
Defines the volumen as a value from `0` to `100`.

```js
musique.volume(75);
```

### Musique#mute()
Mutes an instance of Musique.

```js
musique.mute();
```

### Musique#reset()
Reset the current track to the initial.

```js
musique.reset();
```

### Musique#toggle()
Toggles between pause and play.

```js
musique.toggle();
```

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).
