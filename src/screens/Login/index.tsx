import { View, Image } from 'react-native';
import { FormProvider, useForm, useController } from 'react-hook-form';
import React from 'react';
import LoginForm from './components/LogInForm';
import styles from '../../assets/css/style';

import { useDispatch } from 'react-redux';
import {useAppDispatch} from "../../../Redux/hooks.ts";
import AuthAction from "../../../Redux/Actions/AuthAction.ts";

export default function Login(props:any) {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    // resolver: yupResolver(loginWithEmail ? emailSchema : schema),
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: object) => {
    dispatch(AuthAction.login({isLoggedIn:true}));
  }
  
  return (
    <View>
      <FormProvider {...methods}>
        <Image
          source={require('../../assets/images/logo-new-green.png')}
          style={{...styles.image, marginTop: '30%'}}
        />
        <LoginForm methods={methods} onSubmit={onSubmit} />
      </FormProvider>
    </View>
  );
}
