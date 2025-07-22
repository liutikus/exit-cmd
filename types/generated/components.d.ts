import type { Schema, Struct } from '@strapi/strapi';

export interface DetailsDetailsInfo extends Struct.ComponentSchema {
  collectionName: 'components_details_details_infos';
  info: {
    displayName: 'details_info';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DetailsMemoryOption extends Struct.ComponentSchema {
  collectionName: 'components_details_memory_options';
  info: {
    displayName: 'Memory Option';
  };
  attributes: {
    memory_value: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DetailsProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_product_details';
  info: {
    displayName: 'Product Details';
  };
  attributes: {
    details_info: Schema.Attribute.Component<'details.details-info', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'details.details-info': DetailsDetailsInfo;
      'details.memory-option': DetailsMemoryOption;
      'details.product-details': DetailsProductDetails;
    }
  }
}
