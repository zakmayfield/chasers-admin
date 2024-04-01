import {
  CustomThemeConfig,
  KeyValuePair,
  ResolvableTo,
} from 'tailwindcss/types/config';

//^ Tailwind
export type TailwindKeyValue =
  | ResolvableTo<KeyValuePair<string, string>>
  | undefined;
export type PartialConfig = Partial<CustomThemeConfig> | undefined;
