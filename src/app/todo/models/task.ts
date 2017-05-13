export class Task {

  constructor(public name: string, public done: boolean) { }

  toggleDone(): void {
    this.done = !this.done;
  }
}
