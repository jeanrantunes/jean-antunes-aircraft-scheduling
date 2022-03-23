import { addDecorator } from "@storybook/react";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import { GlobalStyle } from "styles/globals";

addDecorator((story) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    {story()}
  </QueryClientProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}