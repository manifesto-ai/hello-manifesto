// hello.domain.ts — HelloDomain MEL codegen 대체 수동 타입

export interface HelloDomain {
  readonly state: {
    hello: string
    counter: number
  }
  readonly computed: {
    doubled: number
    isEven: boolean
    canDecrement: boolean
  }
  readonly actions: {
    increment: () => void
    decrement: () => void
  }
}
