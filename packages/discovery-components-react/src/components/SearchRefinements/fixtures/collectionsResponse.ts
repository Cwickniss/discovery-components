import { ListCollectionsResponse } from '@disco-widgets/ibm-watson/discovery/v1';

const collectionsResponse: ListCollectionsResponse = {
  collections: [
    {
      name: 'deadspin',
      description: 'source of obsenity',
      language: 'en',
      collection_id: 'deadspin9876',
      project_id: 'ada8c1c4-dbf9-4992-b4d0-eca6eab59d6f',
      created: '2019-09-30T14:41:31.428Z',
      updated: '2019-09-30T14:43:24.625Z',
      document_counts: {
        uploaded: 0,
        available: 10,
        converted: 0,
        indexing: 0,
        converting: 0,
        indexing_failures: 0,
        conversion_failures: 0
      }
    },
    {
      name: 'espn',
      description: 'sports using cleaner language',
      language: 'en',
      collection_id: 'espn1234',
      project_id: 'ada8c1c4-dbf9-4992-b4d0-eca6eab59d6f',
      created: '2019-09-30T14:41:31.428Z',
      updated: '2019-09-30T14:43:24.625Z',
      document_counts: {
        uploaded: 20,
        available: 0,
        converted: 0,
        indexing: 0,
        converting: 0,
        indexing_failures: 0,
        conversion_failures: 0
      }
    }
  ]
};

export default collectionsResponse;
