import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
