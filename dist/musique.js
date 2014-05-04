/*!
 * musique.js v1.0.0
 *
 * Copyright (c) 2014, @pazguille
 * Released under the MIT license.
 */
(function (window) {
    'use strict';

    var defaults = {
        'volume': 50,
        'indexTrack': 0,
        'muted': false,
        'playlist': [],
        'autoplay': false
    };

    function customizeOptions(options) {
        var prop;
        for (prop in defaults) {
            if (!options.hasOwnProperty(prop)) {
                options[prop] = defaults[prop];
            }
        }
        return options;
    }

    /**
     * Creates a new instance of Musique.
     * @constructor
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.volume] Set the volumen as a value from 0 to 100. Default: 50.
     * @param {String} [options.indexTrack] A given number of the initial track. Default: 0.
     * @param {String} [options.muted] Set if the instance starts muted. Default: false.
     * @param {String} [options.playlist] Define a collection of tracks. Default: [].
     * @param {String} [options.autoplay] Set if the instance starts playing automatically. Default: false.
     * @returns {musique}
     */
    function Musique(options) {
        this._init(options);
    }

    /**
     * Initializes a new instance of Musique.
     * @memberof! Musique.prototype
     * @function
     * @private
     * @returns {musique}
     */
    Musique.prototype._init = function (options) {

        this._options = customizeOptions(options || {});

        this._player = window.document.createElement('audio');

        this._muted = this._options.muted;

        this._indexTrack = this._options.indexTrack;

        this.volume(this._options.volume);

        this.playlist = this._options.playlist;

        this.setTrack(this._indexTrack);

        this._defineEvents();

        if (this._options.autoplay) {
            this._player.play();
        }

        this._playing = false;

        return this;
    };

    /**
     * Starts playback the current track or a given track.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.play = function (indexTrack) {
        if (indexTrack) {
            this.setTrack(indexTrack);
        }

        this._playing = true;

        this._player.play();

        return this;
    };

    /**
     * Sets a given track as current track.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.setTrack = function (indexTrack) {
        this._indexTrack = indexTrack;

        this.currentTrack = this.playlist[this._indexTrack];

        this._player.src = this.currentTrack.src;

        return this;
    };

    /**
     * Pauses playback.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.pause = function () {
        this._playing = false;

        this._player.pause();

        return this;
    };

    /**
     * Stops playback and seeks to the beginning.
     * @memberof! Musique.prototype
     * @functionMusique
     * @returns {musique}
     */
    Musique.prototype.stop = function () {
        this._playing = false;

        this._player.load();

        return this;
    };

    /**
     * Jumps to the next track.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.next = function () {
        var index = this._indexTrack + 1;

        if (index >= this.playlist.length) {
            return this;
        }

        this.setTrack(index);

        if (this._playing) {
            this.play();
        }

        return this;
    };

    /**
     * Jumps to the previous track.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.prev = function () {
        var index = this._indexTrack - 1;

        if (index < 0) {
            return this;
        }

        this.setTrack(index);

        if (this._playing) {
            this.play();
        }

        return this;
    };

    /**
     * Defines the volumen as a value from 0 to 100.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.volume = function (value) {

        this._player.volume = value / 100;

        return this;
    };

    /**
     * Mutes an instance of Musique.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.mute = function () {
        this._muted = !this._muted;
        this._player.muted = this._muted;

        return this;
    };

    /**
     * Reset the current track to the initial.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.reset = function () {
        this._indexTrack = this._options.indexTrack;
        this.stop();

        return this;
    };

    /**
     * Toggles between pause and play.
     * @memberof! Musique.prototype
     * @function
     * @returns {musique}
     */
    Musique.prototype.toggle = function () {
        if (this._player.paused) {
            this.play();
        } else {
            this.pause();
        }

        return this;
    };

    /**
     * Defines DOM events to Audio instance.
     * @memberof! Musique.prototype
     * @function
     * @private
     * @returns {musique}
     */
    Musique.prototype._defineEvents = function () {
        var that = this,
            player = this._player;

        player.addEventListener('ended', function (eve) {
            var track = that.currentTrack;

            that.next();

            if (track !== that.currentTrack) {
                that.play();
            } else {
                that.reset();
            }

        });

        return this;
    };

    /**
     * Expose Musique
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('Musique', [], function () {
            return Musique;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = Musique;

    // Default
    } else {
        window.Musique = Musique;
    }

}(this));
