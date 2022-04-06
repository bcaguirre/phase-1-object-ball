function gameObject(){
    return {
        'home': {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                    
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
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
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 18,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                 },
                 'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

const game = gameObject()
const players = [game.home.players, game.away.players]

function allPlayers() {
    const all = players.map(function(team) {
        const newArr = [] 
        for (const player in team) {
            newArr.push({ nameOfPlayer: player, ...team[player] })
        }
        return newArr
    })
    return all.flat()
}

function findPlayer(playerName) {
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    })
}
    function numPointsScored(playersName) {
        return findPlayer(playersName).points
    }

    function shoeSize(playersName) {
        return findPlayer(playersName).shoe
    }

    function playerStats(playersName){
        return findPlayer(playersName).players 
    }

    function isHome(team) {
        return team === homeTeam.teamName
    }

    const homeTeam = game.home
    const awayTeam = game.away

    function teamColors(teamName) {
        if (awayTeamName === teamName) {
            return awayColors
        }
        else (homeTeamName === teamName)
        return homeColors
    }

    const teamNames = () => {
        const teamArr = object.values(gameObject()).map(function(go){
            return [go.teamName][0]
        });
        return teamArr
    }

    function playerNumbers(teamName) {
        if (teamName === homeTeamName) {
            const homeNumbers = object.values(homePlayers).map(function(homePlayers) {
                return [homePlayers.number]
            })
            return homeNumbers.flat()
        }
        else (teamName === awayTeamName)
        const awayNumbers = object.values(awayPlayers).map(function(awayPlayers){
            return [awayPlayers.number]
        })
        return awayNumbers.flat()
    }

    function bigShoeRebounds(){
        const biggestShoe = { size: 0, player: '' }
        for (const player of allPlayers()) {
            if (player.nameOfPlayer.shoe > biggestShoe.size) {
                biggestShoe.size = player.nameOfPlayer.size
                biggestShoe.player = player.nameOfPlayer
            }
        }
        return biggestShoe.player
    }

    





