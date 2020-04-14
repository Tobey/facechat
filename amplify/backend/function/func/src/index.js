var OpenTok = require('opentok'),
opentok = new OpenTok("46531532", "19b32dcabb4d245a0347dfc5091b0a57c4ba5788");

const perSession = '2_MX40NjUzMTUzMn5-MTU4Njg3ODIxMTQxNX5YNVM0WmxmMzZMc3BycU4zQ1hKcVhsRnB-fg'

const getOpenTokSession = (ctx) => {
    console.log(ctx)
    return perSession
  }

  const getPublishToken = (ctx) => {
    //  Use the role value appropriate for the user:
    var tokenOptions = {};
    // publisher or subscriber
    tokenOptions.role = "publisher";
    tokenOptions.data = "username=bob";
    // Generate a token.
    let token = opentok.generateToken(getOpenTokSession(), tokenOptions);
    console.log(token);
    return token
  }
  /**
  * Using this as the entry point, you can use a single function to handle many resolvers.
  */
  const resolvers = {
  Query: {
    getOpenTokSession: ctx => {
      return getOpenTokSession(ctx);
    },
    getPublishToken: ctx => {
      return getPublishToken(ctx);
    },
  }
  }

exports.handler = async (event) => {
  console.log("doing more bits")
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  return "Resolver  thing not found. '" + event.typeName + "' '" + event.fieldName + "'"
}