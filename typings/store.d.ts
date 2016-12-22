declare namespace Store {
  export interface RootState {
    session: string,
    count: number,
  }

  export interface TestState {
    title: string,
    history: string[],
  }
}
