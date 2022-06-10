const assert = require('assert');
const util = require('util');
const prompt = require('prompt-sync')({ sigint: true });
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

describe('establish 2D array representing field', () => {
    it('defines Field constructor', () => {
        class Field {
            constructor() {
                this.field = 'test_field';
            };
        };
        const field1 = new Field();
        assert.equal(field1.field, 'test_field');
    });
    it('extends constructor with field input', () => {
        class Field {
            constructor() {
                this.field = "[ ['*', '░', 'O'], ['░', 'O', '░'], ['░', '^', '░']]";
            };
        };
        const newField = new Field();
        assert.equal(newField.field, "[ ['*', '░', 'O'], ['░', 'O', '░'], ['░', '^', '░']]");
    });
    it('prints field', () => {
        class Field {
            constructor() {
                this.field = "[ ['*', '░', 'O'], ['░', 'O', '░'], ['░', '^', '░']]";
            };
        };
        const newField = new Field();
        console.log(util.inspect(newField));
    });
    it('accepts user input', () => {
        let move = prompt('What direction would you like to move? Acceptable commands are: U, D, L, R: ');
        console.log(`You've chosen to move ${move}. Great!`)
        expect(move, 'should be string').to.be.a('string');
    })
});