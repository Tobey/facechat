/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInfluencer = /* GraphQL */ `
  subscription OnCreateInfluencer($owner: String!) {
    onCreateInfluencer(owner: $owner) {
      id
      name
      username
      owner
      sessionId
      price
    }
  }
`;
export const onUpdateInfluencer = /* GraphQL */ `
  subscription OnUpdateInfluencer($owner: String!) {
    onUpdateInfluencer(owner: $owner) {
      id
      name
      username
      owner
      sessionId
      price
    }
  }
`;
export const onDeleteInfluencer = /* GraphQL */ `
  subscription OnDeleteInfluencer($owner: String!) {
    onDeleteInfluencer(owner: $owner) {
      id
      name
      username
      owner
      sessionId
      price
    }
  }
`;
export const onCreateFan = /* GraphQL */ `
  subscription OnCreateFan($owner: String!) {
    onCreateFan(owner: $owner) {
      id
      name
      username
      owner
    }
  }
`;
export const onUpdateFan = /* GraphQL */ `
  subscription OnUpdateFan($owner: String!) {
    onUpdateFan(owner: $owner) {
      id
      name
      username
      owner
    }
  }
`;
export const onDeleteFan = /* GraphQL */ `
  subscription OnDeleteFan($owner: String!) {
    onDeleteFan(owner: $owner) {
      id
      name
      username
      owner
    }
  }
`;
export const onCreateFacechatSession = /* GraphQL */ `
  subscription OnCreateFacechatSession($owner: String!) {
    onCreateFacechatSession(owner: $owner) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
      }
      fanId
      fan {
        id
        name
        username
        owner
      }
      duration
      owner
    }
  }
`;
export const onUpdateFacechatSession = /* GraphQL */ `
  subscription OnUpdateFacechatSession($owner: String!) {
    onUpdateFacechatSession(owner: $owner) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
      }
      fanId
      fan {
        id
        name
        username
        owner
      }
      duration
      owner
    }
  }
`;
export const onDeleteFacechatSession = /* GraphQL */ `
  subscription OnDeleteFacechatSession($owner: String!) {
    onDeleteFacechatSession(owner: $owner) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
      }
      fanId
      fan {
        id
        name
        username
        owner
      }
      duration
      owner
    }
  }
`;
