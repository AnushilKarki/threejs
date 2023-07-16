import * as THREE from 'three';
// create a buffer with some data
const sizeX = 64;
const sizeY = 64;
const sizeZ = 64;

const data = new Uint8Array( sizeX * sizeY * sizeZ );
let i = 0;

for ( let z = 0; z < sizeZ; z ++ ) {
	for ( let y = 0; y < sizeY; y ++ ) {
		for ( let x = 0; x < sizeX; x ++ ) {
			data[ i ] = i % 256;
			i ++;
		}
	}
}

// use the buffer to create the texture
const Texture = new THREE.Data3DTexture( data, sizeX, sizeY, sizeZ );
Texture.needsUpdate = true;
export default Texture;