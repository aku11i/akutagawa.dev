/**
 * 値が定義されていることを保証する
 * ref: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export function assertIsDefined<T>(
  value: T,
  errorMessage?: string
): asserts value is NonNullable<T> {
  if (typeof value === "undefined" || value === null) {
    throw new Error(
      errorMessage ?? `Expected 'value' to be defined, but received ${value}`
    );
  }
}

export function assertIsString(
  value: unknown,
  errorMessage?: string
): asserts value is string {
  if (typeof value !== "string") {
    throw new Error(
      errorMessage ??
        `Expected 'value' to be string, but received ${value} (${typeof value})`
    );
  }
}
