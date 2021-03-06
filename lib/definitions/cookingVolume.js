var metric, imperial;

metric = {
  ml: {
    name: {
      singular: 'Milliliter',
      plural: 'Milliliters'
    },
    to_anchor: 1/1000
  },
    l: {
    name: {
      singular: 'Liter',
      plural: 'Liters'
    },
    to_anchor: 1
  }
};

imperial = {
  tsp: {
    name: {
      singular: 'Teaspoon',
      plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  },
  Tbs: {
    name: {
      singular: 'Tablespoon',
      plural: 'Tablespoons'
    },
    to_anchor: 1/2
  },
  'fl-oz': {
    name: {
      singular: 'Fluid Ounce',
      plural: 'Fluid Ounces'
    },
    to_anchor: 1
  },
  cup: {
    name: {
      singular: 'Cup',
      plural: 'Cups'
    },
    to_anchor: 8
  },
  pnt: {
    name: {
      singular: 'Pint',
      plural: 'Pints'
    },
    to_anchor: 16
  },
  qt: {
    name: {
      singular: 'Quart',
      plural: 'Quarts'
    },
    to_anchor: 32
  },
  gal: {
    name: {
      singular: 'Gallon',
      plural: 'Gallons'
    },
    to_anchor: 128
  }
};

module.exports = {
  metric,
  imperial,
  _anchors: {
    metric: {
      unit: 'l',
      ratio: 33.8140226
    },
    imperial: {
      unit: 'fl-oz',
      ratio: 1/33.8140226
    }
  }
};

