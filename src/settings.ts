import { defaultsDeep } from "lodash-es";
import globalSettingsDefault from "./settings.default";
import type { RecursiveRequired, Settings } from "#/global";

const globalSettings: Settings.all = {};

export default defaultsDeep(
  globalSettings,
  globalSettingsDefault
) as RecursiveRequired<Settings.all>;
