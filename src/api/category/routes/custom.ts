export default {
  routes: [
    {
      method: 'GET',
      path: '/categories/:id/product-count',
      handler: 'category.countProductsIncludingSubcategories',
      config: {
        auth: false
      }
    }
  ]
};