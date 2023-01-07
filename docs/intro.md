---
sidebar_position: 0
---

# Introduction

Welcome to Labelator.io documentation. 

Labelator.io is a tool that enables you to **annotate your data** and **build and deploy** custom ML models in a few minutes, without any coding skills.

It helps you label the initial training data much faster due to **similarity-based bulk labeling**. 

After you have labeled enough data to train a model, Labelator.io helps you host and run the model with continuous training, automatic identification of special cases and new types of data, and an overall train-deploy-review-improve iteration.


*Lets get started...*

## Basic concepts

### Project

A project is a package that wraps your data (dataset), models and all underlying settings for a particular **ML task**.

[Read more about projects](docs/tutorial/create-a-project.md)

### Models

Model is a trained AI that can solve your specific ML task. You can have multiple versions of models in a project. 

Model is typically trained on the data of the project, but you can include data from another project too.

Each model can be deployed for inference (hosting) to one of your **Serving node**

Model can be trained to predict one or more of many possible labels, answer a question, or find the most similar record to a phrase or another record.

[Read more about model training](docs/tutorial/train-a-model.md)

### Serving nodes

In order to use our model (so we can ask it to predict the labels, answer the questions, etc.), we need to host it somewhere. 

You can download the model binary files and host it yourself, but Labelator.io can greatly simplify this. All you need to do is create a **Serving node** and define which model should be hosted there. Once the node is up and running, you can test it and/or use it for your production use case by prompting it via REST API or with our Python SDK.

Labelator.io also offers a unique way to run your models in production and continuously collect new/previously unseen data, review the prediction, and retrain the model and deploy the new version. This way, the AI is continuously improving. Labelator.io helps you automate the process of collecting and retraining on data where the model is not very confident or good. 

[Read more about serving models](docs/tutorial/train-a-model.md)



