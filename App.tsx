import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import StackNavigator from "./src/navigation/StackNavigator";
import { store } from "./src/redux/store";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  var persist = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
