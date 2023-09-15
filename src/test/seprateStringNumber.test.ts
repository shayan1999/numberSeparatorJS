import {seprateStringNumber} from "../index";

describe('seprateStringNumber functions:::', ()=>{
    it('only two numbers check seprated with - symbol', ()=>{
        expect(seprateStringNumber('123-2234').numericParts).toEqual(['123','-2234']);
        expect(seprateStringNumber('123-2234').nonNumericParts).toEqual([])
    })

    it('normal test', ()=>{
        expect(seprateStringNumber('hello 123 world').numericParts).toEqual(['123']);
        expect(seprateStringNumber('hello 123 world').nonNumericParts).toEqual(['hello ', ' world']);
    })
})