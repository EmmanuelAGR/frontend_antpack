/**
 * Function that looks for empty parameters
 * @param {any} data Data to verify
 * @param {Array<string>} noApply The data to skip in the search
 * @returns {boolean} boolean
 */
export const handleIncompleteData = (
  data: any,
  noApply: Array<string>
): boolean => {
  let isIncomplete = false;
  Object.keys(data).forEach(key => {
    if (!data[key] && !noApply.includes(key.toString())) {
      isIncomplete = true;
      return isIncomplete;
    }
  });

  return isIncomplete;
};
