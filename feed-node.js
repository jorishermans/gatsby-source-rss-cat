import createNodeHelpers from 'gatsby-node-helpers';
const {
  createNodeFactory
} = createNodeHelpers({
  typePrefix: `Rss`
});
const FEED_TYPE = `FeedCat`;
export const FeedNode = createNodeFactory(FEED_TYPE);