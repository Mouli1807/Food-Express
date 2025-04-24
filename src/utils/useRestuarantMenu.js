import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

export function useRestuarantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(MENU_API + resId);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const json = await response.json();
                console.log("Fetched Menu Data:", json); // Logging response properly
                setResInfo(json?.data || {}); // Ensure it handles undefined/null cases
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [resId]); // ✅ Added resId as a dependency

    return resInfo;
}


