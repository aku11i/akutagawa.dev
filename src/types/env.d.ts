type Env = Partial<Readonly<typeof import("../../env/default")>>;

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProcessEnv extends Env {
    readonly NEXT_PUBLIC_APP_ENV: string | undefined;
  }
}
