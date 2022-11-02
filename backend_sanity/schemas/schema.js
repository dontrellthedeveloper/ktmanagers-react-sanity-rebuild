// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import influencers from './influencers';
import services from './services';
import addservices from './addservices';
import kids from './kids';
import team from './team';
import stats from './stats';
import offer from './offer';
import mascot from "./mascot";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      influencers,
      services,
      addservices,
      kids,
      team,
      stats,
      offer,
      mascot

    /* Your types here! */
  ]),
})
