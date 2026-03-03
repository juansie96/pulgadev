type MatchMediaController = {
  setMatches: (nextMatches: boolean) => void;
};

type MatchMediaListener = (event: MediaQueryListEvent) => void;

export function setMatchMedia(initialMatches: boolean): MatchMediaController {
  let matches = initialMatches;
  const listeners = new Set<MatchMediaListener>();

  const emitChange = (media: string) => {
    const event = { matches, media } as MediaQueryListEvent;

    listeners.forEach(listener => {
      listener(event);
    });
  };

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string): MediaQueryList => ({
      get matches() {
        return matches;
      },
      media: query,
      onchange: null,
      addListener: listener => {
        listeners.add(listener);
      },
      removeListener: listener => {
        listeners.delete(listener);
      },
      addEventListener: (eventName, listener) => {
        if (eventName === 'change' && typeof listener === 'function') {
          listeners.add(listener as MatchMediaListener);
        }
      },
      removeEventListener: (eventName, listener) => {
        if (eventName === 'change' && typeof listener === 'function') {
          listeners.delete(listener as MatchMediaListener);
        }
      },
      dispatchEvent: event => {
        listeners.forEach(listener => {
          listener(event as MediaQueryListEvent);
        });
        return true;
      },
    }),
  });

  return {
    setMatches: nextMatches => {
      matches = nextMatches;
      emitChange('(prefers-reduced-motion: reduce)');
    },
  };
}
