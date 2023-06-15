export const initialState = {
  isOpen: false,
  url: "",
  urls: [],
  startIndex: 0,
};

export function reducer(state, { type, url, urls, startIndex }) {
  switch (type) {
    case "SET_OPEN":
      return {
        ...state,
        isOpen: true,
        url,
      };
    case "SET_OPEN_LIGHTBOX":
      return {
        ...state,
        isOpen: true,
        urls,
        startIndex,
      };
    case "SET_CLOSE":
      return {
        ...state,
        isOpen: false,
        url: "",
        urls: [],
        startIndex: 0,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
