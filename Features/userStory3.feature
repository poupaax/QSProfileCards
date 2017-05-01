Feature: User search for the tags
As an user
I want to search for tags
So that I can view first the most relevant informations

Scenario: Found members with searched tags
Given exists members in application
When the user search for tags
Then shows information which members contain the searched tags

Scenario: Don't found members with searched tags
Given exists members in application
When the user search for tags
Then shows information that no members was found with searched tags

Scenario: Search members with multiple tags (simultaneous &&)
Given exists members in application
When the user wants to find members with more than one tag at a time
Then shows information in each of the members of how many tags were found in it (ex: 4/5)

Scenario: Search members with multiple tags (or ||)
Given exists members in application
When the user wants to find members that fit in at least one of the searched tags
Then shows information in each of the profile on the tags found