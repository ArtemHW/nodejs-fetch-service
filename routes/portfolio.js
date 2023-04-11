/**
     * @swagger
     *
     * /api/portfolio/git/contributions:
     *   get:
     *     description: Get my contributions form GitHub
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: ok
	 *     tags:
	 *       - Portfolio
     */

const express = require('express');
const PortfolioRouter = express.Router();
const { gql, GraphQLClient } = require('graphql-request')

const query = gql`
	query($userName: String!) {
		user(login: $userName) {
			contributionsCollection {
				contributionCalendar {
					totalContributions
					weeks {
						contributionDays {
							contributionCount
							date
						}
					}
				}
			}
		}
	}
`;

PortfolioRouter.get('/portfolio/git/contributions', async function(req, res, next) {
  const client = new GraphQLClient(
		'https://api.github.com/graphql',
		{
			headers: {
				Authorization: 'Bearer ' + process.env.GITHUB_KEY
			}
		}
	)
	client.request(query, { userName: 'Dmytro27Ind' })
		.then(result => res.json(result))
		.catch(error => console.log(error));
});

module.exports = PortfolioRouter;