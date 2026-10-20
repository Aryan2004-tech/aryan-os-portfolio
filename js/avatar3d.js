/* ARYAN.OS V13 — lightweight Three.js holographic scene. The current portrait is not a rigged 3D model. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

const canvas = document.querySelector('#avatar-3d-canvas');
const stage = document.querySelector('.orbital');
if (canvas && stage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    console.warn('3D avatar effects unavailable; keeping the portrait fallback.', error);
  }
  if (renderer) {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 8.4);

    const group = new THREE.Group();
    scene.add(group);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x72f2c1, wireframe: true, transparent: true, opacity: 0.48
    });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.012, 8, 150), ringMaterial);
    ringA.rotation.set(0.9, 0.18, -0.32);
    group.add(ringA);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.009, 8, 140), new THREE.MeshBasicMaterial({
      color: 0x69aaff, wireframe: true, transparent: true, opacity: 0.42
    }));
    ringB.rotation.set(-0.62, 0.5, 0.28);
    group.add(ringB);

    // A low-opacity wireframe ellipsoid creates a holographic 3D volume behind the portrait.
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.25, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0x72f2c1, wireframe: true, transparent: true, opacity: 0.105 })
    );
    halo.scale.set(0.83, 1.13, 0.58);
    halo.position.z = -0.3;
    group.add(halo);

    const particleCount = 260;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.4 + Math.random() * 1.35;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.7;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({
      color: 0x9bffe0, size: 0.022, transparent: true, opacity: 0.75, sizeAttenuation: true
    }));
    group.add(particles);

    let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (finePointer && !reduced) {
      stage.addEventListener('pointermove', (event) => {
        const rect = stage.getBoundingClientRect();
        targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.48;
        targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.32;
      });
      stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width * 1.16));
      const height = Math.max(1, Math.round(rect.height * 1.16));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    resize();

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;
      group.rotation.y = pointerX + Math.sin(t * 0.22) * 0.06;
      group.rotation.x = -pointerY + Math.cos(t * 0.18) * 0.035;
      ringA.rotation.z += 0.0009;
      ringB.rotation.y += 0.0011;
      particles.rotation.y -= 0.00055;
      renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('pagehide', () => {
      resizeObserver.disconnect();
      renderer.dispose();
      particleGeometry.dispose();
      ringMaterial.dispose();
    }, { once: true });
  }
}
