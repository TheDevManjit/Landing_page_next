import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, useMatcapTexture } from '@react-three/drei';

function Logo() {
  const meshRef = useRef<any>();
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Center>
      <mesh ref={meshRef}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          TEACHMARK
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </mesh>
    </Center>
  );
}

export default function Logo3D() {
  return (
    <Suspense fallback={null}>
      <Logo />
    </Suspense>
  );
}