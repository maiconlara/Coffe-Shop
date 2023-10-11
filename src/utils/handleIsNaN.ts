
export const handleIsNaN = (firstNumber: number, secondNumber: number) => {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Ambos os números devem ser válidos";
  }
  return `A média é ${(firstNumber + secondNumber) / 2}`;
};
