# Extrack - Tracking your expenses better

[![Netlify Status](https://api.netlify.com/api/v1/badges/0158b4af-a1a9-4560-b368-ba5d0eb254c4/deploy-status)](https://app.netlify.com/sites/extrack/deploys)

## Prerequisites

To run this project you need one of two package managers below:

- [NodeJS w/ NPM](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/getting-started)

1. Install both packages and open your terminal.
2. Run these commands `npm -v`, `yarn -v` & `node -v`
3. You should see all versions numbers.

## How to

### Clone project, install dependencies and run local

#### Cloning

1. Open Git Bash or your favorite terminal
2. Change the current working directory to the location where you want the cloned directory to be made.
3. Paste `git clone https://github.com/hudsonr2018/extrack.git` and press enter.
4. You should read a success message when the process is finished.

#### Installing dependencies

1. Access the project folder via terminal and run: `npm install` or `yarn install`
2. If you have problems to install the project dependecies, try using `sudo` (MAC/LINUX): `$ sudo npm install`
3. You should read a success message when the process is finished.

#### Running locally

1. Access the project folder via terminal
2. If you've installed npm, just run `npm start`. In yarn case run `yarn start`
3. The script will compile the files and it'll be available on [localhost:3000](http://localhost:3000)
4. We've done here! Enjoy yourself!

### Managing branches and deploy (collaborators)

#### Switching to develop branch and update

1. Open Git Bash and access the project folder
2. Type `git checkout develop` and press enter
3. Type `git pull origin develop` to update the develop branch.
4. You should see some insertions or 'Already up to date' message.

#### Create a new branch from develop and push changes (feature, fix or bug) | Use Gitbash

1. First you should be in updated 'develop' branch as you saw before.
2. Think in the type of your change and give it a name.
3. Type `git checkout -b fix/add-space-in-menu`
4. You will be redirected for the new branch _fix/add-space-in-menu_ made from develop branch.
5. Now you can do all your changes (e.g. add padding-bottom space).
6. After you finished the menu fix you add the modified files in git track with `git add .`
7. You'll see that all your changed files will be in git fork.
8. Now you need to commit your files, just use `git commit -m "commit message"`
9. It's time to push your commit `git push`
10. You should see a message from git in your terminal, just copy all the line paste in gitbash and press enter.
11. You'll see that your pull request is available to be opened in Github.
12. Go to [Extrack PRs](https://github.com/hudsonr2018/extrack/pulls) and open your pull request to **develop** branch.
13. Tell all collaborators about the PR and **only after that** you can merge.
14. After you merged your changes, visit [Extrack-dev](https://extrack-dev.netlify.com)
15. This live link show you all changes in develop branch.
16. Is everything ok (Mobile and Desktop)? If yes, you can create a new pull request from **develop** to **master**.
17. All collaborators know about this PR, this time you can merge **(if you and others already did all tests)**.
18. After you merge in master Netlify will build the project and you can visit [Extrack](https://extrack.netlify.com)
19. Congratz! We've done here!

#### Questions or suggestions?

Email: hudson.santosr@gmail.com

Website: www.hudsonramos.com.br

Phone: +55 (21)970071630
