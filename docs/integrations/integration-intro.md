---
id: integration-intro
sidebar_position: 0
---

# General integration setup

The most common integration setup is as follows:

- Our master application collects data that is to be predicted and prompts a dedicated [Serving node](../tutorial/serving.md). We can also pass some metadata to the node, particularly the `key` field, which we can use to store our internal record id.
We can [use the Python SDK to call the predictions](https://colab.research.google.com/drive/1vb1Bunt5WcTmI8LSaRf7AUnlY_I5V-pb#scrollTo=bst9BXW-f7UP), or via rest api [/predict](/serving-api#operation/predict_predict_post) endpoint

- Upon receiving the response, we make a decision or take action based on the predicted label. We should also save the prediction or action, if we need to determine whether a change or revocation of the action (if possible) is necessary.

- We have set up a [modified webhook endpoint](/docs/integrations/webhooks#modified-callback) which will inform us when a user reviews the label (for Model-review handling type) or makes a decision if the model was uncertain (Manual handling type). Upon reviewing the webhook notification, we will correct the data or take the appropriate action. The webhook message body will contain the `key`, which helps us identify the record.


