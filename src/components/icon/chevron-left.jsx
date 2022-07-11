import React from 'react'

const ChevronRight = (props) => {
    return (
      <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.984 10.982L12.002 17 14 15.002 7.982 8.983l5.985-5.985L11.969 1 3.976 8.993l1.998 1.998.01-.01z"
        fill="#252525"
      />
    </svg>

    )
}

export default ChevronRight;
