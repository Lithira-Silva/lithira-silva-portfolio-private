# Git Commands for Portfolio Backup

## Daily Workflow
```bash
# Check status of files
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Updated header navigation"

# Push to GitHub
git push

# Check commit history
git log --oneline
```

## Recovery Commands
```bash
# Clone the repository (if starting fresh)
git clone https://github.com/yourusername/lithira-silva-portfolio.git

# Pull latest changes (if repository exists locally)
git pull

# Check what branch you're on
git branch

# Switch to main branch
git checkout main
```

## Useful Commands
```bash
# See what files changed
git diff

# Undo changes to a file (before commit)
git checkout -- filename

# Create a new branch for experiments
git checkout -b new-feature

# Merge changes back to main
git checkout main
git merge new-feature
```
