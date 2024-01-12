import {it, beforeEach, describe, expect, test} from "vitest";
import {TennisService} from "../TennisService";

describe('For tennis service', () => {
	let service: TennisService;
	beforeEach(() => {
		service = new TennisService();
	});

	it('love all', async () => {
		expect(service.Score()).toBe("love all");
	});

	function setP1Score(score: number) {
		for (let i = 0; i < score; i++) {

			service.P1Goal();
		}
	}

	it('should fifteen love', () => {
		setP1Score(1);
		expect(service.Score()).toBe("fifteen love");
	});

	it('should thirty love', () => {
		setP1Score(2);
		expect(service.Score()).toBe("thirty love");
	});

	it('should forty love', () => {
		setP1Score(3);
		expect(service.Score()).toBe("forty love");
	});

	function setP2Score(score: number) {
		for (let i = 0; i < score; i++) {
			service.P2Goal();
		}
	}

	it('should love fifteen', () => {
		setP2Score(1);
		expect(service.Score()).toBe("love fifteen");
	});

	it('should love thirty', () => {
		setP2Score(2);
		expect(service.Score()).toBe("love thirty");
	});

	it('should love forty', () => {
		setP2Score(3)
		expect(service.Score()).toBe("love forty");
	});

	it('should p1 adv', () => {
		setP1Score(4);
		setP2Score(3);
		expect(service.Score()).toBe("p1 adv");
	});

	it('should p2 adv', () => {
		setP1Score(3);
		setP2Score(4);
		expect(service.Score()).toBe("p2 adv");
	});

	it('should p1 win', () => {
		setP1Score(5);
		setP2Score(3);
		expect(service.Score()).toBe("p1 win");
	});

	it('should p2 win', () => {
		setP1Score(3);
		setP2Score(5);
		expect(service.Score()).toBe("p2 win");
	});

	it('should deuce', () => {
		setP1Score(4);
		setP2Score(4);
		expect(service.Score()).toBe("deuce");
	});

	it('should fifteen all', () => {
		setP1Score(1);
		setP2Score(1);
		expect(service.Score()).toBe("fifteen all");

	});

})
