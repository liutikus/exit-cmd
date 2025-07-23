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

export interface DetailsFeaturesInfo extends Struct.ComponentSchema {
  collectionName: 'components_details_features_infos';
  info: {
    displayName: 'Features Info';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface DetailsProductFeatures extends Struct.ComponentSchema {
  collectionName: 'components_details_product_features';
  info: {
    displayName: 'Product Features';
  };
  attributes: {
    description: Schema.Attribute.Component<'details.features-info', true> &
      Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'details.details-info': DetailsDetailsInfo;
      'details.features-info': DetailsFeaturesInfo;
      'details.memory-option': DetailsMemoryOption;
      'details.product-details': DetailsProductDetails;
      'details.product-features': DetailsProductFeatures;
    }
  }
}
