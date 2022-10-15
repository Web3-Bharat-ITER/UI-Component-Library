import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
// const geometry = new THREE.BoxBufferGeometry(1,1,1,4,4,4)
const geometry = new THREE.BufferGeometry()

const count =50
const positionsayrray = new Float32Array(count *3 *3)
for(let i =0;i<count*3*3;i++)
{
    positionsayrray[i]=(Math.random()-0.5 )*2
} 
const positionsAttribute = new THREE.BufferAttribute(positionsayrray,3)
geometry.setAttribute('position',positionsAttribute)



const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00,
    wireframe: true
 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 600,
    height: 600
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width =600
    sizes.height = 600

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)
    mesh.rotation.y += 0.01;

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()