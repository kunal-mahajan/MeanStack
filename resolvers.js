export default {

  Team: {
    team_scores: (parent, args, context, info) => parent.getTeamScore()
  },

  // TeamScore: {
  //   dimensions: (parent, args, context, info) => parent.getDimensions({ where, include: [{ all: true, nested: true }] })
  // },

  Query: {
    teamScores: (parent, args, { db }, info) => db.scores_of_team.findAll(),
    teams: (parent, args, { db }, info) => db.teams.findAll(),
    dimensions: (parent, args, { db }, info) => db.conf_dim.findAll(),
    contracts: (parent, args, { db }, info) => db.contracts.findAll(),
    userScores: (parent, args, { db }, info) => db.scores_of_user.findAll(),
    users: (parent, args, { db }, info) => db.users.findAll(),

    teamScore: (parent, args, { db }, info) => db.scores_of_team.findByPk(id),
    team: (parent, args, { db }, info) => db.teams.findByPk(id),
    dimension: (parent, args, { db }, info) => db.conf_dim.findByPk(id),
    contract: (parent, args, { db }, info) => db.contracts.findByPk(id),
    userScore: (parent, args, { db }, info) => db.scores_of_user.findByPk(id),
    user: (parent, args, { db }, info) => db.users.findByPk(id),
  }
};
