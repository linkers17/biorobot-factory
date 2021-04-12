import {StockStateInterface} from "@/interfaces/stockState.interface";

const namespaced = true;

const state: StockStateInterface[] = [
    {
        id: 1,
        title: 'Биомеханизм',
        name: 'biomechanism',
        count: 0,
        amountSale: 7,
        amountPurchase: 5,
        inProduction: 0,
        img: '<svg width="101" height="67" viewBox="0 0 101 67" xmlns="http://www.w3.org/2000/svg"><path d="M34.4703 25.9518C34.1959 26.1153 33.8945 26.193 33.5973 26.193C33.0061 26.193 32.4307 25.8857 32.1092 25.3327C31.626 24.502 31.9002 23.4328 32.7211 22.9441L39.7594 18.755C40.5797 18.2663 41.6376 18.5434 42.1205 19.3741C42.6037 20.2048 42.3296 21.274 41.5086 21.7628L34.4703 25.9518Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M100.974 40.0405L99.5551 31.8483C99.4238 31.09 98.8165 30.5082 98.0608 30.417L90.6529 29.5218L88.0793 24.7105C88.9114 23.2705 89.1852 21.5562 88.8295 19.9122C88.4266 18.0504 87.2533 16.448 85.6096 15.5159L78.4656 11.4632C77.6352 10.9919 76.5837 11.291 76.1176 12.1315C75.6519 12.972 75.9476 14.0354 76.7785 14.5067L83.9226 18.5594C85.5662 19.492 86.0445 21.6641 84.9299 23.2149C84.1096 24.3559 82.6209 24.8179 81.3085 24.3376L60.9659 16.8886C62.3984 15.9386 63.5821 14.5705 64.3131 12.8657C65.0067 11.248 65.2236 9.50395 64.9612 7.80317L70.6643 11.0384C70.9313 11.1898 71.2208 11.2617 71.5064 11.2617C72.1101 11.2617 72.6961 10.9405 73.0125 10.37C73.4782 9.52954 73.1824 8.46617 72.3518 7.99486L61.1503 1.64026C60.6644 1.30108 60.1421 1.00749 59.5884 0.764625C57.3597 -0.213131 54.888 -0.25454 52.6285 0.648309C50.3691 1.55116 48.5925 3.28962 47.6257 5.54407C47.3941 6.08401 47.2182 6.63442 47.0949 7.18879L14.5899 21.6506C9.87337 21.7702 5.46205 24.151 2.72953 28.0711C2.18059 28.8585 2.36687 29.947 3.14555 30.5023C3.92446 31.0579 5.00027 30.8692 5.54898 30.0817C7.70175 26.9931 11.2072 25.1457 14.9314 25.1353L14.964 25.1355L14.9875 25.1353C21.325 25.1485 26.4766 30.3681 26.4766 36.782C26.4766 43.2041 21.3117 48.4288 14.9631 48.4288C8.6145 48.4288 3.44957 43.2041 3.44957 36.782C3.44957 36.4754 3.46429 36.1483 3.49511 35.7826C3.5756 34.8226 2.87096 33.9783 1.92187 33.8969C0.975078 33.8139 0.138212 34.5278 0.0577224 35.4881C0.0188572 35.9527 0 36.3759 0 36.782C0 42.3673 3.00596 47.2556 7.4674 49.8786L15.3497 67H19.1547L12.082 51.637C13.0145 51.8218 13.9779 51.9188 14.9631 51.9188C19.1936 51.9188 23.0197 50.1335 25.7437 47.2689L34.7048 67H38.5017L28.226 44.374L55.548 18.6157L80.1345 27.6184C80.8617 27.8847 81.615 28.0127 82.3618 28.0127C83.4567 28.0127 84.5368 27.737 85.4988 27.2183L87.6194 31.1823L84.3082 37.945C83.9704 38.6349 84.1197 39.4671 84.6755 39.9933L90.6787 45.6758C91.0112 45.9908 91.4344 46.1467 91.8566 46.1467C92.3175 46.1467 92.7769 45.9613 93.1166 45.5942C93.7674 44.8907 93.7313 43.7864 93.0354 43.128L87.9685 38.3316L90.5667 33.0252L96.379 33.7278L97.5764 40.6426C97.7411 41.5919 98.6355 42.227 99.5731 42.0602C100.511 41.8939 101.138 40.9894 100.974 40.0405ZM55.9771 3.49457C58.2285 3.49457 60.3457 4.86897 61.2198 7.10713C62.7732 11.0866 59.596 15.3223 55.3889 14.8852C51.9163 14.383 50.0742 11.4855 50.3516 8.64042C50.3559 8.60785 50.3594 8.57528 50.3619 8.54248C50.6926 5.66295 53.1117 3.49457 55.9771 3.49457ZM20.6326 22.7743L47.0563 11.0179C47.5892 13.679 49.2735 16.0644 51.799 17.3804L29.8745 38.0506C29.9089 37.6323 29.9264 37.2094 29.9264 36.7823C29.9264 30.4646 26.0804 25.0387 20.6326 22.7743Z"/><path d="M29.1353 67L23.9547 55.593C23.5571 54.7176 22.5328 54.3331 21.6674 54.736C20.8018 55.1382 20.4226 56.1741 20.8199 57.0497L25.339 67H29.1353Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5877 36.7823C22.5877 32.5293 19.1674 29.0693 14.963 29.0693C10.7587 29.0693 7.33832 32.5295 7.33832 36.7823C7.33832 41.035 10.7587 44.4952 14.963 44.4952C19.1674 44.4952 22.5877 41.0353 22.5877 36.7823ZM10.7877 36.7823C10.7877 34.4534 12.6608 32.5588 14.9628 32.5588C17.2648 32.5588 19.1379 34.4536 19.1379 36.7823C19.1379 39.1109 17.2648 41.0057 14.9628 41.0057C12.6608 41.0057 10.7877 39.1112 10.7877 36.7823Z"/></svg>'
    },
    {
        id: 2,
        title: 'Процессор',
        name: 'processor',
        count: 0,
        amountSale: 5,
        amountPurchase: 3,
        inProduction: 0,
        img: '<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M68 7.58V0H65.3333V6.77333C64.8917 6.70583 64.4467 6.67083 64 6.66667H61.3333V0H58.6667V6.66667H54.6667V0H52V6.66667H48V0H45.3333V6.66667H41.3333V0H38.6667V6.66667H34.6667V0H32V6.66667H28V0H25.3333V6.66667H21.3333V0H18.6667V6.66667H16C15.5533 6.67083 15.1083 6.70583 14.6667 6.77333V0H12V7.58C10.0646 8.50458 8.50458 10.0646 7.58 12H0V14.6667H6.77333C6.70583 15.1083 6.67083 15.5533 6.66667 16V18.6667H0V21.3333H6.66667V25.3333H0V28H6.66667V32H0V34.6667H6.66667V38.6667H0V41.3333H6.66667V45.3333H0V48H6.66667V52H0V54.6667H6.66667V58.6667H0V61.3333H6.66667V64C6.67083 64.4467 6.70583 64.8917 6.77333 65.3333H0V68H7.58C8.50458 69.9354 10.0646 71.4954 12 72.42V80H14.6667V73.2267C15.1083 73.2942 15.5533 73.3292 16 73.3333H18.6667V80H21.3333V73.3333H25.3333V80H28V73.3333H32V80H34.6667V73.3333H38.6667V80H41.3333V73.3333H45.3333V80H48V73.3333H52V80H54.6667V73.3333H58.6667V80H61.3333V73.3333H64C64.4467 73.3292 64.8917 73.2942 65.3333 73.2267V80H68V72.42C69.9354 71.4954 71.4954 69.9354 72.42 68H80V65.3333H73.2267C73.2942 64.8917 73.3292 64.4467 73.3333 64V61.3333H80V58.6667H73.3333V54.6667H80V52H73.3333V48H80V45.3333H73.3333V41.3333H80V38.6667H73.3333V34.6667H80V32H73.3333V28H80V25.3333H73.3333V21.3333H80V18.6667H73.3333V16C73.3292 15.5533 73.2942 15.1083 73.2267 14.6667H80V12H72.42C71.4954 10.0646 69.9354 8.50458 68 7.58ZM70.6667 64C70.6621 67.68 67.68 70.6621 64 70.6667H16C12.32 70.6621 9.33792 67.68 9.33333 64V16C9.33792 12.32 12.32 9.33792 16 9.33333H64C67.68 9.33792 70.6621 12.32 70.6667 16V64Z"/><path d="M62.6667 13.3333H17.3333C15.1246 13.3333 13.3333 15.1246 13.3333 17.3333V62.6667C13.3333 64.8754 15.1246 66.6667 17.3333 66.6667H62.6667C64.8754 66.6667 66.6667 64.8754 66.6667 62.6667V17.3333C66.6667 15.1246 64.8754 13.3333 62.6667 13.3333ZM64 62.6667C64 63.4033 63.4033 64 62.6667 64H17.3333C16.5967 64 16 63.4033 16 62.6667V17.3333C16 16.5967 16.5967 16 17.3333 16H62.6667C63.4033 16 64 16.5967 64 17.3333V62.6667Z"/><path d="M58.6667 18.6667H61.3333V21.3333H58.6667V18.6667Z"/><path d="M18.6667 58.6667H21.3333V61.3333H18.6667V58.6667Z"/><path d="M18.6667 21.3333V25.3333H21.3333V21.3333H25.3333V18.6667H21.3333C19.8604 18.6667 18.6667 19.8604 18.6667 21.3333Z"/><path d="M58.6667 58.6667H54.6667V61.3333H61.3333V54.6667H58.6667V58.6667Z"/></svg>'
    },
    {
        id: 3,
        title: 'Душа',
        name: 'heart',
        count: 0,
        amountSale: 25,
        amountPurchase: 15,
        inProduction: 0,
        img: '<svg width="88" height="88" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="44" r="42.5" stroke-width="3"/><path d="M65.7728 36.4271C65.887 36.1043 65.9839 35.7756 66.063 35.4425C66.2446 34.4744 66.3994 34.3431 67.3614 34.3626C67.5222 34.3653 67.6775 34.304 67.7932 34.1923C67.8434 34.1318 67.7676 33.8662 67.6742 33.8016C67.4107 33.619 67.1214 33.4098 66.8179 33.3596C65.9748 33.2211 65.9195 33.1216 66.2353 32.3586C66.3656 32.0448 66.3379 31.6602 66.3584 31.3074C66.4097 30.4685 66.8712 29.8039 67.343 29.1763C67.6506 28.766 68.2824 29.0204 68.4578 29.5619C68.5357 29.8039 68.6188 30.0439 68.6998 30.2849L68.8383 30.249C68.7008 29.6767 68.5634 29.1045 68.4147 28.4871C68.6095 28.4676 68.7162 28.4255 68.7983 28.4543C69.1818 28.5876 69.4464 28.4543 69.6802 28.1466C69.8464 27.9251 70.0125 27.7897 70.2669 28.1363C71.2674 29.4732 71.9055 31.046 72.1191 32.7022C72.2203 33.4091 72.3662 34.109 72.556 34.7974C72.8472 35.9133 72.8411 37.0373 72.7744 38.2187C72.4011 36.5642 71.8151 34.9651 71.0309 33.4611L70.9079 33.5062C71.0525 33.8775 71.1899 34.2508 71.3407 34.619C71.9683 36.142 71.8873 37.6352 71.1622 39.1059C71.0884 39.2566 71.0658 39.432 70.9991 39.5869C70.8576 39.9089 70.8689 40.2884 71.1981 40.3571C71.4104 40.4012 71.7519 40.1212 71.9396 39.9038C72.1273 39.6863 72.1662 39.3756 72.2944 39.1161C72.3808 38.9632 72.4792 38.8175 72.5888 38.6803L72.7744 38.7336C72.7272 39.1172 72.7047 39.5058 72.6257 39.8833C72.5231 40.3663 72.3919 40.8442 72.2462 41.3191C72.1006 41.7939 71.836 41.88 71.5017 41.5621C71.1673 41.2442 70.7653 40.9857 70.6812 40.434C70.6381 40.1561 70.3141 39.9212 70.1171 39.6669C69.9346 39.9335 69.7387 40.193 69.5767 40.4709C69.5231 40.5799 69.515 40.7057 69.5541 40.8206C69.8413 41.5652 69.9131 42.3969 70.5889 42.9805C71.0761 43.402 70.875 43.9374 70.2484 44.1353C70.1747 44.1645 70.1083 44.2095 70.0537 44.2671C69.9992 44.3247 69.9578 44.3934 69.9325 44.4686C69.7028 45.5178 68.83 45.729 67.9952 45.9464C67.4659 46.0689 66.926 46.1396 66.383 46.1577C66.2446 46.1659 65.9902 46.0018 65.9656 45.8808C65.8569 45.3819 65.7934 44.8743 65.7759 44.364C65.7492 43.2964 65.7677 42.2287 65.7677 41.157C66.4856 41.0955 66.6589 40.8873 66.4856 40.1314C66.3523 39.5581 66.1666 38.9972 65.9636 38.2936L65.2693 39.7756C65.0303 39.4843 64.7995 39.2956 64.6898 39.0577C64.3821 38.3921 64.0745 37.7183 63.8868 37.0168C63.777 36.6065 63.8683 36.1399 63.9227 35.704C63.935 35.6015 64.1503 35.46 64.2867 35.4415C64.7657 35.3738 65.2744 35.7256 65.4641 36.2035C65.5009 36.2758 65.5445 36.3445 65.5944 36.4086L65.7728 36.4271ZM70.23 32.6048L70.392 32.4878C70.1062 32.0906 69.8204 31.694 69.5346 31.2982L69.3726 31.4151C69.657 31.811 69.9428 32.2075 70.23 32.6048Z"/><path d="M62.6709 32.1905C62.754 31.4726 62.7786 30.9177 62.8924 30.3875C62.9629 30.0915 63.1105 29.8194 63.3201 29.5989C63.9354 28.9517 64.4482 28.2656 64.7559 27.398C65.0451 26.5652 65.6892 25.996 66.646 26.0165C66.9127 26.0165 67.2614 26.1724 67.4101 26.3755C67.5055 26.5027 67.3732 26.8985 67.2306 27.0934C66.7609 27.721 66.5548 28.4451 66.2707 29.1568C65.6963 30.5926 65.7907 32.131 65.3918 33.5883C65.3036 33.9104 65.0441 34.415 64.8318 34.4314C64.2031 34.4806 63.4309 34.5585 63.1098 33.7976C62.8719 33.2396 62.7837 32.6243 62.6709 32.1905Z"/><path d="M62.0983 60.8856C62.0388 61.2507 62.0481 61.5092 61.9517 61.7184C61.6885 62.3261 61.3852 62.9158 61.044 63.4834C60.8246 63.8321 60.4533 64.0813 60.1877 64.4064C59.7974 64.8724 59.4338 65.3599 59.0985 65.8668C58.7242 66.4504 58.4483 67.0975 58.0535 67.6677C57.7765 68.0646 57.3899 68.3938 57.0176 68.7128C56.4691 69.194 55.896 69.6465 55.3008 70.0686C55.0085 70.2737 54.6116 70.3189 54.2957 70.4952C54.0342 70.6419 53.6999 70.8306 53.6107 71.0778C53.3471 71.809 52.6251 71.728 52.1205 72.0193C52.1123 72.0244 51.8733 71.7465 51.9051 71.687C52.1595 71.1782 52.4491 70.6878 52.7717 70.2194C54.0517 68.4523 55.7962 67.1488 57.3509 65.6535C58.2432 64.7961 59.0585 63.8577 59.9149 62.9614C60.523 62.3235 61.1394 61.6938 61.7558 61.0641C61.7978 61.021 61.8645 61.0036 62.0983 60.8856Z"/><path d="M20.4367 31.7408C20.6295 31.7562 20.7383 31.7316 20.7967 31.7757C21.3023 32.1552 21.8172 32.5264 22.291 32.9438C22.4787 33.11 22.3935 33.2997 22.132 33.4074C21.3321 33.7397 20.5434 34.1007 19.7435 34.433C19.2307 34.6473 18.5076 34.195 18.3015 33.55C18.1148 32.9674 18.4041 32.5172 19.0297 32.3316C19.3537 32.2352 19.6553 32.0629 19.9681 31.9296C20.1527 31.8506 20.3393 31.7798 20.4367 31.7408Z"/><path d="M59.2441 70.6388C58.6923 71.4059 58.1402 72.173 57.5878 72.9401C57.1673 73.5227 56.7796 74.1329 56.312 74.6744C55.9041 75.1292 55.4531 75.5434 54.9654 75.9112C54.7449 76.0825 54.4946 76.0138 54.5193 75.6354C54.5346 75.3984 54.5326 75.1605 54.5572 74.9246C54.6105 74.4118 54.6146 73.9544 55.2413 73.6427C55.8484 73.3422 56.2925 72.7196 56.8299 72.2694C57.4883 71.7156 58.1631 71.1854 58.8441 70.6521C58.9404 70.5961 59.0439 70.5537 59.1518 70.5259L59.2441 70.6388Z"/><path d="M59.4454 68.0667C59.1377 68.5057 58.9142 68.8677 58.6537 69.2061C58.3009 69.6635 57.9358 70.1107 57.5481 70.5394C57.4743 70.6224 57.3009 70.6173 57.1738 70.6532C57.1204 70.4543 56.9615 70.1999 57.0322 70.0666C57.2435 69.6666 57.4927 69.2574 57.824 68.959C58.2055 68.6154 58.6885 68.3846 59.1316 68.1108C59.1798 68.0841 59.2536 68.0944 59.4454 68.0667Z"/><path d="M20.6426 37.4749L20.8364 36.8708C21.0492 36.9358 21.2569 37.0163 21.4579 37.1118C21.6916 37.2472 21.9123 37.4037 22.1174 37.5795C22.2097 37.6574 22.3225 37.803 22.305 37.8974C22.2876 37.9917 22.1338 38.083 22.0199 38.1292C21.8627 38.1889 21.6982 38.2271 21.5307 38.243C20.8138 38.3189 20.6846 38.1999 20.6426 37.4749Z"/><path d="M25.0026 36.8584C25.1585 36.32 25.3102 35.801 25.4589 35.2862C26.0179 35.3703 26.5061 35.799 26.4784 36.1477C26.4384 36.6799 26.0066 36.9004 25.0026 36.8584Z"/><path d="M24.0795 37.201C24.4189 37.2574 24.662 37.2605 24.8712 37.3446C24.9415 37.3786 25.0035 37.4276 25.0528 37.4882C25.102 37.5489 25.1374 37.6195 25.1563 37.6953C25.1707 37.7876 25.0035 37.9938 24.9061 38.003C24.6671 38.0235 24.3533 38.0358 24.2005 37.9004C24.0702 37.7774 24.1174 37.4564 24.0795 37.201Z"/><path d="M23.0455 35.914C23.1337 35.5612 23.1645 35.2022 23.6075 35.1653C23.6383 35.1653 23.746 35.3919 23.7101 35.473C23.6086 35.7365 23.6137 36.196 23.0455 35.914Z"/><path d="M26.7112 50.5089L27.3891 50.8586C27.3306 50.9427 27.2865 51.0873 27.2106 51.0996C26.8701 51.1591 26.6722 51.0011 26.7112 50.5089Z"/><path d="M41.5852 29.9193C41.416 29.6978 41.2694 29.5512 41.2889 29.5235C41.4669 29.2813 41.6626 29.0527 41.8745 28.8394C41.9692 28.8949 42.0553 28.964 42.1298 29.0445C41.9862 29.304 41.8222 29.5553 41.5852 29.9193Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3303 26.2509C17.2542 26.3965 17.1877 26.5472 17.1312 26.7021C17.0373 26.9959 17.0119 27.311 16.9865 27.6267C16.9733 27.7904 16.9601 27.9543 16.9373 28.1153C16.8789 28.5379 17.1845 29.1235 17.6378 29.184C17.8439 29.2117 18.1578 28.9266 18.3167 28.7071C18.7475 28.1143 19.4264 27.901 20.0274 27.8241C20.6873 27.7392 21.3716 27.8213 22.0515 27.9028C22.2423 27.9257 22.4327 27.9486 22.6221 27.9677C23.2897 28.0364 23.8938 28.6804 24.0989 29.3696C24.1522 29.5501 24.3912 29.706 24.5779 29.8086C24.6868 29.8713 24.8109 29.9143 24.9339 29.9569C25.1107 30.0183 25.2854 30.0789 25.4106 30.1962C26.4731 31.188 26.9551 32.5048 27.3469 33.8545C27.4886 34.3061 27.5477 34.7797 27.5213 35.2523C27.433 36.2713 27.3023 37.2865 27.1716 38.3019C27.1336 38.5967 27.0956 38.8915 27.0587 39.1864C27.0358 39.3689 27.0157 39.5526 26.9956 39.7366C26.9365 40.2763 26.8772 40.8185 26.7449 41.3401C26.6512 41.7085 26.5026 42.0624 26.3538 42.4168C26.2337 42.7028 26.1135 42.9891 26.0219 43.2836C25.9249 43.5971 25.8629 43.9216 25.8008 44.2463C25.7473 44.5261 25.6937 44.806 25.6178 45.0794C25.424 45.7798 25.6763 46.5224 26.3306 46.7685C26.9627 47.0087 27.6361 47.1214 28.312 47.1003C28.9878 47.0792 29.6529 46.9246 30.2688 46.6454C30.7961 46.3939 31.381 46.2877 31.963 46.3378C32.0712 46.3472 32.1779 46.3827 32.2843 46.418C32.4077 46.459 32.5308 46.4998 32.6553 46.4998C33.8869 46.5209 35.1027 46.7804 36.2356 47.2638C36.5135 47.3777 37.0212 47.2731 37.2611 47.07C37.5011 46.8669 37.6857 46.3695 37.6037 46.0855C37.4726 45.6322 37.6076 45.2922 37.7485 44.9371C37.7741 44.8728 37.7998 44.808 37.8242 44.742C37.8489 44.7476 37.871 44.7506 37.8899 44.7532C37.9226 44.7576 37.9453 44.7607 37.9544 44.7738C38.6528 45.7542 39.1759 46.7685 38.858 48.0474C38.8082 48.2871 38.7097 48.5141 38.5685 48.7141C38.4274 48.9142 38.2466 49.0831 38.0375 49.2104C37.5719 49.4914 37.0827 49.7847 36.5699 49.9211C36.1334 50.0358 35.6674 50.0438 35.2049 50.0518C35.0883 50.0538 34.9718 50.0558 34.8562 50.0596C34.7909 50.0488 34.7295 50.0218 34.6773 49.9811C34.6252 49.9405 34.5841 49.8874 34.5577 49.8268C34.5341 49.7406 34.6439 49.5755 34.7393 49.5088C34.942 49.3532 35.1676 49.2297 35.4079 49.1427L35.4275 49.1366C35.7231 49.0439 35.982 48.9627 35.8756 48.5684C35.7889 48.2464 35.5577 48.2723 35.3312 48.2977C35.2872 48.3027 35.2433 48.3076 35.2008 48.3099C35.027 48.3193 34.8532 48.3282 34.6794 48.3372C34.0724 48.3685 33.4653 48.3998 32.8594 48.4484C32.5402 48.4918 32.2237 48.5537 31.9117 48.634C31.939 48.7307 31.9733 48.8253 32.0143 48.9171C32.4153 49.5652 32.3876 49.594 31.8 50.0585C31.7066 50.1367 31.6302 50.2332 31.5755 50.342C31.5208 50.4509 31.489 50.5697 31.482 50.6913C31.4943 50.9641 31.5565 51.2341 31.619 51.5048C31.6561 51.6656 31.6932 51.8266 31.72 51.9887C31.8071 52.5199 31.5477 52.7271 31.0462 52.6512C30.7752 52.6127 30.4994 52.6735 30.2698 52.8225C30.0103 53.0142 29.9652 53.3404 30.197 53.6429C30.2391 53.7162 30.2646 53.7977 30.2719 53.8819C30.3157 54.0923 30.3568 54.3037 30.3979 54.5151C30.4884 54.9806 30.5789 55.4463 30.6995 55.9033C30.7939 56.2612 31.0339 56.574 31.4728 56.4991C31.8933 56.4284 32.3056 56.2694 32.1825 55.7105C32.0671 55.1543 31.9156 54.6061 31.7292 54.0696C31.5589 53.5978 31.8543 53.3752 32.1528 53.2132C32.5146 53.017 32.6962 53.3307 32.8531 53.6018L32.8573 53.6091C32.8851 53.6569 32.9131 53.7047 32.941 53.7525C33.0575 53.9518 33.1742 54.1514 33.2809 54.3557C33.3295 54.4469 33.3841 54.5377 33.4387 54.6287C33.5879 54.8771 33.7378 55.1267 33.7701 55.3895C33.8388 55.9597 34.1178 56.0264 34.5977 56.0048C35.9996 55.9422 37.4015 55.9094 38.8043 55.8766L38.9369 55.8735C39.1131 55.869 39.2908 55.8798 39.4682 55.8905C39.7349 55.9065 40.0011 55.9226 40.2609 55.8869C40.9322 55.782 41.5977 55.6427 42.2547 55.4695C42.4445 55.423 42.629 55.3547 42.8136 55.2863C42.971 55.228 43.1285 55.1697 43.2895 55.1249C43.8084 54.9813 44.3304 54.848 44.8586 54.7454C44.969 54.7242 45.0933 54.766 45.2155 54.8072C45.2591 54.8218 45.3024 54.8364 45.3447 54.848C45.7272 54.9516 46.1098 55.0562 46.4893 55.171C46.5466 55.1883 46.6073 55.2033 46.6685 55.2183C46.8501 55.2629 47.0359 55.3085 47.1518 55.4213C47.7117 55.9628 48.2245 56.5402 48.7373 57.1237C48.7753 57.1859 48.7983 57.2561 48.8043 57.3288C48.8104 57.4015 48.7994 57.4745 48.7722 57.5422C48.7209 57.6447 48.526 57.7698 48.4235 57.7473C48.0582 57.6657 47.7048 57.5578 47.3507 57.4497C47.2415 57.4164 47.1323 57.383 47.0226 57.3504C46.8827 57.2909 46.7374 57.2448 46.5887 57.2129C45.6704 57.1054 44.7419 57.2987 43.9428 57.7637C43.6301 57.9599 43.2968 58.1212 42.949 58.2447C42.0906 58.5164 41.2475 58.8057 40.5091 59.3451C40.3348 59.4733 40.1122 59.6169 39.9143 59.6118C39.4077 59.6005 38.9913 59.7184 38.7862 60.2086C38.6112 60.6413 38.4706 61.0871 38.3657 61.5419C38.339 61.6557 38.4631 61.8291 38.5554 61.9429C38.9359 62.4085 39.4784 62.4793 39.9974 62.3593C40.3768 62.2721 40.5327 62.3859 40.5819 62.6936C40.6418 63.1142 40.6791 63.5377 40.6937 63.9622C40.7153 64.3509 40.5255 64.5499 40.1256 64.6022C39.8252 64.642 39.5329 64.7282 39.259 64.8576C38.9212 65.0071 38.6069 65.2047 38.3257 65.4442C38.2405 65.5214 38.113 65.5716 37.9845 65.6221C37.6641 65.748 37.338 65.8762 37.6498 66.4318C37.5641 66.4725 37.4653 66.4993 37.3675 66.5259C37.0827 66.6033 36.805 66.6788 36.8745 67.0872C36.9617 67.5948 36.6653 67.7517 36.2981 67.8122C35.7607 67.9004 35.7289 68.1794 35.8633 68.6183C36.0021 69.07 36.1323 69.5246 36.2626 69.9793C36.3787 70.3846 36.4948 70.79 36.6171 71.1936C36.6347 71.2526 36.7009 71.2972 36.7673 71.3419C36.7977 71.3624 36.8282 71.3829 36.854 71.4048C36.8788 71.3683 36.9104 71.3321 36.942 71.2959C37.0098 71.2183 37.0776 71.1407 37.0776 71.0602C37.0909 70.6969 37.0931 70.3333 37.0954 69.9697C37.0975 69.6333 37.0995 69.297 37.1104 68.9609C37.1139 68.8609 37.1674 68.7629 37.2209 68.6648C37.2459 68.619 37.271 68.5731 37.2909 68.5271C37.4234 68.6111 37.5508 68.7028 37.6724 68.8019C37.7888 68.9083 37.9011 69.0194 38.0134 69.1303C38.2138 69.3283 38.4139 69.526 38.6354 69.6962C38.8631 69.8665 38.9656 70.0008 38.8631 70.2849C38.6149 70.969 38.6826 71.0859 39.4179 71.1966C39.6882 71.2257 39.9611 71.2209 40.2302 71.1823C40.4946 71.1578 40.7583 71.126 41.022 71.0942C41.4108 71.0473 41.7995 71.0004 42.1901 70.9772C42.3133 70.9693 42.4387 71.0335 42.5667 71.0991C42.6389 71.1361 42.7119 71.1735 42.7859 71.1987C42.8514 71.2215 42.9227 71.2534 42.9948 71.2856C43.179 71.3679 43.3683 71.4525 43.4782 71.3936C43.872 71.1843 44.2853 70.9064 44.5273 70.5464C44.756 70.2059 44.9468 70.1752 45.3098 70.1967C45.7385 70.2213 46.1816 70.1331 46.6062 70.0388C46.8049 69.9951 46.9944 69.908 47.1836 69.821C47.2746 69.7791 47.3655 69.7373 47.4574 69.7003C47.5547 69.6609 47.6678 69.6299 47.7809 69.599C48.0265 69.5318 48.2713 69.4648 48.3507 69.3116C48.5671 68.8932 48.8635 68.6655 49.246 68.4604C49.4477 68.3339 49.6131 68.1572 49.726 67.9476C49.8531 67.7271 49.8531 67.4943 49.5455 67.3641C48.9301 67.1077 48.8973 66.9795 49.3691 66.4923C49.4917 66.3667 49.6624 66.2845 49.8315 66.2031C49.8888 66.1755 49.9458 66.1481 50.0008 66.119C50.183 66.0225 50.3672 65.9288 50.5514 65.835C50.7841 65.7166 51.0169 65.5981 51.2459 65.4739C51.3679 65.4078 51.4861 65.333 51.6041 65.2584C51.8024 65.1329 52.0003 65.0078 52.215 64.9242C52.2872 64.8961 52.3598 64.869 52.4322 64.8419C52.9666 64.6425 53.4924 64.4463 53.7534 63.8484C53.778 63.7904 53.8358 63.7491 53.8938 63.7078C53.9228 63.687 53.952 63.6662 53.977 63.6433C54.0798 63.5497 54.1841 63.4574 54.2884 63.3651C54.5463 63.137 54.8043 62.9088 55.0395 62.6598C55.2794 62.4054 55.4353 62.4157 55.5656 62.7234C55.6398 62.8988 55.7008 63.0798 55.771 63.2877C55.8046 63.3873 55.8402 63.4931 55.8804 63.6074C56.1532 62.7613 56.5389 62.0885 57.2568 61.6496C57.2968 61.6183 57.3297 61.5788 57.353 61.5336C57.3764 61.4885 57.3897 61.4388 57.3921 61.3881C57.3988 60.9804 57.6707 60.7594 57.9395 60.5408C57.9588 60.5251 57.9781 60.5095 57.9972 60.4938C58.0598 60.4424 58.1274 60.3913 58.1958 60.3395C58.4405 60.1545 58.6965 59.9608 58.7767 59.7164C58.9772 59.1209 59.1035 58.502 59.2302 57.8813C59.2713 57.68 59.3124 57.4785 59.3561 57.2776C59.3729 57.2027 59.3728 57.1256 59.3727 57.0489C59.3725 56.971 59.3724 56.8935 59.39 56.8191C59.4479 56.5752 59.5109 56.3318 59.574 56.0883C59.7993 55.219 60.0253 54.3472 60.0197 53.4347C60.0145 52.4492 59.993 51.4625 59.9427 50.479C59.9356 50.3477 59.7366 50.196 59.593 50.1088C59.2659 49.9088 59.03 49.6996 59.0956 49.2545C59.1197 49.0909 59.0773 48.9175 59.0408 48.7686C59.0261 48.7083 59.0123 48.6521 59.0043 48.6022H58.1746C58.1951 48.5228 58.2146 48.4431 58.2342 48.3634C58.2756 48.195 58.317 48.0264 58.3664 47.8607C58.4151 47.6991 58.4834 47.5349 58.5516 47.3709C58.6976 47.0197 58.8434 46.6693 58.7951 46.347C58.7279 45.9006 58.5099 45.4771 58.2916 45.053C58.1934 44.8623 58.0952 44.6715 58.0106 44.4784C57.9828 44.4148 57.9511 44.3512 57.9194 44.2874C57.833 44.1135 57.7459 43.9383 57.7347 43.7605C57.6742 42.779 57.6444 41.7955 57.6321 40.812C57.6278 40.5083 57.6439 40.204 57.6599 39.8997C57.6742 39.6294 57.6885 39.3591 57.6885 39.089C57.6883 39.0194 57.6895 38.9483 57.6906 38.8766C57.696 38.5353 57.7016 38.1795 57.5685 37.8973C57.3778 37.4911 57.4362 37.2624 57.7552 37.0183C58.0741 36.7743 58.2095 36.4727 58.2587 36.0625C58.3026 35.6974 58.3977 35.3391 58.4929 34.9806C58.5357 34.8195 58.5785 34.6583 58.6167 34.4965C58.6373 34.4347 58.6426 34.3689 58.632 34.3047C58.5771 34.1197 58.5182 33.9354 58.4593 33.7511C58.4105 33.5983 58.3617 33.4455 58.3152 33.2924C58.0506 32.4299 58.3121 31.5131 58.9459 31.2946C59.2782 31.1798 59.353 31.0136 59.3684 30.7059C59.3851 30.3789 59.4129 30.0526 59.4407 29.7263C59.4691 29.3926 59.4975 29.059 59.514 28.7245C59.5187 28.6243 59.4761 28.5223 59.4332 28.4197C59.4098 28.3638 59.3864 28.3078 59.3705 28.2517C59.35 28.179 59.3264 28.1064 59.3028 28.0338C59.2435 27.8512 59.1841 27.6685 59.1746 27.4836C59.17 27.3968 59.1657 27.3101 59.1615 27.2235C59.1444 26.8689 59.1273 26.5162 59.0812 26.1711C57.6231 25.1557 55.1028 23.9188 50.8622 23.048H49.4111C49.7748 23.4399 50.0332 23.9177 50.1618 24.4366C50.2096 24.6116 50.4001 24.7479 50.6135 24.9006C50.7165 24.9742 50.8247 25.0517 50.9249 25.1391C50.8771 25.1611 50.8268 25.1905 50.7777 25.2191C50.6709 25.2814 50.5701 25.3402 50.5146 25.3114C50.1752 25.1371 49.8203 24.9504 49.5537 24.6848C49.1791 24.3168 48.8336 23.9162 48.4879 23.5153C48.3518 23.3575 48.2158 23.1997 48.0779 23.0439H39.6682C39.4529 23.1214 39.2373 23.1984 39.0217 23.2755C38.4187 23.4909 37.8156 23.7064 37.2181 23.933C37.095 23.9799 36.981 24.0524 36.8673 24.1246C36.7395 24.2059 36.612 24.287 36.4725 24.331L36.4265 24.3455C35.8803 24.5183 35.3254 24.6939 34.7608 24.7638C34.3986 24.8087 34.0308 24.8053 33.6627 24.8019C33.4013 24.7995 33.1397 24.7971 32.8799 24.812C32.8033 24.8162 32.7333 24.8857 32.6612 24.9573C32.6097 25.0084 32.5572 25.0606 32.5004 25.0909L32.4967 25.0929C32.3604 25.1657 32.1651 25.27 32.0564 25.2222C31.9107 25.1586 31.7138 24.9453 31.7302 24.8222C31.7714 24.5191 33.1543 23.5565 34.5217 22.6047C34.8152 22.4004 35.1079 22.1967 35.3865 22C24.6846 22.3475 19.6178 24.6146 17.3303 26.2509ZM44.195 28.0979C44.3836 28.1205 44.5734 28.1307 44.7632 28.1287L44.0658 27.3759L44.1335 27.2559L46.5159 28.0764C46.5313 28.0825 46.5569 28.0928 46.5569 28.1061C46.6054 28.2544 46.6565 28.4021 46.7076 28.5498C46.8371 28.9242 46.9665 29.2985 47.0533 29.6824C47.0921 29.8507 47.057 30.0364 47.0184 30.2403C46.9999 30.3382 46.9805 30.4404 46.9682 30.547C46.12 31.0362 45.4042 30.9336 44.7396 30.1542C44.4863 29.8557 44.233 29.8465 43.9489 30.0926C43.941 30.0993 43.9321 30.1061 43.9229 30.1132C43.8926 30.1364 43.8589 30.1622 43.8463 30.1952C43.5744 30.9256 42.934 31.1147 42.309 31.2993C42.2153 31.327 42.1218 31.3545 42.0301 31.3838C41.7375 31.4671 41.4243 31.4355 41.1542 31.2956C40.6744 31.0079 40.2309 30.6636 39.8333 30.2701C39.5164 29.9603 39.2343 29.9009 38.8887 30.1419C38.4252 30.467 37.9831 30.8126 37.9124 31.4454C37.8634 31.8079 37.9584 32.1751 38.1769 32.4684C38.3955 32.7617 38.7202 32.9577 39.0815 33.0145C39.1591 33.0393 39.2331 33.0737 39.302 33.1171C38.8436 33.6996 38.4252 33.7509 37.7637 33.2976C37.7296 33.2743 37.6965 33.2509 37.6642 33.228C37.3677 33.0185 37.1297 32.8502 36.6673 33.1396C36.0335 33.5365 35.5556 33.154 35.5392 32.4084C35.5347 32.2081 35.5231 32.0075 35.5115 31.807C35.4966 31.5506 35.4818 31.2943 35.4818 31.0382C35.4816 30.8558 35.5275 30.6762 35.6151 30.5162C35.6956 30.3763 35.794 30.2469 35.8926 30.1173C35.9811 30.001 36.0696 29.8846 36.1453 29.7604C36.9258 28.4815 38.0888 27.7266 39.4897 27.2928C39.5218 27.283 39.5614 27.297 39.6178 27.3169C39.6498 27.3282 39.6872 27.3415 39.7317 27.3533L39.1533 27.8661C39.1579 27.8948 39.1623 27.9233 39.1667 27.9518C39.171 27.9802 39.1754 28.0087 39.18 28.0374C39.3176 28.0432 39.4556 28.0538 39.5937 28.0645C39.8983 28.0879 40.2031 28.1115 40.503 28.0825L40.5427 28.0787C41.7601 27.962 42.9776 27.8453 44.195 28.0979Z"/></svg>'
    }
];

const mutations = {
    buy(state: StockStateInterface[], id: number): void {
        state = state.map(goods => {
            if (goods.id === id) {
                goods.count += 1;
            }
            return goods;
        });
    },

    sell(state: StockStateInterface[], id: number): void {
        state = state.map(goods => {
            if (goods.id === id) {
                goods.count -= 1;
            }
            return goods;
        });
    },

    inProduction(state: StockStateInterface[], detail: string): void {
        state = state.map(goods => {
            if (goods.name === detail) {
                goods.count -= 1;
                goods.inProduction += 1;
            }
            return goods;
        });
    },

    inStock(state: StockStateInterface[], detail: string): void {
        state = state.map(goods => {
            if (goods.name === detail) {
                goods.count += 1;
                goods.inProduction -= 1;
            }
            return goods;
        });
    },

    resetProd(state: StockStateInterface[]): void {
        state = state.map(goods => {
           goods.count += goods.inProduction;
           goods.inProduction = 0;
           return goods;
        });
    },

    createRobot(state: StockStateInterface[]): void {
        state = state.map(goods => {
            goods.inProduction = 0;
            return goods;
        });
    }
}

const actions = {
    buy({commit, state}: any, id: number): void  {
        const goods = state.find((goods: StockStateInterface) => goods.id === id);
        commit('buy', id);
        commit('expense', goods.amountSale, {root: true});
        commit('production/changeDetails', {detail: goods.name, action: 'buy'}, {root: true})
    },

    sell({commit, state}: any, {id, money}: any): void {
        const goods = state.find((goods: StockStateInterface) => goods.id === id);

        if (goods.amountPurchase + money > 100) {
            commit('showError', 'Вы не можете продать эту деталь, т.к. превысится лимит монет', {root: true});
        } else {

            // Меняем детали в производстве
            if (goods.count === 1) {
                commit('production/changeDetails', {detail: goods.name, action: 'sell'}, {root: true})
            }

            commit('sell', id);
            commit('income', goods.amountPurchase, {root: true});
        }
    }
}

export {namespaced, state, mutations, actions};
