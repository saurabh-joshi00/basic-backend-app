require('dotenv').config();

const express = require('express');

const app = express();

const port = 3000;

const githubData = {
"login": "saurabh-joshi00",
"id": 139209180,
"node_id": "U_kgDOCEwp3A",
"avatar_url": "https://avatars.githubusercontent.com/u/139209180?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/saurabh-joshi00",
"html_url": "https://github.com/saurabh-joshi00",
"followers_url": "https://api.github.com/users/saurabh-joshi00/followers",
"following_url": "https://api.github.com/users/saurabh-joshi00/following{/other_user}",
"gists_url": "https://api.github.com/users/saurabh-joshi00/gists{/gist_id}",
"starred_url": "https://api.github.com/users/saurabh-joshi00/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/saurabh-joshi00/subscriptions",
"organizations_url": "https://api.github.com/users/saurabh-joshi00/orgs",
"repos_url": "https://api.github.com/users/saurabh-joshi00/repos",
"events_url": "https://api.github.com/users/saurabh-joshi00/events{/privacy}",
"received_events_url": "https://api.github.com/users/saurabh-joshi00/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Saurabh Joshi ",
"company": null,
"blog": "",
"location": "India",
"email": null,
"hireable": null,
"bio": "Debugging chaos, compiling peace",
"twitter_username": null,
"public_repos": 22,
"public_gists": 0,
"followers": 2,
"following": 1,
"created_at": "2023-07-11T06:48:23Z",
"updated_at": "2026-06-15T14:04:05Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('saurabhhdotfr');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h2>Landed to the about page</h2>');
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});