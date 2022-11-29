const checkEmptyText = (text) => {
  if (text.trim().length === 0) {
    return true;
  }
  return false;
};

export default checkEmptyText;
