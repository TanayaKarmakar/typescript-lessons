
import fs from 'fs';
import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
    data: MatchData[] = [];

    constructor(public filename: string) {
        super(filename);
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        }).map(this.mapRow);        
    }

    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    }
}