"use client"

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import React, { ReactNode } from "react";

interface AppRootProps {
    children: ReactNode | ReactNode[]
}
 
const AppRoot: React.FC<AppRootProps> = ({children}) => {
    return (
        <Authenticator>
            {children}
        </Authenticator>
      );
}
 
export default AppRoot;