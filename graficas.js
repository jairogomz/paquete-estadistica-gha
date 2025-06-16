const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');

const width = 800;
const height = 600;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

async function generarGrafico(nombreArchivo, labels, data) {
  const configuration = {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Datos',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    }
  };

  const image = await chartJSNodeCanvas.renderToBuffer(configuration);
  fs.writeFileSync(nombreArchivo, image);
}

module.exports = { generarGrafico };