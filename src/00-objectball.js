function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}


function numPointsScored(playerName){
    const homeGround = gameObject().home;
    const awayGround = gameObject().away;
    // debugger
    if(playerName in homeGround.players){
        return homeGround.players[playerName].points;
    }
    // debugger
    if(playerName in awayGround.players){
        return awayGround.players[playerName].points;
    }
    // debugger
    return "Seems the player you looking for is in FIFA PS5!!! LOL!"
}


function shoeSize(playerName){
    const homeGround = gameObject().home;
    const awayGround = gameObject().away;

    if(playerName in homeGround.players){
        return homeGround.players[playerName].shoe
    }

    if(playerName in awayGround.players){
        return awayGround.players[playerName].shoe
    }
    return "Couldn't find that. Could that be your shoe size by any chance!"
}

function teamColors(teamName){
    const homeGround = gameObject().home;
    const awayGround = gameObject().away;

    if(teamName === homeGround.teamName){
        return homeGround.colors;
    }

    if(teamName === awayGround.teamName){
        return awayGround.colors
    }
    return "That team must be in the PS5 FIFA game."
}

function teamNames(){
    const homeGround = gameObject().home.teamName;
    const awayGround = gameObject().away.teamName;
    return [homeGround, awayGround]
}

function playerNumbers(teamName){
    const homeGround = gameObject().home
    const awayGround = gameObject().away

    let jerseyCollection = [];

    if(teamName === homeGround.teamName){
        for (const player in homeGround.players) {
            jerseyCollection.push(homeGround.players[player].number)
        }
    }
    
    else if(teamName === awayGround.teamName){
        for (const player in awayGround.players){
            jerseyCollection.push(awayGround.players[player].number);
        }
    }
    else{
        return "Sorry the team name doesn't exist."
    }
    return jerseyCollection;
}

function playerStats(playersName){
    const homeGround = gameObject().home;
    const awayGround = gameObject().away;

    
    if(playersName in homeGround.players){
        return homeGround.players[playersName]
    }
    if(playersName in awayGround.players){
        return awayGround.players[playersName]
    }
    
    return "Can't find the player."
}


function bigShoeRebounds() {
    // Access the 'home' and 'away' teams from the gameObject
    const homeTeam = gameObject().home;
    const awayTeam = gameObject().away;

    // Initialize variables to keep track of the largest shoe size and the corresponding player's rebounds
    let largestShoeSize = -1;
    let playerWithLargestShoeSize = null;

    // Iterate through the home team's players
    for (const playerName in homeTeam.players) {
        const player = homeTeam.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoeSize = playerName;
        }
    }

    // Iterate through the away team's players
    for (const playerName in awayTeam.players) {
        const player = awayTeam.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoeSize = playerName;
        }
    }

    // Check if a player with the largest shoe size was found
    if (playerWithLargestShoeSize) {
        // Return the number of rebounds for the player with the largest shoe size
        return (
            homeTeam.players[playerWithLargestShoeSize]?.rebounds ||
            awayTeam.players[playerWithLargestShoeSize]?.rebounds
        );
    }

    // If no player with the largest shoe size was found, return an error message or handle it as needed
    return "Player with the largest shoe size not found";
}


// Function to find the player with the most points
function mostPointsScored() {
    let mostPoints = -1;
    let playerWithMostPoints = '';

    // Iterate through both home and away teams' players
    for (const team of [gameObject().home, gameObject().away]) {
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.points > mostPoints) {
                mostPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }

    return playerWithMostPoints;
}

// Function to find the team with the most points
function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    // Calculate the total points for both home and away teams
    for (const playerName in gameObject().home.players) {
        homeTeamPoints += gameObject().home.players[playerName].points;
    }

    for (const playerName in gameObject().away.players) {
        awayTeamPoints += gameObject().away.players[playerName].points;
    }

    // Determine the winning team based on points
    if (homeTeamPoints > awayTeamPoints) {
        return gameObject().home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
        return gameObject().away.teamName;
    } else {
        return "It's a tie!";
    }
}

// Function to find the player with the longest name
function playerWithLongestName() {
    let longestName = '';
    
    // Iterate through both home and away teams' players
    for (const team of [gameObject().home, gameObject().away]) {
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}


function doesLongNameStealATon() {
    let longestNamePlayer = '';
    let playerWithMostSteals = '';
    
    // Iterate through both home and away teams' players to find the player with the longest name
    for (const team of [gameObject().home, gameObject().away]) {
        for (const playerName in team.players) {
            if (playerName.length > longestNamePlayer.length) {
                longestNamePlayer = playerName;
            }
        }
    }

    // Iterate through both home and away teams' players to find the player with the most steals
    let mostSteals = -1;
    for (const team of [gameObject().home, gameObject().away]) {
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.steals > mostSteals) {
                mostSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    // Compare the two players to check if the player with the longest name had the most steals
    return longestNamePlayer === playerWithMostSteals;
}


