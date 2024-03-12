export type RecursiveRequired<T> = {
  [P in keyof T]-?: RecursiveRequired<T[P]>;
};

export declare namespace Settings {
  interface menu {
    mode?: "head" | "side";
  }

  interface all {
    menu?: menu;
  }
}
