import classNames from "classnames";

export const LightThemeIcon = ({ size = "md" }: { size?: "sm" | "md" }) => (
    <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5")}
    >
        <path
            d="M10.206 7.76396C11.6034 7.83375 12.8121 8.39765 13.5944 9.70801C13.861 10.1551 14.082 10.6295 14.3136 11.0962C14.5581 11.5776 14.8792 12.0161 15.2644 12.3945C15.757 12.8904 16.2458 13.3908 16.731 13.8955C17.6717 14.8786 17.7293 16.2052 16.8266 17.2237C15.8601 18.3146 14.613 18.7091 13.1813 18.5179C12.3635 18.4087 11.5488 18.2757 10.7355 18.1406C10.0548 18.0273 9.39331 18.1654 8.72827 18.264C8.05362 18.3652 7.38251 18.5255 6.70533 18.5563C5.32467 18.6185 4.12608 18.1695 3.27746 17.031C2.53807 16.0398 2.6463 14.8058 3.5015 13.9182C3.9688 13.4327 4.43205 12.9432 4.91452 12.4729C5.39699 12.0025 5.77427 11.4427 6.07771 10.8358C6.34676 10.3038 6.56221 9.73532 6.94151 9.26802C7.75625 8.26767 8.83953 7.8029 10.206 7.76396Z"
            fill="white"
        />
        <path
            d="M9.42996 4.2041C9.41681 5.27323 9.21098 6.1709 8.60612 6.94013C7.83285 7.92378 6.62617 8.11191 5.59852 7.40287C4.68263 6.77172 4.19409 5.85533 3.94426 4.80138C3.66712 3.62807 3.71213 2.475 4.28765 1.38767C5.1474 -0.237765 6.88409 -0.469392 8.1459 0.87384C9.05218 1.83828 9.39962 3.01967 9.42996 4.2041Z"
            fill="white"
        />
        <path
            d="M16.4549 3.80609C16.4278 4.92932 16.0098 6.00792 15.273 6.85618C14.8047 7.39226 14.2343 7.77257 13.503 7.81707C12.6614 7.86765 12.0252 7.48228 11.5518 6.81521C10.9824 6.01362 10.7932 5.10027 10.8296 4.13482C10.8736 2.94735 11.2221 1.86609 12.0207 0.963355C13.3376 -0.529574 15.2225 -0.244846 16.0539 1.56771C16.3295 2.16751 16.458 2.79361 16.4549 3.80609Z"
            fill="white"
        />
        <path
            d="M15.4776 9.95733C15.509 8.7987 15.908 7.79228 16.7339 6.96692C16.9718 6.72729 17.2528 6.53476 17.5622 6.39949C18.5464 5.96962 19.5124 6.33526 19.964 7.30981C20.7226 8.94536 19.8532 11.3941 18.2303 12.1927C17.231 12.6848 16.2109 12.3232 15.7436 11.3117C15.5459 10.8818 15.4751 10.4282 15.4776 9.95733Z"
            fill="white"
        />
        <path
            d="M4.77146 9.93003C4.77753 10.4398 4.6956 10.8828 4.50595 11.3041C4.05079 12.3125 3.00847 12.6984 2.0238 12.1927C0.941529 11.6364 0.382692 10.6826 0.111112 9.5391C-0.0638718 8.80174 -0.0456654 8.06842 0.262833 7.3609C0.717994 6.31656 1.75374 5.92562 2.77027 6.444C3.81815 6.97907 4.35928 7.90709 4.65261 9.00504C4.73835 9.30567 4.77841 9.61749 4.77146 9.93003V9.93003Z"
            fill="white"
        />
    </svg>
);

export const DarkThemeIcon = ({ size = "md" }: { size?: "sm" | "md" }) => (
    <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5")}
    >
        <path
            d="M19.2624 11.4004C18.8754 13.0444 18.0685 14.56 16.9205 15.7988C15.7725 17.0376 14.3227 17.9574 12.7127 18.4681C11.1028 18.9789 9.38795 19.0632 7.73572 18.7127C6.08349 18.3623 4.55047 17.5891 3.28651 16.4688C2.02256 15.3485 1.07092 13.9194 0.524649 12.3212C-0.0216274 10.723 -0.143853 9.0104 0.169918 7.35082C0.48369 5.69124 1.22272 4.14147 2.31477 2.85302C3.40681 1.56457 4.8145 0.581529 6.40022 0C5.99648 1.71543 6.0647 3.50816 6.59762 5.18795C7.13055 6.86774 8.1083 8.37191 9.42712 9.54084C10.7459 10.7098 12.3566 11.4999 14.0882 11.8273C15.8199 12.1546 17.6078 12.0071 19.2624 11.4004V11.4004Z"
            fill="white"
        />
    </svg>
);
