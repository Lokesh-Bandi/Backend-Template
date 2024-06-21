import fs from 'fs';
import path from 'path';

import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;
const dirName = process.cwd();

const inputFilePath = path.join(dirName, 'public', 'goldenFile.csv');
const outputFilePath = path.join(dirName, 'public', 'newFile.csv');
const outputFilePathJSON = path.join(dirName, 'public', 'newFileJSON.json');

app.use(express.static(path.join(dirName, 'public')));

function createCSVWithLimitedRows(
  inputFile: string,
  outputFile: string,
  limit: number,
  parser: 'JSON' | 'CSV' = 'CSV'
) {
  const records: any = [];
  let rowCounter = 0;
  let isStreamClosed = false;

  const readStream = fs.createReadStream(inputFile);

  readStream
    .pipe(csv())
    .on('headers', (headers) => {
      console.log(headers);
    })
    .on('data', (row) => {
      if (rowCounter < limit) {
        records.push(row);
        rowCounter += 1;
        if (rowCounter === limit) {
          if (parser === 'JSON') {
            // Write JSON data to output file
            fs.writeFile(
              outputFilePathJSON,
              JSON.stringify(records, null, 2),
              (err) => {
                if (err) {
                  console.error('Error writing JSON file:', err);
                } else {
                  console.log(
                    `CSV file ${inputFile} successfully converted to JSON: ${outputFile}`
                  );
                }
              }
            );
          } else {
            const csvWriter = createObjectCsvWriter({
              path: outputFile,
              header: Object.keys(records[0]), // Assuming all rows have the same keys
            });
            console.log('END EVENT  ', records[0]);
            csvWriter
              .writeRecords(records)
              .then(() =>
                console.log(`CSV file with ${limit} rows created successfully`)
              )
              .catch((err) => console.error('Error writing CSV:', err));
          }
        }
      } else {
        // Pause the stream to stop further reading
        readStream.pause();

        // Close the stream after a short delay to allow pending events to process
        readStream.close();
        isStreamClosed = true;
      }
    })
    .on('end', () => {
      if (isStreamClosed) {
        console.log('Stream closed manually after processing 30 rows.');
      } else {
        console.log('All rows processed naturally.');
      }
    });
}
app.get('/', (req: Request, res: Response) => {
  createCSVWithLimitedRows(inputFilePath, outputFilePath, 30);
  res.send('Home location');
});

app.get('/json', (req: Request, res: Response) => {
  createCSVWithLimitedRows(inputFilePath, outputFilePath, 30, 'JSON');
  res.send('JSON Generated')
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
