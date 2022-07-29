export default (() => {
  let counter = 0;

  return (prefix = null) => {
    const hasPrefix = prefix !== null;
    counter += 1;

    if (hasPrefix) {
      return `${prefix}_${counter}`;
    }

    return counter.toString();
  };
})();
