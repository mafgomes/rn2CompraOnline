import React from 'react';
import {StatusBar} from 'react-native';

// ROUTES
import {Routes} from '@routes/index';

// SERVICES
import {QueryClientProvider} from 'react-query';
import {queryClient} from '@services/queryClient';

// STYLES
import {ThemeProvider} from 'styled-components/native';
import theme from '@styles/theme';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
