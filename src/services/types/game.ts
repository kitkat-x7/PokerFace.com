export interface game_details_interface{
    roomid:number,
    playerid:number,
    move:game_move,
    action:player_action,
    bet:number,
    time:Date
}

type game_move=
    "NotStarted" |
    "Dealer" |
    "SmallBlind" |
    "BigBlind" |
    "HoleCards" |
    "PreFlop" |
    "Flop" |
    "PreTurn" |
    "Turn" |
    "PreRiver" |
    "River" |
    "PreShowdown" |
    "Showdown";
type player_action= 
    "NotStarted" |
    "Fold" |
    "Check" |
    "Call" |
    "Raise" |
    "AllIn";