"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/merge.test.ts
const merge_1 = require("../merge");
describe("merge function", () => {
    it("should merge and sort the collections correctly", () => {
        const collection_1 = [1, 4, 7];
        const collection_2 = [2, 5, 8];
        const collection_3 = [9, 6, 3];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("should handle empty collections", () => {
        expect((0, merge_1.merge)([], [2, 5], [3, 1])).toEqual([1, 2, 3, 5]);
        expect((0, merge_1.merge)([1], [], [5, 4])).toEqual([1, 4, 5]);
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
    });
    it("should handle collections with duplicates", () => {
        const collection_1 = [1, 3, 3];
        const collection_2 = [2, 3, 4];
        const collection_3 = [4, 3, 1];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 1, 2, 3, 3, 3, 3, 4, 4]);
    });
});
