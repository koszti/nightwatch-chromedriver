const schema = {
  title: 'Payload Schema for Merchant Search Results Viewed Event',
  description: 'Payload Schema for Merchant Search Results Viewed Event',
  type: 'object',
  properties: {
    event: { type: 'string', pattern: 'Merchant Search Results Viewed' },
    properties: {
      type: 'object',
      properties: {
        category: { type: 'string', pattern: 'Online Cashback' },
        label: { type: 'string', pattern: 'Merchant' },
        page_number: { type: 'number', minimum: 1 },
        search_instance_id: { type: 'string' },
        search_strategy: {
          type: 'string',
          enum: [
            'exact_match',
            'category_prefix_match',
            'category_exact_match',
            'last_resort',
            'most_relevant',
            'prefix_match',
          ] },
        search_term: { type: 'string' },
        merchants: {
          type: 'array',
          items: {
            properties: {
              merchant_id: { type: 'number', minimum: 1 },
              name: { type: 'string' },
            },
            required: ['merchant_id', 'name'],
          },
        },
      },
      required: ['category', 'label', 'page_number', 'search_instance_id', 'search_strategy', 'search_term'],
    },
  },
  required: ['properties'],
};

module.exports = {
  getSchema() {
    return schema;
  },
};

