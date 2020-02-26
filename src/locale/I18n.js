import { STRS } from "./strings";
import { Locale } from "./Locale";

export class I18n {
  static t(key) {
    const languageCode = Locale.getInstance().languageCode;
    return STRS[languageCode][key];
  }
}
