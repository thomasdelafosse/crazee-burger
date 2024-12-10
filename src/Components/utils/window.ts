export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string): unknown | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
