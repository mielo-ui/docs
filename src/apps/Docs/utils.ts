// Core Convention
// Component code divided with `//@chunk` comment.
// Middle chunk is core example part.
// Sides chunk utils & helpers
export function tsFormatSample(code: string) {
  const [_head, middle, _tail] = code.split("//@chunk\n")
  return middle
}
