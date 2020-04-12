/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authFacechatafae4e5fUserPoolId = process.env.AUTH_FACECHATAFAE4E5F_USERPOOLID
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatGraphQLAPIEndpointOutput = process.env.API_FACECHAT_GRAPHQLAPIENDPOINTOUTPUT
var apiFacechatInfluencerTableName = process.env.API_FACECHAT_INFLUENCERTABLE_NAME
var apiFacechatInfluencerTableArn = process.env.API_FACECHAT_INFLUENCERTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatInfluencerTableName = process.env.API_FACECHAT_INFLUENCERTABLE_NAME
var apiFacechatInfluencerTableArn = process.env.API_FACECHAT_INFLUENCERTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatFanTableName = process.env.API_FACECHAT_FANTABLE_NAME
var apiFacechatFanTableArn = process.env.API_FACECHAT_FANTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatInfluencerTableName = process.env.API_FACECHAT_INFLUENCERTABLE_NAME
var apiFacechatInfluencerTableArn = process.env.API_FACECHAT_INFLUENCERTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatFanTableName = process.env.API_FACECHAT_FANTABLE_NAME
var apiFacechatFanTableArn = process.env.API_FACECHAT_FANTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatFacechatSessionTableName = process.env.API_FACECHAT_FACECHATSESSIONTABLE_NAME
var apiFacechatFacechatSessionTableArn = process.env.API_FACECHAT_FACECHATSESSIONTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT

Amplify Params - DO NOT EDIT */

var OpenTok = require('opentok'),
opentok = new OpenTok("46531532", "19b32dcabb4d245a0347dfc5091b0a57c4ba5788");

const getPublishToken = (sessionId) => {
  console.log("Session ID: " + sessionId);
  //  Use the role value appropriate for the user:
  var tokenOptions = {};
  // publisher or subscriber
  tokenOptions.role = "publisher";
  tokenOptions.data = "username=bob";
  // Generate a token.
  let token = opentok.generateToken(sessionId, tokenOptions);
  console.log(token);
  return token
}

const createOpentokSession = () => {

  opentok.createSession(function(err, session) {
    if (err) return console.log(err);
    return session.sessionId
  });
}

const getInfluencer = (query) => {
  console.log(query)
  return {'i am': "an influencer"}
}
/**
* Using this as the entry point, you can use a single function to handle many resolvers.
*/
const resolvers = {
Query: {
  getInfluencer: ctx => {
    return getInfluencer(ctx);
  },
},
Post: {
  },
}

exports.handler = async (event) => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
}