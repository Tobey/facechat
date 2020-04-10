/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authFacechatafae4e5fUserPoolId = process.env.AUTH_FACECHATAFAE4E5F_USERPOOLID
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT
var apiFacechatGraphQLAPIEndpointOutput = process.env.API_FACECHAT_GRAPHQLAPIENDPOINTOUTPUT
var apiFacechatTaskTableName = process.env.API_FACECHAT_TASKTABLE_NAME
var apiFacechatTaskTableArn = process.env.API_FACECHAT_TASKTABLE_ARN
var apiFacechatGraphQLAPIIdOutput = process.env.API_FACECHAT_GRAPHQLAPIIDOUTPUT

Amplify Params - DO NOT EDIT */

var OpenTok = require('opentok'),
opentok = new OpenTok("46531532", "19b32dcabb4d245a0347dfc5091b0a57c4ba5788");

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
