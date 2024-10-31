import { DeadCell } from "./DeadCell";
import { LiveCell } from "./LiveCell";

export class Neighbors {
  private liveNeighbors = [];

  constructor(liveNeighbors) {
    if (liveNeighbors.length > 8) {
      throw new Error("Invalid number of neighbors");
    }
    this.liveNeighbors = liveNeighbors;
  }

  something() {
    if (this.liveNeighbors.length < 2) {
      return new DeadCell();
    }

    if (this.liveNeighbors.length === 2 || this.liveNeighbors.length === 3) {
      return new LiveCell();
    }

    if (this.liveNeighbors.length > 3) {
      return new DeadCell();
    }
  }
}
