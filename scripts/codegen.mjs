import { createTsPlugin, generate } from '@manifesto-ai/codegen'
import { compile } from '@manifesto-ai/compiler';

(async () => {
  const source = `
domain  HelloDomain {
    state {
        hello: string
        counter: number
    }

    computed doubled = mul(counter, 2)
    computed isEven = eq(mod(counter, 2), 0)
    computed canDecrement = gt(counter, 0)

    action increment() {
        onceIntent {
            patch counter = add(counter, 1)
        }
    }

    action decrement() available when canDecrement {
        onceIntent {
            patch counter = sub(counter, 1)
        }
    }
}
`

  const { schema } = compile(source, { lowerSystemValues: true })

  const result = await generate({
    schema,
    outDir: './generated',
    plugins: [createTsPlugin()],
  })

  console.log(result)
})()
