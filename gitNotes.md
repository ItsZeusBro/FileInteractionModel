# General Info

## Merging vs Rebasing

When you use Git merge, only the target branch is changed. The source branch history remains. 
Advocates of it like it because it preserves the history of a branch. 

Git rebase compresses all the changes into a single “patch.” Then it integrates the patch onto the target branch. 
Unlike merging, rebasing flattens history. It transfers the completed work from one branch to another. 
In the process, unwanted history is eliminated. Advocates of Git rebase like it because it simplifies their review process.
https://www.perforce.com/blog/vcs/git-rebase-vs-git-merge-which-better

## We will be using both:
For now, i'm not really going to slow myself down with feature branches, until people enter their own commits. Then we will begin
the feature branch process. Complicated and unclear history should be queited down with a rebase. History that is important should be
merged. Thats all.
