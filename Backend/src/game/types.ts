import WebSocket from "ws";
type room_status="Live"|"Waiting"|"Not Started"|"Completed";
export interface Game_Room{
    roomid:number,
    minsum:number,
    smallblind:number,
    bigblind:number,
    dealer:number,
    pointer:number,
    turn:number, 
    playercount:number,
    status:room_status,
    creatorid:number,
    starttime:string
}

export interface Player_Wallet_Details{
    playerid:number,
    wallet:number
}

export type suit_type="Spade" | "Heart" | "Diamond" | "Club";
export type suit_value="2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"J"|"Q"|"K"|"A";

type stage="Blinds"|"Hole"|"Pre Flop"|"Flop"|"Pre Turn"|"Turn"|"Pre River"|"River"|"Pre Showdown"|"Showdown";
export type hands="Fold"|"Check"|"Call"|"Raise"|"All In";
export interface Player_Game_Details{
    roomid:number,
    playerid:number,
    hole_cards:Card_Details[],
    bet_amount:number,
    status:player_status,
    hand:hands,
    hand_result_type:number,
    values:number[]
}
type player_status="Spectetor"|"Player";
export interface Game_Details{
    roomid:number,
    stage:stage,
    cards:Card_Details[],
    amount:number,
    index:number,// For keeping the index of the card after suffling
    chip:number,
    player_turn:number
}
export let chips:number;
export interface Room_Allocation{
    playerid:number,
    socket:WebSocket
}

export let Ws_map=new Map<number,Room_Allocation[]>();
export let Ws_Queue=new Map<number,number[]>();

export interface Player_Join_Room{
    roomid:number,
    amount:number,
    playerid:number
}

export interface Card_Details{
    suit:suit_type,
    value:suit_value
}
export let Deck=new Map<number,Card_Details>();

const suit:suit_type[]=['Spade','Heart','Diamond','Club'];
const value:suit_value[]=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
export const poker_stage:stage[]=['Blinds','Hole','Pre Flop','Flop','Pre Turn','Turn','Pre River','River','Pre Showdown','Showdown'];
export const Iteration_Card:number[]=[];

let Card_value=1;

suit.forEach((value1,key1)=>{
    value.forEach((value2,key2)=>{
        Deck.set(Card_value,{
            suit:value1,
            value:value2
        });
        Iteration_Card.push(Card_value);
        Card_value+=1;
    })
});

export let Suit_Type_Ws=new Map<suit_type,number>();
export let Suit_Value_Ws=new Map<suit_value,number>();
export let Card=new Map<suit_value,number>();

Card_value=2;
value.forEach((value,key)=>{
    Card.set(value,Card_value);
    Card_value+=1;
})

export const HAND_RANKINGS = {
    HighCard: 1,
    Pair: 2,
    TwoPair: 3,
    ThreeOfAKind: 4,
    Straight: 5,
    Flush: 6,
    FullHouse: 7,
    FourOfAKind: 8,
    StraightFlush: 9,
    RoyalFlush: 10
};

export interface Bet_types{
    amount:number,
    roomid:number,
    playerid:number,
}