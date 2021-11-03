import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  View 
} from 'react-native'
import Navigator from './src/navigator'

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  )
}
