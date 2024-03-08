import { it, describe, expect, beforeEach } from "vitest";

describe('For tennis game', () => {

	let tennis: TennisGame;
	beforeEach(() => {
		tennis = new TennisGame();
	})
	it('love all', () => {
		expect(tennis.score()).toBe('love all');
	});
	it('fifteen love', () => {
		givenFirstPlayerPoint();
		expect(tennis.score()).toBe('fifteen love');

	});
	it('thirty love', () => {
		givenFirstPlayerPoint(2);
		expect(tennis.score()).toBe('thirty love');
	});
	it('forty love', () => {
		givenFirstPlayerPoint(3);
		expect(tennis.score()).toBe('forty love');
	});
	it('love fifteen', () => {
		givenSecondPlayerPoint();
		expect(tennis.score()).toBe('love fifteen');


	});
	it('love thirty', () => {
		givenSecondPlayerPoint(2);
		expect(tennis.score()).toBe('love thirty');
	});
	it('love forty', () => {
		givenSecondPlayerPoint(3);
		expect(tennis.score()).toBe('love forty');
	});
	function givenSecondPlayerPoint(times = 1) {
		for (let i = 0; i < times; i++) {
			tennis.secondPlayerWinPoint();
		}
	}
	function givenFirstPlayerPoint(times = 1) {
		for (let i = 0; i < times; i++) {
			tennis.firstPlayerWinPoint();
		}
	}
})

class TennisGame {
	firstPlayerPoint = 0;
	secondPlayerPoint = 0;

	secondPlayerWinPoint() {
		this.secondPlayerPoint++;
	}
	firstPlayerWinPoint() {
		this.firstPlayerPoint++;
	}
	score() {
		const pointMapping = ['', 'fifteen', 'thirty', 'forty'];
		if (this.secondPlayerPoint > 0) {
			return 'love ' + pointMapping[this.secondPlayerPoint];
		}
		if (this.firstPlayerPoint > 0) {
			return pointMapping[this.firstPlayerPoint] + ' love';
		}
		return 'love all';
	}
}