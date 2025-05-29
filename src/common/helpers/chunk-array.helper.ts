const chunkArray = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) return [];

  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
};

export { chunkArray };
