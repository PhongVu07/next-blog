export default function handleError(
  error: Error,
  filePath: string,
  functionName: string,
  group: string = ""
) {
  const errorPath = `Error: ${filePath} -> ${functionName} -> error: ${error}`;
  console.error(errorPath, JSON.stringify(error));
}
