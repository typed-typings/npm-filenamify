declare function filenamify (filename: string, options?: filenamify.Options): string;

declare namespace filenamify {
  export interface Options {
    replacement?: string;
  }

  export function path (path: string, options?: Options): string;
}

export = filenamify;
