import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string){}

    run(matches: MatchData[]): string {
        let winsCount = 0;

        for(let match of matches) {
            if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
                winsCount++;
            else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
                winsCount++;
        }
        
        return `${this.team} has won ${winsCount} times`;
    }
}