export function getProp(value: Record<string | number, any> | any[], path: (string | number)[]) {
  if (
    value === null ||
    typeof value !== 'object'
  ) { return null; }
  let result = value;
  for (const currentPart of path) {
    result = result[currentPart as any];
    if (!result) { return result };
  }
  return result;
}

// type GetPropArguments = Parameters<typeof getProp>;
// type GetPropFirstArgument = GetPropArguments[0];