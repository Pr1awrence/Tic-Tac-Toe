import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it('should win X on horizontal', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 0}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 1}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeTruthy();
  });

  it('should win O on vertical', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeTruthy();
  });

  it('should win X on leftDiagonal', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 0}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 1}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeTruthy();
  });

  it('should win O on rightDiagonal', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 2}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 0}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeTruthy();
  });

  it('should clear game array', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeFalsy();
    service.clearPlayField();
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
  });

  it('should be game draw', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 0, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 1}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 1}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 0}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 1, vertical: 2}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 2}, 'o')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();

    expect(service.putPointIfNotBusy({horizontal: 2, vertical: 0}, 'x')).toBeTruthy();
    expect(service.checkWin()).toBeFalsy();
  });
});
