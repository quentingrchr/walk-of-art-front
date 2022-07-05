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
        d="M12.016 7.018L5.998 1 4 2.998l6.018 6.019-5.985 5.985L6.031 17l7.994-7.993-1.999-1.998-.01.01z"
        fill="#252525"
      />
    </svg>

    )
}

export default ChevronRight;
