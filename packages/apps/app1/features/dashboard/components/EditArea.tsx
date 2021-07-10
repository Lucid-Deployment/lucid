import * as React from "react";
import cn from "classnames";
import { Button1 } from "./Button1";

const Top = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn(
      className,
      "inline-flex absolute top-0 -translate-y-full transform"
    )}
    style={style}
  >
    {children}
  </div>
);

export interface EditAreaProps {
  children?: React.ReactNode;
}
export const EditArea = ({ children }: EditAreaProps) => (
  <div className="relative">
    <Top className="text-white bg-blue-500 px-1.5 py-1 text-xs uppercase left-0">
      Text
    </Top>
    <Top
      style={{
        boxShadow: "0 4px 16px rgb(0 0 0 / 12%), 0 0 0 1px rgb(0 0 0 / 2%)",
      }}
      className="text-primary rounded-lg bg-white border border-[rgba(0,0,0,0.01)] py-[5px] pl-[16px] pr-[5px] flex items-stretch right-0 space-x-[11px]"
    >
      <p className="flex-none text-sm font-medium flex items-center">Text</p>
      <div className="space-x-[4px]">
        <Button1 aria-label="Edit" className="w-[37px] h-[37px]">
          <img
            src="//assets.squarespace.com/universal/images-v6/page-sections/toolbar-pencil.svg"
            alt=""
          />
        </Button1>
        <Button1 aria-label="Delete" className="w-[37px] h-[37px]">
          <img
            src="//assets.squarespace.com/universal/images-v6/page-sections/toolbar-delete.svg"
            alt=""
          />
        </Button1>
      </div>
    </Top>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button
        className="btn flex leading-none h-5 w-7 rounded-full text-sm bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 font-bold transition-colors duration-350 symmetric-center-fast"
        aria-label="Add new"
      >
        +
      </button>
    </div>
    <div className="border-2 border-blue-500">{children}</div>
  </div>
);
