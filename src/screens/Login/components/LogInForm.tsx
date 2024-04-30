import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FormProvider } from 'react-hook-form';
import React from 'react';
import FromTextInput from '../../../components/FormTextInput';
import styles from '../../../assets/css/style'

// @ts-ignore
export default function LoginForm({ methods, onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = methods;

  return (
    <View>
      <FormProvider {...methods}>
        <Image
          source={require('../../../assets/images/email.svg')}
          // height={50}
          // width={50}
        />
        <FromTextInput
          name={'email'}
          control={control}
          error={errors}
          placeholder={'Email'}
          keyboardType={'email-address'}
        />
        <FromTextInput
          name={'password'}
          control={control}
          error={errors}
          placeholder={'Password'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={styles.buttonText}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </FormProvider>
    </View>
  );
}
