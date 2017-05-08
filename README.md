# stoic-chrome-node

The backed API to retrieve a random Stoicism quote for the [stoic-chrome-extension](https://github.com/drewsmith/stoic-chrome-extension).

## Response
#### Content-Type
```
application/json
```
#### Body
```
{
  passage: 'We suffer more in imagination than reality',
  attribution: 'Seneca'
}
```

## Deployment

The intended deployment is through AWS API Gateway / AWS Lamda.

```
serverless deploy --stage production
```
