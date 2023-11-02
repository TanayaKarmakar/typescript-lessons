import fs from 'fs';
import { OutputTarget } from "../Summary";


export class HtmlReport implements OutputTarget {
    constructor(public htmlFileName: string){}

    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Report</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync(this.htmlFileName, html);
    }
}