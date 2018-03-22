var metric, imperial;

metric = {

    mg: {
        name: {
          singular: 'Milligram',
          plural: 'Milligrams'
        },
        to_anchor: 1 / 1000
    },
    g: {
        name: {
          singular: 'Gram',
          plural: 'Grams'
        },
        to_anchor: 1
    }
};
imperial = {
    oz: {
        name: {
        singular: 'Ounce',
        plural: 'Ounces'
        },
        to_anchor: 1 / 16
    },
    lb: {
        name: {
            singular: 'Pound',
            plural: 'Pounds'
        },
        to_anchor: 1
    }
};

module.exports = {
    metric,
    imperial,
    _anchors: {
      metric: {
        unit: 'g',
        ratio: 1 / 453.592
      },
      imperial: {
        unit: 'lb',
        ratio: 453.592
      }
    }
  };

