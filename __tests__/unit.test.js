// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
/* Section: isPhoneNumber */
// True 1
test('is 760-504-7170 a phone number', () => {
    expect(functions.isPhoneNumber("760-504-7170")).toBe(true);
});
// True 2
test('is 619-315-7238 a phone number', () => {
    expect(functions.isPhoneNumber("619-315-7238")).toBe(true);
});
// False 1
test('is 619-315-122 a phone number', () => {
    expect(functions.isPhoneNumber("619-315-122")).toBe(false);
});
// False 2
test('is 619-315-200 a phone number', () => {
    expect(functions.isPhoneNumber("619-315-200")).toBe(false);
});

/* Section: isEmail */
// True 1
test('is tpowell@ucsd.edu an email?', () => {
    expect(functions.isEmail("tpowell@ucsd.edu")).toBe(true);
});
// True 2
test('is mobius@gmail.com an email?', () => {
    expect(functions.isEmail("mobius@gmail.com")).toBe(true);
});
// False 1
test('is UCScamDiego an email?', () => {
    expect(functions.isEmail("UCScamDiego")).toBe(false);
});
// False 2
test('is myBalls an email?', () => {
    expect(functions.isEmail("myBalls")).toBe(false);
});

/* Section: isStrongPassword */
// True 1 
test('is aL12M a strong password?', () => {
    expect(functions.isStrongPassword("aL12M")).toBe(true);
});
// True 2
test('is genshinIs_69 a strong password?', () => {
    expect(functions.isStrongPassword("genshinIs_69")).toBe(true);
});
// False 1
test('is 212 a strong password?', () => {
    expect(functions.isStrongPassword("212")).toBe(false);
});
// False 2
test('is 1234567890123456 a strong password?', () => {
    expect(functions.isStrongPassword("1234567890123456")).toBe(false);
});

/* Section: isDate */
// True 1
test('is 05/18/2002 a date?', () => {
    expect(functions.isDate("05/18/2002")).toBe(true);
}); 
// True 2
test('is 9/9/1969 a date?', () => {
    expect(functions.isDate("9/9/1969")).toBe(true);
});
// False 1
test('is 05/18/02 a date?', () => {
    expect(functions.isDate("05/18/02")).toBe(false);
}); 
// False 2
test('is 313/222/20222 a date?', () => {
    expect(functions.isDate("313/222/20222")).toBe(false);
}); 

/* Section: isHexColor */
// True 1
test('is EAD213 a hex color?', () => {
    expect(functions.isHexColor("EAD213")).toBe(true);
}); 
// True 2
test('is EFE202 a hex color?', () => {
    expect(functions.isHexColor("EFE202")).toBe(true);
}); 
// False 1
test('is 23123 a hex color?', () => {
    expect(functions.isHexColor("23123")).toBe(false);
}); 
// False 2
test('is 213555990 a hex color?', () => {
    expect(functions.isHexColor("213555990")).toBe(false);
}); 