export const getFavorites = (): string[] => {
  const favorites = localStorage.getItem("favorites");
  try {
    return favorites ? JSON.parse(favorites) : [];
  } catch (e) {
    console.error("Error parsing favorites from localStorage", e);
    return [];
  }
};

export const toggleFavorite = (characterId: string): void => {
  let favorites = getFavorites();
  if (favorites.includes(characterId)) {
    favorites = favorites.filter((id: string) => id !== characterId);
  } else {
    favorites.push(characterId);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const isLocalStorageAvailable = (): boolean => {
    try {
      const test = "test";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (!isLocalStorageAvailable()) {
    console.error("Local storage is not available");
  }
};
