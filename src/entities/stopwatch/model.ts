import { nanoid } from 'nanoid';

export interface StopwatchInterface {
  id: string;
  time: number;
  timestamp: number;
  pauseTimestamp: number;
  isPaused: boolean;
}

export class Stopwatch implements StopwatchInterface {
  id: string;
  time: number;
  timestamp: number;
  pauseTimestamp: number;
  isPaused: boolean;

  constructor() {
    this.id = nanoid();
    this.time = 0;
    this.timestamp = Date.now();
    this.pauseTimestamp = Date.now();
    this.isPaused = true;
  }

  recalculate() {
    if (this.isPaused) return;

    const diff = Math.floor((Date.now() - this.timestamp) / 1000);

    if (diff > this.time) {
      this.time = diff;
    }
  }

  togglePause(value: boolean) {
    this.isPaused = value;

    const currTime = Date.now();

    if (value) {
      this.pauseTimestamp = currTime;
    } else {
      this.timestamp += currTime - this.pauseTimestamp;
    }
  }

  stop() {
    this.isPaused = true;
    this.time = 0;
    this.timestamp = Date.now();
    this.pauseTimestamp = Date.now();
  }
}
