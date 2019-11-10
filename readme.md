# Welcome to Champria

1. About
2. File Stucture
3. The Front
4. The Back

## About

Champria is a social platform for aspiring professional and professional to connect users with players and teams.
The players are able to browse and message players. The more they customize thier account, the more they likely they will be found and connected. Also, upload files to show to team captians or potential teams.

Team members will be able to access their teams page and view the teams calendar.

Team Captains Can manage their teams, edit member cards with notes, add, remove members, and manage the schedule. They will have a group chat functionality that they will automatically be the head of. They can send scrim invites to other teams, and team invites.

Any user can browse the site, filter teams and players, but cannot access the profile without logging in or signing up.

## File Stucture

This is the folder structure mainly for the front-end

### src

#### components

- Settings (settings for players and teams)
- players (display player profile)
- search (displays and filters players)
- searchteams (displays and filters teams)
- splash (Main Page)
- teams (team data)
- topandbottom (display user info for navbar)

#### services

- authorization (login and register forms)
- chat(chat system for player and team)
- schedule (team calendar system)
- teamManagement (edit team member cards)

## The Front

the front end contains the routes to move around the site. Running off of react, the db generated id slug will be how the data moves around the site ex.
"player/:playerid/profile"
"player/:playerid/chat"
"player/:playerid/settings"

There will be components that will take the endpoints of the backend that are connected to the db.

## The Back

The back end should have 5 main clusters:

1. Player Athuentication
2. Team Authenitcation
3. Chat(onoe to one and group)
4. Calendar/Scheduling system
5. file management system

I am working with JSON for the front end to manage the data for the front end
these JSON files have the structure of the data that I feel should be in the clusters,

DUMMY_DATA.json - player data

TEAM_DATA.json - team data

I have not created one for the chat cluster or the scheduling yet, but the file management is in the team json file.
