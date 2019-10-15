var FeedRetrieval = require("./feed_retrieval");
var FeedNode = require("./feed-node");

var feedRetrieval = new FeedRetrieval();

exports.sourceNodes = async ({ actions }, pluginOptions ) => {
    const { createNode } = actions
    
    const category = pluginOptions.category;
    const feeds = pluginOptions.feeds;

    feeds.forEach(feed => {
        feedRetrieval.request(feed).then(data => {
            data.forEach(d => {
                d.category = category;
                const feedNode = FeedNode(d);
                createNode(feedNode);
            })
        })
    });

    return
  }