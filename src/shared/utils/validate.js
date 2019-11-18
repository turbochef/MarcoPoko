const errorMessage = {
  nan: 'Numbers only!',
  min: 'Must be larger than 2',
  max: 'Must be smaller than 40',
};

export const validateMapSize = (input) => {
  const errorArray = [];

  const parsedInput = parseInt(input, 10);
  if (Number.isNaN(parsedInput)) errorArray.push(errorMessage.nan);
  if (parsedInput < 2) errorArray.push(errorMessage.min);
  if (parsedInput > 40) errorArray.push(errorMessage.max);

  return { value: input, errors: errorArray, dirty: true };
};

export default validateMapSize;
