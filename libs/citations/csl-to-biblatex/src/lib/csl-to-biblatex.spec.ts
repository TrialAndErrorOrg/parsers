import { cslToBiblatex } from './csl-to-biblatex';

describe('cslToBiblatex', () => {
    it('should work', () => {
        expect(cslToBiblatex()).toEqual('csl-to-biblatex');
    })
})