import CsvDataSource from "../../../src/datasource/CsvDataSource";
import IDataSource from "../../../src/interface/IDataSource";
let csvDataSourceMock: IDataSource;

describe('CsvDataSource', () => {
  beforeAll(() => {
    csvDataSourceMock = new CsvDataSource('./assets/input/order_lines.csv');
  });
  test('Data source defined properly', () => {
    expect(csvDataSourceMock).toBeDefined();
  });
  test('The amount of returned items greater than 0', () => {
    return csvDataSourceMock.PullData().then(data => {
      expect(data.length).toBeGreaterThanOrEqual(0);
    });
  });
});



