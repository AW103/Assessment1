/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a version control software. It allows the user to create a local repository to save and update variations in any set of files efficiently and conveniently."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHub = "GitHub is a platform that works in tandem with git to house and manage repositories at remote/public level. Among other features, GitHub primarily allows for repositories to be viewed, copied, shared, and edited in a convenient, collaborative environment."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "<git init> is a command to your computer to create (initialize) a local repository of the current directory."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "<git clone> is used to create a clone of a repository."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "If the repository exists, <git status> is used to see the state of the staging area. This shows you which files in the current directory have been added/midified, and which files are not being tracked."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "<git add> allow you to add files and changes to the staging area of a repository."
let gitAddCode = "<git add .>"

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "<git commit> is used to save whatever is in your staged area. It's like a save point: it does not update information until run again."
let gitCommitCode = "<git commit -m 'initial commit'>"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "<git push> is used to push the most recent commit of a local repository to a remote repository like GitHub."