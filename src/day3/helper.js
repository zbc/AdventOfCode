function findCrossPart1(wire1, wire2) {
  let crosses = []
  for (let i = 0; i < wire1.length; i++) {
    for (let j = 0; j < wire2.length; j++) {
      if (wire1[i][0] === wire2[j][0] && wire1[i][1] === wire2[j][1] && wire1[i][1] !== 0) {
        crosses.push(Math.abs(wire1[i][2]) + Math.abs(wire1[i][3]))
      }
    }
  }
  crosses.sort((a, b) => a - b)
  return crosses[0]
}

function findCrossPart2(wire1, wire2) {
  let crosses = []
  for (let i = 0; i < wire1.length; i++) {
    for (let j = 0; j < wire2.length; j++) {
      if (wire1[i][0] === wire2[j][0] && wire1[i][1] === wire2[j][1] && wire1[i][1] !== 0) {
        crosses.push(wire1[i][2] + wire2[j][2])
      }
    }
  }
  crosses.sort((a, b) => a - b)
  return crosses[0]
}

function storePathInfoPart1(wire) {
  let points = [[0, 0, 0, 0]];
  wire.forEach(point => {
    const dir = point[0];
    const step = point.slice(1)
    switch (dir) {
      case 'R':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0] + 1,
            points[points.length - 1][1],
            points[points.length - 1][2] + 1,
            points[points.length - 1][3],

          ])
        }
        break;

      case 'L':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0] - 1,
            points[points.length - 1][1],
            points[points.length - 1][2] - 1,
            points[points.length - 1][3],
          ])
        }
        break;

      case 'U':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0],
            points[points.length - 1][1] + 1,
            points[points.length - 1][2],
            points[points.length - 1][3] + 1,
          ])
        }
        break;

      case 'D':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0],
            points[points.length - 1][1] - 1,
            points[points.length - 1][2],
            points[points.length - 1][3] - 1,
          ])
        }
        break;
    }
  });
  return points
}

function storePathInfoPart2(wire) {
  let points = [[0, 0, 0]];
  wire.forEach(point => {
    const dir = point[0];
    const step = point.slice(1)
    switch (dir) {
      case 'R':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0] + 1,
            points[points.length - 1][1],
            points[points.length - 1][2] + 1,

          ])
        }
        break;

      case 'L':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0] - 1,
            points[points.length - 1][1],
            points[points.length - 1][2] + 1,
          ])
        }
        break;

      case 'U':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0],
            points[points.length - 1][1] + 1,
            points[points.length - 1][2] + 1,
          ])
        }
        break;

      case 'D':
        for (let i = 0; i < Number(step); i++) {
          points.push([
            points[points.length - 1][0],
            points[points.length - 1][1] - 1,
            points[points.length - 1][2] + 1,
          ])
        }
        break;
    }
  });
  return points
}

export { storePathInfoPart1, storePathInfoPart2, findCrossPart1, findCrossPart2 }