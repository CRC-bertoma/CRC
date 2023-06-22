module.exports = {
    particles: {
        particles: {
            number: { value: 25 },
            color: { value: ["#444", "1e90ff", "#4169e1"] },
            //verde, verde scuro, verde chiaro["dodgerblue", "#008a3e", "#a3ffce"]
            opacity: {
                value: 0.8,
                random: false,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.5,
                    sync: false,
                },
            },
            size: {
                value: { max: 9, min: 3 },
            },
            line_linked: {
                enable: true,
                distance: 450,
                color: { value: ["#444", "1e90ff", "#4169e1"] },
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                bounce: true,
            },
        },
        interactivity: {
            detect_on: "parent",
            // activate
            events: {
                onhover: {
                    enable: true,
                    mode: ["grab"],
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 500,
                    links: { opacity: 0.7 },
                },
            },
        },
        retina_detect: true,
    },
};