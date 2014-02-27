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
    - `volume`: xxxx. Default: `50`
    - `indexTrack`: xxxx. Default: `0`.
    - `muted`: xxxx. Default: `false`.
    - `playlist`: xxxx. Default: `[]`.
    - `autoplay`: xxxx. Default: `false`.

```js
var musique = new Musique({
    'volume': '75'
});
```

### Musique#play([track])
Starts playback the current or a given `track`.
- `track`: A given options to customize an instance.
    - `title`:
    - `album`:
    - `artist`:
    - `src`:
    - `poster`:

```js
musique.play();
```

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).
