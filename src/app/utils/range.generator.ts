export function range(start: number, end: number): number[]{
    const result = new Array<number>();
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
