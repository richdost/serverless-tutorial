export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-uploads-dost",
    BUCKET_SERVING_APP: "notes-app-client-dost"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://me8qgr9yuf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KMCNF3CM3",
    APP_CLIENT_ID: "5jpp8skukgnbcconpjovl1vrfv",
    IDENTITY_POOL_ID: "us-east-1:e62abd05-5235-405b-9b52-326daaf922f6"
  }
};
