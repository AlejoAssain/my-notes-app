export const delayUtil = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
