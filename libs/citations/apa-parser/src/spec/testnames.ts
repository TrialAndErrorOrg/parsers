import { TestData } from './apa-parser.spec'

export const names: TestData = {
  'Boring names': {
    description: 'Names like Johnson, Yamamoto, Mbabazi',
    content: [
      {
        description: '',
        input: 'Johnson',
        result: true,
      },
    ],
  },
  "O'Reillies": {
    description: "Names like O'Reilly",
    content: [
      {
        description: '',
        input: "O'Reilly",
        result: true,
      },
    ],
  },
  McConnels: {
    description: 'Names like McConnel',
    content: [
      {
        description: '',
        input: 'McConnel',
        result: true,
      },
      {
        description: '',
        input: 'mcConnel',
        result: false,
      },
    ],
  },
  Dutch: {
    description: 'Dang dutch',
    content: [
      {
        description: 'van der',
        input: 'van der Berg',
        result: true,
      },
      {
        description: 'van der + hyphenated',
        input: 'van der Meer-de Vries',
        result: true,
      },
      {
        description: 'de',
        input: 'de Vries',
        result: true,
      },
      {
        description: 'caps',
        input: 'Van Der Berg',
        result: false,
      },
    ],
  },
  Hyphenated: {
    description: 'Hyphenated-Names',
    content: [
      {
        description: '',
        input: "McConnel-O'Reilly",
        result: true,
      },
      {
        description: '',
        input: 'mcConnel',
        result: false,
      },
    ],
  },
  Dubs: {
    description: 'X and Y',
    content: [
      {
        description: 'With amp',
        input: 'James & John',
        result: true,
      },
      {
        description: 'With and',
        input: 'James and John',
        result: true,
      },
    ],
  },
}
