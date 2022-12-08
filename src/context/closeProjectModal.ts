import React from "react";

export const CloseProjectModalContext = React.createContext<{ isActive: boolean, setActive: React.SetStateAction<any> }>(
	{
		isActive: false,
		setActive: () => { }
	}
)