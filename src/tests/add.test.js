const add = (a,b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name}`;

test('Should add two number', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Should generate greeting: Hello name', ()=>{
    const name = 'Anthony'
    const result = generateGreeting(name);
    expect(result).toBe(`Hello ${name}`);
});

test('Should generateing for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});