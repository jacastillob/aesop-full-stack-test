
import Order from "../../../src/model/Order";

describe('Order', () => {

    test('Object does match with interface definition', () => {

        const expected: Order = { CARRIERSERVICE: 'Royal Mail', ORDERCLIENTREF: 'Ruby Jensen', ADDRESSNAME: 'RubyJensen@teleworm.us', SKUBARCODE: 'B500HR14', SKUQUANTITY: 1 }
        const actual = { CARRIERSERVICE: 'Royal Mail', ORDERCLIENTREF: 'Ruby Jensen', ADDRESSNAME: 'RubyJensen@teleworm.us', SKUBARCODE: 'B500HR14', SKUQUANTITY: 1 }

        expect(actual).toMatchObject(expected)
    });
    test('Object attributes work as expected', () => {

        const expected: Order = { CARRIERSERVICE: 'Royal Mail', ORDERCLIENTREF: 'Ruby Jensen', ADDRESSNAME: 'RubyJensen@teleworm.us', SKUBARCODE: 'B500HR14', SKUQUANTITY: 1 }
        expect(expected.CARRIERSERVICE).toEqual('Royal Mail')
    });

});