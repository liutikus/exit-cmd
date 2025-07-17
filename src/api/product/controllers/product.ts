import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) =>  ({

  async priceRange(ctx) {
    try {
      const results = await strapi.db.query('api::product.product').findMany({
        select: ['start_price'],
      });

      const prices = results.map((p) => p.start_price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      ctx.body = { minPrice, maxPrice };
    } catch (err) {
      ctx.throw(500, 'Failed to get price range');
    }
  }
}));
