import React from 'react'
import {Image} from "react-native";



export const AppLogo = (props: any) =>{
    return (

        <Image source={require('./Logo.png')}/>
        /*<Svg
            width={props.height}
            height={props.width}
            viewBox="0 0 204 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M22.117 42.612C33.431 42.612 42.6028 33.4403 42.6028 22.1263C42.6028 10.8124 33.431 1.64062 22.117 1.64062C10.8031 1.64062 1.63135 10.8124 1.63135 22.1263C1.63135 33.4403 10.8031 42.612 22.117 42.612Z" fill="#49918F" />
            <Path d="M32.7844 23.1073C32.7844 23.1073 30.297 25.6828 29.9213 25.9127C29.3235 26.2503 28.0124 26.0622 27.4769 25.1936L24.4413 19.8349L24.2176 19.4358C24.1897 19.3911 24.1618 19.342 24.1377 19.2973C24.0098 19.0572 23.9381 18.7884 23.9381 18.4992C23.9381 18.2873 23.9779 18.0821 24.0492 17.8936C24.0512 17.8879 24.0537 17.8821 24.0557 17.8768C24.0606 17.8637 24.0664 17.851 24.0717 17.8383C24.4085 17.0746 25.1956 16.8459 25.1956 16.8459L22.3591 16.7542C21.1647 16.7542 20.1941 17.7395 20.1941 18.9572C20.1941 19.3768 20.31 19.7718 20.5096 20.1016L25.4516 28.8098C25.4598 28.8262 25.4676 28.8422 25.4754 28.8545C25.8507 29.5182 26.5497 29.962 27.3528 29.962C28.1558 29.962 28.9187 29.4748 29.2764 28.7627L32.784 23.1073H32.7844Z" fill="white" />
            <Path d="M19.1617 25.1216L16.1261 19.7628L15.9024 19.3638C15.8745 19.3191 15.8467 19.2699 15.8225 19.2253C15.6946 18.9852 15.6229 18.7164 15.6229 18.4271C15.6229 18.2153 15.6627 18.01 15.734 17.8216C15.736 17.8158 15.7385 17.8101 15.7405 17.8048C15.7455 17.7917 15.7512 17.779 15.7565 17.7663C16.0933 17.0025 16.8804 16.7739 16.8804 16.7739L14.0439 16.6821C12.8495 16.6821 11.8789 17.6675 11.8789 18.8852C11.8789 19.3048 11.9949 19.6997 12.1944 20.0296L17.1365 28.7378C17.1447 28.7542 17.1524 28.7702 17.1602 28.7825C17.5355 29.4462 18.2345 29.8899 19.0376 29.8899C19.8406 29.8899 20.6035 29.4028 20.9612 28.6907L22.5169 26.1824C22.5169 26.1824 20.3548 27.3951 19.1613 25.1216H19.1617Z" fill="white" />
            <Path d="M66.8015 30.625L60.8681 9.43409H65.2576L69.3142 25.1456L73.734 9.43409H77.3062L81.7562 25.1456L85.8128 9.43409H90.2023L84.2689 30.625H79.5161L75.5201 16.639L71.5543 30.625H66.8015ZM103.536 28.7481C101.982 30.2819 100.085 31.0488 97.8448 31.0488C95.6046 31.0488 93.7075 30.2819 92.1535 28.7481C90.6197 27.1941 89.8528 25.297 89.8528 23.0568C89.8528 20.8166 90.6197 18.9296 92.1535 17.3958C93.7075 15.8418 95.6046 15.0648 97.8448 15.0648C100.085 15.0648 101.982 15.8418 103.536 17.3958C105.09 18.9296 105.867 20.8166 105.867 23.0568C105.867 25.297 105.09 27.1941 103.536 28.7481ZM94.9083 26.0538C95.6954 26.8409 96.6742 27.2345 97.8448 27.2345C99.0153 27.2345 99.9941 26.8409 100.781 26.0538C101.568 25.2667 101.962 24.2677 101.962 23.0568C101.962 21.8459 101.568 20.8469 100.781 20.0598C99.9941 19.2727 99.0153 18.8792 97.8448 18.8792C96.6742 18.8792 95.6954 19.2727 94.9083 20.0598C94.1414 20.8469 93.758 21.8459 93.758 23.0568C93.758 24.2677 94.1414 25.2667 94.9083 26.0538ZM112.519 18.0921C112.883 17.1234 113.478 16.3968 114.306 15.9125C115.153 15.4281 116.092 15.1859 117.121 15.1859V19.5452C115.93 19.4039 114.861 19.6461 113.912 20.2717C112.984 20.8974 112.519 21.9367 112.519 23.3898V30.625H108.614V15.4886H112.519V18.0921ZM133.361 30.625H128.82L123.31 23.7531V30.625H119.405V9.43409H123.31V22.1486L128.517 15.4886H133.179L127.094 22.966L133.361 30.625ZM137.907 19.7874C137.907 20.191 138.17 20.524 138.694 20.7864C139.239 21.0285 139.895 21.2505 140.662 21.4524C141.429 21.634 142.196 21.8762 142.963 22.1789C143.73 22.4615 144.375 22.9458 144.9 23.632C145.445 24.3182 145.718 25.1759 145.718 26.2052C145.718 27.7592 145.132 28.96 143.962 29.8076C142.811 30.6351 141.368 31.0488 139.633 31.0488C136.525 31.0488 134.406 29.848 133.275 27.4464L136.666 25.5392C137.11 26.851 138.099 27.5069 139.633 27.5069C141.025 27.5069 141.722 27.073 141.722 26.2052C141.722 25.8015 141.449 25.4786 140.904 25.2365C140.379 24.9741 139.734 24.742 138.967 24.5402C138.2 24.3384 137.433 24.0861 136.666 23.7834C135.899 23.4806 135.243 23.0064 134.698 22.3605C134.174 21.6945 133.911 20.8671 133.911 19.8782C133.911 18.3847 134.456 17.2142 135.546 16.3665C136.656 15.4987 138.028 15.0648 139.663 15.0648C140.894 15.0648 142.014 15.3474 143.023 15.9125C144.032 16.4574 144.83 17.2445 145.415 18.2737L142.085 20.0901C141.6 19.0608 140.793 18.5462 139.663 18.5462C139.158 18.5462 138.735 18.6572 138.392 18.8792C138.069 19.1012 137.907 19.4039 137.907 19.7874ZM159.526 15.4886H163.431V30.625H159.526V28.8389C158.355 30.3122 156.71 31.0488 154.591 31.0488C152.573 31.0488 150.837 30.2819 149.384 28.7481C147.951 27.1941 147.235 25.297 147.235 23.0568C147.235 20.8166 147.951 18.9296 149.384 17.3958C150.837 15.8418 152.573 15.0648 154.591 15.0648C156.71 15.0648 158.355 15.8015 159.526 17.2747V15.4886ZM152.321 26.1446C153.108 26.9317 154.107 27.3253 155.318 27.3253C156.529 27.3253 157.528 26.9317 158.315 26.1446C159.122 25.3374 159.526 24.3081 159.526 23.0568C159.526 21.8055 159.122 20.7864 158.315 19.9993C157.528 19.192 156.529 18.7884 155.318 18.7884C154.107 18.7884 153.108 19.192 152.321 19.9993C151.534 20.7864 151.14 21.8055 151.14 23.0568C151.14 24.3081 151.534 25.3374 152.321 26.1446ZM175.781 15.0648C177.82 15.0648 179.555 15.8418 180.988 17.3958C182.441 18.9296 183.168 20.8166 183.168 23.0568C183.168 25.297 182.441 27.1941 180.988 28.7481C179.555 30.2819 177.82 31.0488 175.781 31.0488C173.662 31.0488 172.028 30.3122 170.877 28.8389V36.6795H166.972V15.4886H170.877V17.2747C172.028 15.8015 173.662 15.0648 175.781 15.0648ZM172.058 26.1446C172.845 26.9317 173.844 27.3253 175.055 27.3253C176.266 27.3253 177.265 26.9317 178.052 26.1446C178.859 25.3374 179.263 24.3081 179.263 23.0568C179.263 21.8055 178.859 20.7864 178.052 19.9993C177.265 19.192 176.266 18.7884 175.055 18.7884C173.844 18.7884 172.845 19.192 172.058 19.9993C171.271 20.7864 170.877 21.8055 170.877 23.0568C170.877 24.3081 171.271 25.3374 172.058 26.1446ZM194.731 15.0648C196.77 15.0648 198.505 15.8418 199.938 17.3958C201.391 18.9296 202.118 20.8166 202.118 23.0568C202.118 25.297 201.391 27.1941 199.938 28.7481C198.505 30.2819 196.77 31.0488 194.731 31.0488C192.612 31.0488 190.978 30.3122 189.827 28.8389V36.6795H185.922V15.4886H189.827V17.2747C190.978 15.8015 192.612 15.0648 194.731 15.0648ZM191.008 26.1446C191.795 26.9317 192.794 27.3253 194.005 27.3253C195.216 27.3253 196.215 26.9317 197.002 26.1446C197.809 25.3374 198.213 24.3081 198.213 23.0568C198.213 21.8055 197.809 20.7864 197.002 19.9993C196.215 19.192 195.216 18.7884 194.005 18.7884C192.794 18.7884 191.795 19.192 191.008 19.9993C190.221 20.7864 189.827 21.8055 189.827 23.0568C189.827 24.3081 190.221 25.3374 191.008 26.1446Z" fill="#4F9A90" />
        </Svg>*/
    )
}