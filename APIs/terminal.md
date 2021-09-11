## Terminal commands

- `killall node` (kills all active node terminals; could only be applicable for Apple PCs?)
- `curl` {https://api.github.com/users} (example of a curl request; returns newest 30 GH users)

## Git commands
- `git log` (shows the last commit history; sorted by time/date committed)
- `git revert` {601e2affb5fca3addd898cb09ef950c562338823} (601..etc is a placeholder commit hash; reverts a commit by a particular hash value; use git log to get desired hash)
- `git revert HEAD` (reverts the most recent commit; more useful)

## FYI's
- all `{values}` above are meant to NOT include the curly brackets when executing the corresponding CLI command
- remember to add `.DS_Store` to .gitignore file (this file gets auto created in Macs; stores directory's attributes)
- check box `Require pull request reviews` before merging to main in GitHub (for multiple collab apps/branch protection rule)
- check box `Include administrator` to prevent overriding auto-merges by owner of repo
- `Manage access` is how you add other collaborators to project

> **Important:** use git branch to ensure you do NOT work in main. If you accidentally do and it has code that needs to be pushed create a new branch and push that branch to main for a review on GitHub

- every time you push a branch (`git push origin {feature-branch-name}`); you must create a pull request, then someone else goes in and reviews/resolves any conflicting files (share screen when doing this if remote)
- the final step for a branch push is clicking the `Merge pull request` button; after this main is updated and everyone else can then do the following: `git checkout main`, `git pull`, then return to branch your currently working w/`git checkout {current-branch-name}`