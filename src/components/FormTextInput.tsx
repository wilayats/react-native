import { TextInput, KeyboardTypeOptions } from "react-native"
import React from 'react';
import { useController } from "react-hook-form";
import styles from '../assets/css/style'

// @ts-ignore
export default function FromTextInput({
                                          // @ts-ignore
    name,
                                          // @ts-ignore
    control,
                                          // @ts-ignore
    error,
                                          // @ts-ignore
    placeholder,
    keyboardType = 'default'
}) {
    const { field, fieldState } = useController({ name, control })
    
    return (
        <TextInput
            style={styles.input}
            onChangeText={e => {
                field.onChange(e)
            }}
            value={field.value}
            placeholder={placeholder}
            keyboardType={keyboardType as KeyboardTypeOptions}
            secureTextEntry={true}
        />
    )
}