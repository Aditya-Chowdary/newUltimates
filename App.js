import React, { useCallback, useEffect, useState } from 'react';
import {StatusBar} from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MergeNavigator from "./Navigation/MergeNavigators";
import Loading from './Components/Loading';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [IsLoading, setLoading] = useState(true);
    useEffect(() => {
        async function prepare() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();

            setTimeout(() => { setLoading(false) }, 3000)
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return (
            null);
    }
    else {
        onLayoutRootView();
    }
    return (
        < >
            <StatusBar backgroundColor="crimson" />
            <NavigationContainer>
                {
                    IsLoading ? <Loading /> : <MergeNavigator />
                }
            </NavigationContainer>
        </>
    );
}
