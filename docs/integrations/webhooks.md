

# Webhook callbacks

You can setup callback for each project separately. To setup callbacks naviagate to Integration/Webhooks section
There you can define URLs for different actions there:
![Webhooks](/assets/images/webhooks-ui.png)

You can also define any kind of Headers here, that sould be included in the request. This is can be useful for
authentification (currently only constant authentification methods like Basic or Api token are supported).

## Ingested callback

Ingested callback (if set) is a POST request that is called on each 100 records that were inserted/added into project. Same request is called when a document has been updated (overwritten).

An example request body after a document has been ingested:

```json
{
    "docs":[
            {
                "id":"{guid}",
                "key":"{what ever key was provided in ingested data}"
            },
        ...
        ]
}
```

## Modified callback

Modified callback (if set) is a POST request that is called on each 100 records that were modified in project. 

Payload in body is in this shape:


```json
{
    "modified":[
            {
                "id":"{guid}",
                "key":"{what ever key was provided in ingested data}",
                "{modified_property}":"{new value}"
            },
        ...
        ]
}
```

modified_property is usualy 

`"labels":["theLabel"]`

or 

`"predicted_labels":["theLabel"]`

if prediction was aplied by a model

for similarity labels:
```json
{
    "modified":[
            {
                "similar_doc_id":"{doc_id}", 
                "similar_doc_key":"{doc_key}",
                "similarity_label":"{similarity_label}"
            },
        ...
        ]
}
```


## Excluded callback

Excluded callback (if set) is a POST request that is called on each 100 records that were excluded from project

Payload in body is in this shape:


```json
{
    "docs":[
            {
                "id":{guid},
                "key":{what ever key was provided in ingested data}
            },
        ...
        ]
}
```


