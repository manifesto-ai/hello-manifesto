// mel.d.ts (또는 shims-mel.d.ts)
declare module '*.mel' {
  import type { DomainSchema } from '@manifesto-ai/sdk'

  const schema: DomainSchema
  export default schema
}
