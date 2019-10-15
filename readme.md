# gatsby-source-rss-cat

Source plugin for pulling data into Gatsby from rss feed, grouped in categories.

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    {
      resolve: `gatsby-source-rss-cat`,
      options: { category: `technology`, feeds: [`https://news.ycombinator.com/rss`, `http://feeds.feedburner.com/TechCrunch/startups`] },
    },
  ],
}
```

## Plugin options

- **category**: category that your feeds are related too
- **feeds**: an array of url paths to the rss feeds

## How to query your rss feed data using GraphQL

Below is a sample query for fetching all rss feed document nodes for this plugin.
```graphql
query {
  allRssFeedCatDocuments {
    edges {
      node {
        ...
      }
    }
  }
}
```
