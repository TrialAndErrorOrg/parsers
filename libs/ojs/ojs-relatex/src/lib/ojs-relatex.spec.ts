import {Node} from 'unist'
import { ojs-relatex } from './ojs-relatex';

describe('ojs-relatex', () => {

    it('should work', () => {

        expect(ojs-relatex({type:'root',children:[]} as Node)).toBeDefined();
    })
})
