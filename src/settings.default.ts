import type { RecursiveRequired, Settings } from "#/global";

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
  menu: {
    mode: "head",
  },
};

export default globalSettingsDefault;
