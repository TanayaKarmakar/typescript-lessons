import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const matches = matchReader.matches;

const winAnalysis = new WinsAnalysis('Man United');

const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport('myReport.html');
const summary = new Summary(winAnalysis, htmlReport);

summary.buildAndPrintReport(matches);
