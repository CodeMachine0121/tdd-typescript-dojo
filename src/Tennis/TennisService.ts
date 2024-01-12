export class TennisService {
	private _p1Score: number = 0;
	private scoreMapping: { [key: number]: string } = {
		0: "love",
		1: "fifteen",
		2: "thirty",
		3: "forty"
	};
	private _p2Score: number = 0;

	Score() {
		return this.isDifferent()
			   ? this.isReadyForGamePoint()
				 ? this.isGamePoint()
				   ? this.winResult()
				   : this.AdvResult()
				 : this.DifferentScoreResult()
			   : this.isReadyForGamePoint()
				 ? this.Deuce()
				 : this.sameScoreResult();
	}

	private sameScoreResult() {
		return `${this.scoreMapping[this._p1Score]} all`;
	}

	private Deuce() {
		return "deuce";
	}

	private DifferentScoreResult() {
		return `${this.scoreMapping[this._p1Score]} ${this.scoreMapping[this._p2Score]}`;
	}

	private AdvResult() {
		return `${(this._p1Score > this._p2Score
				   ? "p1"
				   : "p2")} adv`;
	}

	private winResult() {
		return `${(this._p1Score > this._p2Score
				   ? "p1"
				   : "p2")} win`;
	}

	private isGamePoint() {
		return Math.abs(this._p1Score - this._p2Score) === 2;
	}

	private isReadyForGamePoint() {
		return this._p1Score > 3 || this._p2Score > 3;
	}

	private isDifferent() {
		return this._p1Score != this._p2Score;
	}

	public P1Goal() {
		this._p1Score += 1;
	}

	public P2Goal() {
		this._p2Score += 1
	}
}