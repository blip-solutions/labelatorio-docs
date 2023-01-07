

# Model inference API

In order to deploy a model for inference, it needs to be deployed to a Node.
Node is running a docker container.

Each node is running a containerized service [labelatorio-serving-node](https://hub.docker.com/r/blipsolutions/labelatorio-serving-node)  that enables manage the deployment, inference and overall management of the node via Labelator.io. ([source code of the docker conainer](https://github.com/blip-solutions/labelatorio-serve))

If you decide to run node in managed mode (hosting on VM provided by us), the url for the node is generated like this:
`https://api.labelator.io/nodes/{tennant-id}/{node-name}/`


## Integration via REST API
You can integrate with Labelator.io via REST API in any language.
Open API documentation (swagger) is availible here: [Model inference API](/serving-api)


## Integration via Python SDK
Our python client enables you to interact with serving node with ease, in a more pythonic way. Please refer to [python sdk docs](/docs/integrations/python_sdk)

## Authorization
Although it is possible to run model inference in a "public mode" with authenitfication turned of, it is generaly not recomended, especialy if it is accesible from internet.
Each Node has by default generated an unique API token, that can be changed in labelator.io in Node settings.

![Node API token](/assets/images/serving-api-token.png)