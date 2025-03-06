import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const BgParticals = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: ["#4dba87", "#3da876"],
          },
          links: {
            color: "#4dba87",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
            triangles: {
              enable: false
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.8,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 80,
            limit: 80
          },
          opacity: {
            value: 0.25,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false
            }
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.4,
            },
          },
        },
        retina_detect: true
      }}
    />
  );
};

export default BgParticals;
