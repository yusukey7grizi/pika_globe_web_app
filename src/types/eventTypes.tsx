import { KeyboardEvent, MouseEvent, ChangeEvent, SyntheticEvent } from 'react';

type CustomKeyboardEvent = KeyboardEvent<HTMLInputElement>;
type CustomClickEvent = MouseEvent<HTMLInputElement>;
type CustomChangeEvent = ChangeEvent<HTMLInputElement>;
type CustomSyntheticEvent = SyntheticEvent<Element, Event>;

export type {
  CustomKeyboardEvent,
  CustomClickEvent,
  CustomChangeEvent,
  CustomSyntheticEvent,
};
