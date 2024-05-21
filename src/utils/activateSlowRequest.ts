export const activateSlowRequest = (time: number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(_);
    }, time);
  });
};
