/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const len = numbers.length;
    if (len == 0) {
        return [];
    } else {
        const temp: number[] = [numbers[0], numbers[len - 1]];
        return temp;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export default function tripleNumbers(numbers: number[]): number[] {
    const temp = numbers.map((num: number): number => num * 3);

    return temp;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const temp = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return temp;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const temp = amounts.map((num: string): string =>
        num[0] == "$" ? num.substring(1) : num
    );
    return stringsToIntegers(temp);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    if (messages.length == 0) {
        return [];
    }
    const no_question = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const temp = no_question.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    return temp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count = words.filter((word: string): boolean => word.length < 4);
    return count.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    const checking = ["red", "blue", "green"];
    const answer = colors.filter((color: string): boolean =>
        checking.includes(color)
    );
    if (answer.length == colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const answer = addends.reduce(
        (previousValue, currentValue) =>
            previousValue.toString() + currentValue.toString() + "+",
        sum.toString() + "="
    );
    return answer.substring(0, answer.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length == 0) {
        return [0];
    }
    let firstNeg = values.findIndex((value: number): boolean => value < 0);
    if (firstNeg == -1) {
        firstNeg = values.length;
    } else {
        firstNeg;
    }
    const sub_list = values.slice(0, firstNeg);
    // console.log(firstNeg, sub_list);
    const sum = sub_list.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const answer = [...values];
    answer.splice(firstNeg + 1, 0, sum);
    return answer;
}
