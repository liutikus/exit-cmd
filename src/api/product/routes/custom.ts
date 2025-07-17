export default {
  routes: [
    {
      method: 'GET',
      path: '/products/price-range',
      handler: 'product.priceRange',
      config: {
        auth: false,
      },
    },
  ],
};