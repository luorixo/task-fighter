import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        image: "url('https://github.com/luorixo/portfolio/blob/main/client/src/assets/Images/background1.JPG?raw=true')",
        size: "cover",
        color: "#000", // this sets a background color for the canvas
        opacity: 1,
        repeat: "no-repeat",
        position: "50% 50%",
      },   
      
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "bubble", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 15,
        },
        shape: {
          type: 'image',
          image: {
            src: "https://github.com/luorixo/portfolio/blob/main/client/src/assets/Images/leaf.png?raw=true",
            width: 95,
            height: 55,
          }
        },
        
        move: {
          enable: true, // enabling this will make particles move in the canvas
          direction: 'bottom-right',
          speed: { min: 2, max: 4 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.2, max: 0.8 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 8, max: 35 }, // let's randomize the particles size a bit
        },
        
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;