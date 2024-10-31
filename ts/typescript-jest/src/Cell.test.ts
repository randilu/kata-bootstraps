import { DeadCell } from "./DeadCell";
import { LiveCell } from "./LiveCell";
import { Neighbors } from "./Neighbors";

describe('Cell', () => {
    it('should die if less than 2 live neighbors', () => {
        const live = new LiveCell();
        const neighbors = new Neighbors([new LiveCell()])
        const newState = live.getNewState(neighbors)
        expect(newState).toStrictEqual(new DeadCell())
    });

    it('should stay alive if 2 or 3 live neighbors', () => {
        const live = new LiveCell();
        const neighbors = new Neighbors([new LiveCell(), new LiveCell()])
        const newState = live.getNewState(neighbors)
        expect(newState).toStrictEqual(new LiveCell())
    });

    it('should die if more than 3 live neighbors', () => {
        const live = new LiveCell();
        const neighbors = new Neighbors([new LiveCell(), new LiveCell(), new LiveCell(), new LiveCell()])
        const newState = live.getNewState(neighbors)
        expect(newState).toStrictEqual(new DeadCell())
    });

    it('should become alive if exactly 3 live neighbors', () => {
        const dead = new DeadCell();
        const neighbors = new Neighbors([new LiveCell(), new LiveCell(), new LiveCell()])
        const newState = dead.getNewState(neighbors)
        expect(newState).toStrictEqual(new LiveCell())
    });
});
