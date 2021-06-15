import * as React from "react"
import "../../../styles/tailwind.build.css"
import cn from "classnames"
import { Button1 } from "./Button1"

const ButtonsWrapper = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => <div className={cn("m-[9px] flex", className)}>{children}</div>

export const ConfigWebsite = () => {
  return (
    <div className="bg-white shadow-mdEven relative z-2">
      <div className="h-[55px] flex items-stretch justify-between transition-[height, padding] duration-350 symmetric-center-fast">
        <ButtonsWrapper>
          <Button1 className="px-[13px]">Edit</Button1>
        </ButtonsWrapper>
        <div className="absolute max-w-1/4 inset-y-0 left-1/2 -translate-x-1/2 transform flex items-center overflow-ellipsis overflow-hidden">
          <div className="text-center">
            <p className="text-primary text-xs font-medium">Home</p>
            <p className="text-gray-400 text-xs font-normal">Page, Published</p>
          </div>
        </div>
        <ButtonsWrapper className="space-x-[0.3125rem]">
          <div>
            <Button1
              className="w-[37px] h-[37px] m-x-[3.5px]"
              aria-label="Toggle device view"
            >
              <svg
                fill="currentColor"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 16H8v2h6v-2z" />
                <path
                  clipRule="evenodd"
                  d="M14 1H8a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3V4a3 3 0 00-3-3zM7 4a1 1 0 011-1h6a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V4z"
                  fillRule="evenodd"
                />
              </svg>
            </Button1>
          </div>
          <div>
            <Button1
              className="w-[37px] h-[37px] m-x-[3.5px]"
              aria-label="Toggle device view"
            >
              <img
                alt=""
                className="w-[16px] h-[22px] object-fill"
                src="data:image/svg+xml,%3Csvg width='16' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 6l2-2h10v10l-2 2V7.414L1.707 18.707.293 17.293 11.586 6H3z' fill='%23313131'/%3E%3C/svg%3E"
              />
            </Button1>
          </div>
        </ButtonsWrapper>
      </div>
    </div>
  )
}
