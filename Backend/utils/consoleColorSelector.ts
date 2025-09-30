/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

const Black: string = "\x1b[30m";
const Red: string = "\x1b[31m";
const Green: string = "\x1b[32m";
const Yellow: string = "\x1b[33m";
const Blue: string = "\x1b[34m";
const Magenta: string = "\x1b[35m";
const Cyan: string = "\x1b[36m";
const White: string = "\x1b[37m";
const Reset: string = "\x1b[0m";

export function selectColor(colorChoice: string) :string {
  // Setting the color
  switch (colorChoice.toUpperCase()) {
    case "BLACK":
      return Black;
    case "RED":
      return Red;
    case "GREEN":
      return Green;
    case "YELLOW":
      return Yellow;
    case "BLUE":
      return Blue;
    case "MAGENTA":
      return Magenta;
    case "CYAN":
      return Cyan;
    default:
      return White;
    }
}

export function resetColor() :string {
  return Reset;
}
