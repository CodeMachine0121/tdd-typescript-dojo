import {describe, expect, test} from "vitest";
import {TennisService} from "../TennisService";

describe('For tennis service', () => {

    test('love all', async () => {
        var service = new TennisService();
        expect(service.Score()).toBe("love all");
    });

})
