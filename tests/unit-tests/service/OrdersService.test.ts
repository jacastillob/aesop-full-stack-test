import CsvDataSource from "../../../src/datasource/CsvDataSource";
import OrdersService from "../../../src/service/OrdersService";
let ordersServiceMock: OrdersService;

describe('ProcessOrdersService', () => {
    beforeAll(() => {
        ordersServiceMock = new OrdersService(new CsvDataSource('./assets/input/order_lines.csv'));
    });
    test('Service defined properly', () => {
        expect(ordersServiceMock).toBeDefined();
    });
    test('There is at least 1 Order ', () => {
        return ordersServiceMock.PullData().then(data => {
            expect(data.length).toBeGreaterThan(0);
        });
    });

    // test('The data source is retrieving data', () => {
    //     return processOrdersServiceMock.PullingData().then(data => {
    //         expect(data).toBeDefined();
    //     });
    // });




});
