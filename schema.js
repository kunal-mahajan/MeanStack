export default `
  type Team {
    id: ID!
    name: String!
  }

  type Dimension {
    dim_id: ID!
    code: String!
    dim_group: String!
    dim_parent: String!
  }

  type Contract {
    id: ID!
    user_id: Int
    team_id: Int
  }

  type TeamScore {
    id: ID!
    team_id: Int
    dim_id: Int
    score: Float
  }

  type UserScore {
    id: ID!
    user_id: Int
    dim_id: Int
    score: Float
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
  }


  type Query {
    team(id: ID!): Team
    teams: [Team!]!
    dimension(id: ID!): Dimension
    dimensions: [Dimension!]!
    contract(id: ID!): Contract
    contracts: [Contract!]!
    teamScore(id: ID!): TeamScore
    teamScores: [TeamScore!]!
    userScore(id: ID!): UserScore
    userScores: [UserScore!]!
    user(id: ID!): User
    users: [User!]!
  }
`;