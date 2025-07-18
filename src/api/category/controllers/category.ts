import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
  async countProductsIncludingSubcategories(ctx) {
    const { id } = ctx.params;

    const getSubcategoriesWithCounts = async (categoryId) => {
      const category = await strapi.entityService.findOne('api::category.category', categoryId, {
        populate: {subCategories:true}
      }) as any;

      if (!category) return [];

      const subCounts = [];

      for (const sub of category.subCategories || []) {
        const count = await strapi.entityService.count('api::product.product', {
          filters: {
            category: { id: sub.id }
          }
        });

        const children = await getSubcategoriesWithCounts(sub.id);

        subCounts.push({
          id: sub.id,
          name: sub.name,
          productCount: count,
          children
        });
      }

      return subCounts;
    };

    const collectCategoryIds = async (catId) => {
      const category = await strapi.entityService.findOne('api::category.category', catId, {
        populate: {subCategories: true}
      }) as any;

      let ids = [category.id];
      for (const sub of category.subCategories || []) {
        ids = ids.concat(await collectCategoryIds(sub.id));
      }
      return ids;
    };

    const allCategoryIds = await collectCategoryIds(id);

    const total = await strapi.entityService.count('api::product.product', {
      filters: {
        category: {
          id: {
            $in: allCategoryIds
          }
        }
      }
    });

    const breakdown = await getSubcategoriesWithCounts(id);

    ctx.body = {
      total,
      breakdown
    };
  }
}));
