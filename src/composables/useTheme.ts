import { ref, onMounted } from 'vue';

const isDark = ref(false);

export function useTheme() {
  const detectSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const setTheme = () => {
    isDark.value = detectSystemTheme();
    document.documentElement.setAttribute('color-scheme', isDark.value ? 'dark' : 'light');
  };

  onMounted(() => {
    setTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      setTheme();
    });
  });

  return {
    isDark,
  };
}