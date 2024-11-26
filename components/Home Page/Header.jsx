import Wrapper from "@/components/ui/Wrapper";
import GridTemplate from "@/components/ui/GridTemplate";
import Image from "next/image";
import doctorImage from "@/assets/Home Page/Doctor.png"
import Card from "@/components/ui/Card";
import {DATA_CARDS_CONTENT} from "@/data"
import bloodIcon from "@/assets/Home Page/blood-icon.svg"
import noDrugsIcon from "@/assets/Home Page/no-drugs-icon.svg"
import Button from "@/components/ui/Button";

export default function Header() {
    return (
        <Wrapper className="mt-10 mb-20">
            <GridTemplate>
                <div
                    className="relative w-full h-[513px] col-span-3 bg-gradient-to-bl from-[#64D3C2]  to-[#E1F0D7] rounded-2xl">
                    <Image height={452} quality={100} src={doctorImage} alt="doctor-image"
                           className="z-10 absolute bottom-0 left-[51.5%] transform -translate-x-1/2"/>
                    <div className="absolute top-[76px] left-1/2 transform -translate-x-1/2 z-0">
                        <svg width="1207" height="80" viewBox="0 0 1207 80" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_6802_6298)">
                                <path
                                    d="M0.742188 78.921V0H57.6208V17.264H22.168V30.8285H54.6921V48.0925H22.168V61.657H57.4667V78.921H0.742188Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M86.8983 19.7302L95.5302 38.0732L104.625 19.7302H125.742L109.865 49.3256L126.513 78.921H105.549L95.5302 60.1156L85.8193 78.921H64.5476L81.3491 49.3256L65.6266 19.7302H86.8983Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M159.808 80C153.385 80 147.887 78.7283 143.314 76.185C138.742 73.6159 135.235 70.045 132.794 65.4721C130.354 60.8735 129.133 55.5427 129.133 49.4798C129.133 43.4168 130.354 38.0989 132.794 33.526C135.235 28.9274 138.742 25.3565 143.314 22.8131C147.887 20.2441 153.385 18.9595 159.808 18.9595C165.614 18.9595 170.636 20.0128 174.875 22.1195C179.14 24.2004 182.441 27.1548 184.779 30.9827C187.117 34.7848 188.298 39.255 188.324 44.3931H168.594C168.311 41.2845 167.412 38.921 165.896 37.3025C164.406 35.6583 162.479 34.8362 160.116 34.8362C158.266 34.8362 156.648 35.3757 155.26 36.4547C153.873 37.508 152.794 39.1137 152.023 41.2717C151.253 43.404 150.867 46.0886 150.867 49.3256C150.867 52.5626 151.253 55.2601 152.023 57.4181C152.794 59.5504 153.873 61.1561 155.26 62.2351C156.648 63.2884 158.266 63.815 160.116 63.815C161.683 63.815 163.07 63.4554 164.278 62.736C165.485 61.991 166.462 60.912 167.207 59.499C167.977 58.0604 168.44 56.3134 168.594 54.2582H188.324C188.247 59.4733 187.052 64.0205 184.74 67.8998C182.428 71.7534 179.153 74.7335 174.914 76.8401C170.7 78.9467 165.665 80 159.808 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M225.463 80C219.143 80 213.697 78.7925 209.124 76.3776C204.576 73.9371 201.07 70.4432 198.603 65.896C196.163 61.3231 194.943 55.851 194.943 49.4798C194.943 43.3654 196.176 38.0218 198.642 33.4489C201.108 28.876 204.589 25.3179 209.085 22.7746C213.581 20.2312 218.886 18.9595 225 18.9595C229.471 18.9595 233.517 19.6532 237.139 21.0405C240.761 22.4277 243.857 24.4444 246.426 27.0906C248.995 29.711 250.973 32.8966 252.361 36.6474C253.748 40.3982 254.442 44.6243 254.442 49.3256V54.2582H201.571V42.5434H234.865C234.84 40.8478 234.403 39.3577 233.555 38.0732C232.733 36.763 231.616 35.7482 230.203 35.0289C228.815 34.2839 227.235 33.9114 225.463 33.9114C223.742 33.9114 222.162 34.2839 220.723 35.0289C219.284 35.7482 218.128 36.7502 217.255 38.0347C216.407 39.3192 215.957 40.8221 215.906 42.5434V55.183C215.906 57.0841 216.304 58.7797 217.101 60.2697C217.897 61.7598 219.04 62.9287 220.53 63.7765C222.02 64.6243 223.819 65.0482 225.925 65.0482C227.39 65.0482 228.725 64.8426 229.933 64.4316C231.166 64.0205 232.219 63.4297 233.093 62.659C233.966 61.8626 234.609 60.912 235.02 59.8073H254.442C253.774 63.9178 252.194 67.4888 249.702 70.5202C247.21 73.526 243.909 75.8638 239.798 77.5337C235.713 79.1779 230.935 80 225.463 80Z"
                                    fill="#CBFFF5"/>
                                <path d="M284.393 0V78.921H263.122V0H284.393Z" fill="#CBFFF5"/>
                                <path d="M316.503 0V78.921H295.232V0H316.503Z" fill="#CBFFF5"/>
                                <path
                                    d="M355.704 80C349.384 80 343.937 78.7925 339.365 76.3776C334.817 73.9371 331.311 70.4432 328.844 65.896C326.404 61.3231 325.183 55.851 325.183 49.4798C325.183 43.3654 326.417 38.0218 328.883 33.4489C331.349 28.876 334.83 25.3179 339.326 22.7746C343.822 20.2312 349.127 18.9595 355.241 18.9595C359.711 18.9595 363.758 19.6532 367.38 21.0405C371.002 22.4277 374.098 24.4444 376.667 27.0906C379.236 29.711 381.214 32.8966 382.602 36.6474C383.989 40.3982 384.682 44.6243 384.682 49.3256V54.2582H331.812V42.5434H365.106C365.081 40.8478 364.644 39.3577 363.796 38.0732C362.974 36.763 361.856 35.7482 360.444 35.0289C359.056 34.2839 357.476 33.9114 355.704 33.9114C353.982 33.9114 352.402 34.2839 350.964 35.0289C349.525 35.7482 348.369 36.7502 347.496 38.0347C346.648 39.3192 346.198 40.8221 346.147 42.5434V55.183C346.147 57.0841 346.545 58.7797 347.341 60.2697C348.138 61.7598 349.281 62.9287 350.771 63.7765C352.261 64.6243 354.059 65.0482 356.166 65.0482C357.63 65.0482 358.966 64.8426 360.174 64.4316C361.407 64.0205 362.46 63.4297 363.334 62.659C364.207 61.8626 364.849 60.912 365.26 59.8073H384.682C384.014 63.9178 382.435 67.4888 379.943 70.5202C377.451 73.526 374.149 75.8638 370.039 77.5337C365.954 79.1779 361.176 80 355.704 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M414.634 45.6262V78.921H393.363V19.7302H413.555V30.9827H414.172C415.456 27.2319 417.717 24.2903 420.954 22.158C424.217 20.0257 428.019 18.9595 432.361 18.9595C436.548 18.9595 440.183 19.9229 443.266 21.8497C446.375 23.7508 448.777 26.3712 450.472 29.711C452.194 33.0507 453.041 36.8658 453.016 41.1561V78.921H431.744V45.6262C431.77 42.6975 431.025 40.3982 429.509 38.7283C428.019 37.0584 425.938 36.2235 423.266 36.2235C421.519 36.2235 419.991 36.6089 418.681 37.3796C417.396 38.1246 416.407 39.2036 415.713 40.6166C415.02 42.0039 414.66 43.6737 414.634 45.6262Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M492.033 80C485.611 80 480.113 78.7283 475.54 76.185C470.967 73.6159 467.46 70.045 465.02 65.4721C462.579 60.8735 461.359 55.5427 461.359 49.4798C461.359 43.4168 462.579 38.0989 465.02 33.526C467.46 28.9274 470.967 25.3565 475.54 22.8131C480.113 20.2441 485.611 18.9595 492.033 18.9595C497.839 18.9595 502.862 20.0128 507.101 22.1195C511.365 24.2004 514.666 27.1548 517.004 30.9827C519.342 34.7848 520.524 39.255 520.549 44.3931H500.819C500.537 41.2845 499.637 38.921 498.122 37.3025C496.632 35.6583 494.705 34.8362 492.341 34.8362C490.492 34.8362 488.873 35.3757 487.486 36.4547C486.099 37.508 485.02 39.1137 484.249 41.2717C483.478 43.404 483.093 46.0886 483.093 49.3256C483.093 52.5626 483.478 55.2601 484.249 57.4181C485.02 59.5504 486.099 61.1561 487.486 62.2351C488.873 63.2884 490.492 63.815 492.341 63.815C493.908 63.815 495.296 63.4554 496.503 62.736C497.711 61.991 498.687 60.912 499.432 59.499C500.203 58.0604 500.665 56.3134 500.819 54.2582H520.549C520.472 59.4733 519.278 64.0205 516.966 67.8998C514.654 71.7534 511.378 74.7335 507.139 76.8401C502.926 78.9467 497.891 80 492.033 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M557.688 80C551.368 80 545.922 78.7925 541.349 76.3776C536.802 73.9371 533.295 70.4432 530.829 65.896C528.388 61.3231 527.168 55.851 527.168 49.4798C527.168 43.3654 528.401 38.0218 530.867 33.4489C533.334 28.876 536.815 25.3179 541.311 22.7746C545.806 20.2312 551.111 18.9595 557.226 18.9595C561.696 18.9595 565.742 19.6532 569.365 21.0405C572.987 22.4277 576.083 24.4444 578.652 27.0906C581.221 29.711 583.199 32.8966 584.586 36.6474C585.973 40.3982 586.667 44.6243 586.667 49.3256V54.2582H533.796V42.5434H567.091C567.065 40.8478 566.628 39.3577 565.781 38.0732C564.959 36.763 563.841 35.7482 562.428 35.0289C561.041 34.2839 559.461 33.9114 557.688 33.9114C555.967 33.9114 554.387 34.2839 552.948 35.0289C551.51 35.7482 550.354 36.7502 549.48 38.0347C548.632 39.3192 548.183 40.8221 548.131 42.5434V55.183C548.131 57.0841 548.53 58.7797 549.326 60.2697C550.122 61.7598 551.266 62.9287 552.756 63.7765C554.246 64.6243 556.044 65.0482 558.151 65.0482C559.615 65.0482 560.951 64.8426 562.158 64.4316C563.392 64.0205 564.445 63.4297 565.318 62.659C566.192 61.8626 566.834 60.912 567.245 59.8073H586.667C585.999 63.9178 584.419 67.4888 581.927 70.5202C579.435 73.526 576.134 75.8638 572.023 77.5337C567.939 79.1779 563.16 80 557.688 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M616.657 78.921V0H638.083V30.8285H666.445V0H687.871V78.921H666.445V48.0925H638.083V78.921H616.657Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M726.715 80C720.395 80 714.949 78.7925 710.376 76.3776C705.829 73.9371 702.322 70.4432 699.856 65.896C697.415 61.3231 696.195 55.851 696.195 49.4798C696.195 43.3654 697.428 38.0218 699.894 33.4489C702.361 28.876 705.842 25.3179 710.338 22.7746C714.833 20.2312 720.138 18.9595 726.253 18.9595C730.723 18.9595 734.769 19.6532 738.391 21.0405C742.014 22.4277 745.11 24.4444 747.679 27.0906C750.248 29.711 752.226 32.8966 753.613 36.6474C755 40.3982 755.694 44.6243 755.694 49.3256V54.2582H702.823V42.5434H736.118C736.092 40.8478 735.655 39.3577 734.808 38.0732C733.986 36.763 732.868 35.7482 731.455 35.0289C730.068 34.2839 728.488 33.9114 726.715 33.9114C724.994 33.9114 723.414 34.2839 721.975 35.0289C720.537 35.7482 719.38 36.7502 718.507 38.0347C717.659 39.3192 717.21 40.8221 717.158 42.5434V55.183C717.158 57.0841 717.557 58.7797 718.353 60.2697C719.149 61.7598 720.293 62.9287 721.783 63.7765C723.273 64.6243 725.071 65.0482 727.178 65.0482C728.642 65.0482 729.978 64.8426 731.185 64.4316C732.418 64.0205 733.472 63.4297 734.345 62.659C735.219 61.8626 735.861 60.912 736.272 59.8073H755.694C755.026 63.9178 753.446 67.4888 750.954 70.5202C748.462 73.526 745.161 75.8638 741.05 77.5337C736.966 79.1779 732.187 80 726.715 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M780.867 79.8458C777.091 79.8458 773.751 79.2293 770.848 77.9961C767.971 76.7373 765.71 74.8362 764.066 72.2929C762.422 69.7495 761.6 66.5125 761.6 62.5819C761.6 59.3449 762.152 56.5832 763.257 54.2967C764.361 51.9846 765.903 50.0963 767.881 48.632C769.859 47.1676 772.158 46.0501 774.779 45.2794C777.425 44.5087 780.277 44.0077 783.334 43.7765C786.648 43.5196 789.307 43.2113 791.31 42.8516C793.34 42.4663 794.804 41.9396 795.704 41.2717C796.603 40.578 797.052 39.666 797.052 38.5356V38.3815C797.052 36.8401 796.461 35.6583 795.28 34.8362C794.098 34.0141 792.582 33.6031 790.732 33.6031C788.703 33.6031 787.046 34.0527 785.761 34.9518C784.503 35.8253 783.745 37.174 783.488 38.9981H763.912C764.169 35.4014 765.312 32.0873 767.341 29.0559C769.397 25.9987 772.39 23.5581 776.32 21.7341C780.251 19.8844 785.158 18.9595 791.041 18.9595C795.28 18.9595 799.082 19.4605 802.447 20.4624C805.813 21.4387 808.677 22.8131 811.041 24.5857C813.404 26.3327 815.203 28.3879 816.436 30.7514C817.695 33.0893 818.324 35.6326 818.324 38.3815V78.921H798.44V70.5973H797.977C796.795 72.8067 795.357 74.5922 793.661 75.9538C791.991 77.3153 790.077 78.3044 787.919 78.921C785.787 79.5376 783.436 79.8458 780.867 79.8458ZM787.804 66.4354C789.422 66.4354 790.938 66.1015 792.351 65.4335C793.79 64.7656 794.959 63.8022 795.858 62.5434C796.757 61.2845 797.207 59.7559 797.207 57.9576V53.025C796.641 53.2563 796.038 53.4746 795.395 53.6802C794.779 53.8857 794.111 54.0784 793.391 54.2582C792.698 54.438 791.953 54.605 791.156 54.7592C790.386 54.9133 789.576 55.0546 788.729 55.183C787.085 55.4399 785.736 55.8638 784.682 56.4547C783.655 57.0199 782.884 57.7264 782.37 58.5742C781.882 59.3963 781.638 60.3211 781.638 61.3487C781.638 62.9929 782.216 64.2518 783.372 65.1252C784.528 65.9987 786.005 66.4354 787.804 66.4354Z"
                                    fill="#CBFFF5"/>
                                <path d="M849.759 0V78.921H828.488V0H849.759Z" fill="#CBFFF5"/>
                                <path
                                    d="M895.896 19.7302V35.1445H856.898V19.7302H895.896ZM864.451 5.54913H885.723V59.8844C885.723 60.7065 885.864 61.4001 886.147 61.9653C886.429 62.5048 886.866 62.9159 887.457 63.1985C888.048 63.4554 888.806 63.5838 889.731 63.5838C890.373 63.5838 891.118 63.5067 891.966 63.3526C892.839 63.1985 893.481 63.07 893.892 62.9672L896.975 77.9191C896.025 78.2017 894.663 78.5485 892.891 78.9595C891.144 79.3706 889.063 79.6403 886.648 79.7688C881.767 80.0257 877.669 79.5247 874.355 78.2659C871.041 76.9814 868.549 74.9647 866.879 72.2158C865.209 69.4669 864.4 66.0244 864.451 61.8882V5.54913Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M927.12 45.6262V78.921H905.848V0H926.349V30.9827H926.966C928.302 27.2062 930.524 24.2646 933.632 22.158C936.741 20.0257 940.479 18.9595 944.846 18.9595C949.034 18.9595 952.669 19.9101 955.752 21.8112C958.86 23.7123 961.262 26.3327 962.958 29.6724C964.679 33.0122 965.527 36.8401 965.501 41.1561V78.921H944.23V45.6262C944.255 42.6975 943.523 40.3982 942.033 38.7283C940.569 37.0584 938.475 36.2235 935.752 36.2235C934.03 36.2235 932.515 36.6089 931.205 37.3796C929.92 38.1246 928.918 39.2036 928.199 40.6166C927.505 42.0039 927.145 43.6737 927.12 45.6262Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M1004.52 80C998.096 80 992.598 78.7283 988.025 76.185C983.452 73.6159 979.946 70.045 977.505 65.4721C975.065 60.8735 973.844 55.5427 973.844 49.4798C973.844 43.4168 975.065 38.0989 977.505 33.526C979.946 28.9274 983.452 25.3565 988.025 22.8131C992.598 20.2441 998.096 18.9595 1004.52 18.9595C1010.32 18.9595 1015.35 20.0128 1019.59 22.1195C1023.85 24.2004 1027.15 27.1548 1029.49 30.9827C1031.83 34.7848 1033.01 39.255 1033.04 44.3931H1013.3C1013.02 41.2845 1012.12 38.921 1010.61 37.3025C1009.12 35.6583 1007.19 34.8362 1004.83 34.8362C1002.98 34.8362 1001.36 35.3757 999.971 36.4547C998.584 37.508 997.505 39.1137 996.734 41.2717C995.964 43.404 995.578 46.0886 995.578 49.3256C995.578 52.5626 995.964 55.2601 996.734 57.4181C997.505 59.5504 998.584 61.1561 999.971 62.2351C1001.36 63.2884 1002.98 63.815 1004.83 63.815C1006.39 63.815 1007.78 63.4554 1008.99 62.736C1010.2 61.991 1011.17 60.912 1011.92 59.499C1012.69 58.0604 1013.15 56.3134 1013.3 54.2582H1033.04C1032.96 59.4733 1031.76 64.0205 1029.45 67.8998C1027.14 71.7534 1023.86 74.7335 1019.62 76.8401C1015.41 78.9467 1010.38 80 1004.52 80Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M1058.3 79.8458C1054.53 79.8458 1051.19 79.2293 1048.29 77.9961C1045.41 76.7373 1043.15 74.8362 1041.5 72.2929C1039.86 69.7495 1039.04 66.5125 1039.04 62.5819C1039.04 59.3449 1039.59 56.5832 1040.69 54.2967C1041.8 51.9846 1043.34 50.0963 1045.32 48.632C1047.3 47.1676 1049.6 46.0501 1052.22 45.2794C1054.86 44.5087 1057.71 44.0077 1060.77 43.7765C1064.09 43.5196 1066.74 43.2113 1068.75 42.8516C1070.78 42.4663 1072.24 41.9396 1073.14 41.2717C1074.04 40.578 1074.49 39.666 1074.49 38.5356V38.3815C1074.49 36.8401 1073.9 35.6583 1072.72 34.8362C1071.54 34.0141 1070.02 33.6031 1068.17 33.6031C1066.14 33.6031 1064.48 34.0527 1063.2 34.9518C1061.94 35.8253 1061.18 37.174 1060.93 38.9981H1041.35C1041.61 35.4014 1042.75 32.0873 1044.78 29.0559C1046.83 25.9987 1049.83 23.5581 1053.76 21.7341C1057.69 19.8844 1062.6 18.9595 1068.48 18.9595C1072.72 18.9595 1076.52 19.4605 1079.88 20.4624C1083.25 21.4387 1086.11 22.8131 1088.48 24.5857C1090.84 26.3327 1092.64 28.3879 1093.87 30.7514C1095.13 33.0893 1095.76 35.6326 1095.76 38.3815V78.921H1075.88V70.5973H1075.41C1074.23 72.8067 1072.79 74.5922 1071.1 75.9538C1069.43 77.3153 1067.51 78.3044 1065.36 78.921C1063.22 79.5376 1060.87 79.8458 1058.3 79.8458ZM1065.24 66.4354C1066.86 66.4354 1068.38 66.1015 1069.79 65.4335C1071.23 64.7656 1072.4 63.8022 1073.3 62.5434C1074.19 61.2845 1074.64 59.7559 1074.64 57.9576V53.025C1074.08 53.2563 1073.47 53.4746 1072.83 53.6802C1072.22 53.8857 1071.55 54.0784 1070.83 54.2582C1070.14 54.438 1069.39 54.605 1068.59 54.7592C1067.82 54.9133 1067.01 55.0546 1066.17 55.183C1064.52 55.4399 1063.17 55.8638 1062.12 56.4547C1061.09 57.0199 1060.32 57.7264 1059.81 58.5742C1059.32 59.3963 1059.08 60.3211 1059.08 61.3487C1059.08 62.9929 1059.65 64.2518 1060.81 65.1252C1061.97 65.9987 1063.44 66.4354 1065.24 66.4354Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M1105.93 78.921V19.7302H1126.58V30.9827H1127.2C1128.28 26.8208 1129.98 23.7765 1132.32 21.8497C1134.69 19.9229 1137.45 18.9595 1140.61 18.9595C1141.53 18.9595 1142.44 19.0366 1143.34 19.1908C1144.27 19.3192 1145.15 19.5119 1146 19.7688V37.9191C1144.95 37.5594 1143.65 37.2897 1142.11 37.1098C1140.57 36.93 1139.25 36.8401 1138.14 36.8401C1136.06 36.8401 1134.18 37.3153 1132.51 38.2659C1130.87 39.1907 1129.57 40.501 1128.62 42.1965C1127.67 43.8664 1127.2 45.8317 1127.2 48.0925V78.921H1105.93Z"
                                    fill="#CBFFF5"/>
                                <path
                                    d="M1177.95 80C1171.63 80 1166.18 78.7925 1161.61 76.3776C1157.06 73.9371 1153.56 70.4432 1151.09 65.896C1148.65 61.3231 1147.43 55.851 1147.43 49.4798C1147.43 43.3654 1148.66 38.0218 1151.13 33.4489C1153.59 28.876 1157.07 25.3179 1161.57 22.7746C1166.07 20.2312 1171.37 18.9595 1177.49 18.9595C1181.96 18.9595 1186 19.6532 1189.62 21.0405C1193.25 22.4277 1196.34 24.4444 1198.91 27.0906C1201.48 29.711 1203.46 32.8966 1204.85 36.6474C1206.23 40.3982 1206.93 44.6243 1206.93 49.3256V54.2582H1154.06V42.5434H1187.35C1187.33 40.8478 1186.89 39.3577 1186.04 38.0732C1185.22 36.763 1184.1 35.7482 1182.69 35.0289C1181.3 34.2839 1179.72 33.9114 1177.95 33.9114C1176.23 33.9114 1174.65 34.2839 1173.21 35.0289C1171.77 35.7482 1170.61 36.7502 1169.74 38.0347C1168.89 39.3192 1168.44 40.8221 1168.39 42.5434V55.183C1168.39 57.0841 1168.79 58.7797 1169.59 60.2697C1170.38 61.7598 1171.53 62.9287 1173.02 63.7765C1174.51 64.6243 1176.3 65.0482 1178.41 65.0482C1179.88 65.0482 1181.21 64.8426 1182.42 64.4316C1183.65 64.0205 1184.7 63.4297 1185.58 62.659C1186.45 61.8626 1187.09 60.912 1187.51 59.8073H1206.93C1206.26 63.9178 1204.68 67.4888 1202.19 70.5202C1199.7 73.526 1196.39 75.8638 1192.28 77.5337C1188.2 79.1779 1183.42 80 1177.95 80Z"
                                    fill="#CBFFF5"/>
                            </g>
                            <defs>
                                <filter id="filter0_i_6802_6298" x="0.742188" y="0" width="1206.18" height="81.0852"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="1.08516"/>
                                    <feGaussianBlur stdDeviation="2.17033"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.639549 0 0 0 0 0.941667 0 0 0 0 0.887825 0 0 0 0.3 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6802_6298"/>
                                </filter>
                            </defs>
                        </svg>

                    </div>
                    <div className="w-[90%] flex justify-between items-center absolute bottom-[45px] left-[5%]">
                        <p className="text-body-xl w-[355px]">
                            Prioritizing your well-being with top-tier medical expertise and compassionate care tailored
                            to your needs
                        </p>
                        <Button className="bg-primary-600 h-[48px] w-[248px]">Schedule An Appointment</Button>
                    </div>

                    <div className="flex justify-between items-center text-neutral-700 w-[728px] absolute top-[205px]
                                    left-[53%] transform -translate-x-1/2 z-0">
                        <span className="flex items-center text-[22px] font-medium leading-[150%] gap-[6px]">
                        <div className="bg-white rounded-full p-[6px]">
                            <Image src={bloodIcon} alt={bloodIcon}/>
                        </div>
                        Reduce HbA1c
                    </span>
                        <span className="flex items-center text-[22px] font-medium leading-[150%] gap-[6px]">
                        <div className="bg-white rounded-full p-[6px] ">
                            <Image src={noDrugsIcon} alt={noDrugsIcon}/>
                        </div>
                        No more medications
                    </span>
                    </div>
                </div>

                {DATA_CARDS_CONTENT.map((card, index) => (
                    <Card {...card} key={index}/>
                ))}


            </GridTemplate>
        </Wrapper>
    );
}
