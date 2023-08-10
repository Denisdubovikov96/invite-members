const objTest = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
}

const isObject = (val: any): boolean => { // literally can be anything
    if (val === null) return false;
    if (typeof val === 'function') return false;

    return typeof val === 'object';
}

export const getValueByPath = <T extends Record<string, any>, V extends string, Z extends any>(obj: T, path: V, defaultValue?: Z): T[keyof T] | Z | undefined => {
    const keys = path.split('.') as unknown as (keyof T)[];
    let hasEndValue = false;
    const value = keys.reduce((acc, key, index) => {

        acc = (() => {
            const hasValue = (isObject(acc) && key in acc);
            if (index === keys.length - 1 && hasValue) {
                hasEndValue = true;
            }
            const result = hasValue ? acc[key] : undefined
            return result;
        })()
        return acc;
    }, obj as any);

    return hasEndValue ? value : value || defaultValue
}

const test1 = getValueByPath(objTest, 'a.b');   // { c : 'd' }
const test2 = getValueByPath(objTest, 'a.b.c'); // 'd'
const test3 = getValueByPath(objTest, 'a.e');   // 'f'
const test4 = getValueByPath(objTest, 'x.x.e'); // undefined
const test5 = getValueByPath(objTest, 'a.x.e', true); // true
const test6 = getValueByPath(objTest, 'a.x.e', 'My default value'); // My default value

console.log({
    test1,
    test2,
    test3,
    test4,
    test5,
    test6
})