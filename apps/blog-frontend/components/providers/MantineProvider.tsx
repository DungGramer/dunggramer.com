import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

const MantineGlobalProvider = ({
  children,
  theme,
  defaultColorScheme = 'auto',
}: {
  children: React.ReactNode;
  theme?: Parameters<typeof MantineProvider>['0']['theme'];
  defaultColorScheme?: Parameters<typeof MantineProvider>['0']['defaultColorScheme'];
}) => {
  return (
    // <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
    //   <MantineProvider
    //     defaultColorScheme={defaultColorScheme}
    //     theme={theme}
    //     withGlobalStyles
    //     withNormalizeCSS
    //   >
    //   </MantineProvider>
    // </NextAppDirEmotionCacheProvider>
        <>{children}</>
  );
};

export default MantineGlobalProvider;
