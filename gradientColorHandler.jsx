export const calculateGradientColor = (percentage) => {
    let colorStops = [
        {percent: 0, color: [173, 3, 23]},       // 0%: #3D0C11
        {percent: 33, color: [245, 81, 81]},      // 33%: #D80032
        {percent: 34, color: [237, 204, 101]},   // 34%: #F2F7A1
        {percent: 66, color: [240, 184, 7]},    // 66%: #E9B824
        {percent: 67, color: [167, 211, 151]},   // 67%: #B0D9B1
        {percent: 100, color: [0, 91, 65]}        // 100%: #005B41
    ];

    let segment;
    for (let i = 0; i < colorStops.length - 1; i++) {
        if (percentage >= colorStops[i].percent && percentage <= colorStops[i + 1].percent) {
            segment = i;
            break;
        }
    }

    let color1 = colorStops[segment].color;
    let color2 = colorStops[segment + 1].color;
    let ratio = (percentage - colorStops[segment].percent) / (colorStops[segment + 1].percent - colorStops[segment].percent);

    let color = [
        Math.round(color1[0] + ratio * (color2[0] - color1[0])),
        Math.round(color1[1] + ratio * (color2[1] - color1[1])),
        Math.round(color1[2] + ratio * (color2[2] - color1[2]))
    ];

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

}
