# A-Frame Glow Component

Glow component for [A-Frame](https://aframe.io) to add on any entities.

## Demo

![Alt text](static/screenshot.png)

#### [Live demo](https://etiennepinchon.github.io/aframe-refraction/)

## Getting Started

```html
<a-entity refraction></entity>
```

To turn it off:

```html
<a-entity refraction="enabled:false"></entity>
```

Properties:

#### Ratio (default: 0.985, min: 0.912, max: 1)

```html
<a-entity refraction="ratio:0.935"></entity>
```

#### Reflectivity (default: 0.9, min: 0.6, max: 1.2)

```html
<a-entity refraction="reflectivity:1.1"></entity>
```

## Want to make some changes to it?

### Installation

First make sure you have Node installed.

On Mac OS X, it's recommended to use [Homebrew](http://brew.sh/) to install Node + [npm](https://www.npmjs.com):

    brew install node

To install the Node dependencies:

    npm install


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    PORT=8000 npm start


## Acknowledgement

Based on the work of @stemkoski for ThreeJS:
http://stemkoski.github.io/Three.js/Shader-Glow.html

## License

Distributed under an [MIT License](LICENSE).
