import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const   ThreeBar = (props: any) =>  {
    return (
        <Svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M1 1.5H19" stroke="#444546" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 7.5H19" stroke="#444546" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 13.5H19" stroke="#444546" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}