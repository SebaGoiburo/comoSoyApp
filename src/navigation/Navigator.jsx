import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BotonTabNavigator from './BotonTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/UserSlice'
import { getSession } from '../persistence'



const Navigator = () => {
  const { user } = useSelector((state)=> state.auth.value)
  const dispatch = useDispatch();


  useEffect(() => {
    (async () => {
      try {
        const response = await getSession();
        if (response.rows.length > 0) {
          const user = response.rows._array[0];
          dispatch(
            setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token,
            })
          );
        }
        console.log(user)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);

  return (
    <NavigationContainer>
        { user ? <BotonTabNavigator /> : <AuthStackNavigator /> }
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})