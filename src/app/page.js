"use client";

import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { useEffect, useRef } from "react";

export default function Home() {
  const refs = useRef({});
  const gridRef = useRef();
  const gridContainerRef = useRef(null);
  refs.current = {};

  useEffect(() => {
    if (!gridRef.current) {
      const grid = (gridRef.current = GridStack.init(
        {
          column: 3,
          cellHeight: 200,
          minRow: 1,
          margin: 8,
          resizable: {
            handles: "e,se,s,sw,w",
          },
        },
        gridContainerRef.current
      ));
    }
  }, []);

  return (
    <main className="p-2">
      <h1 className="mb-4 font-bold text-lg px-2">Charts</h1>

      <div className="grid-stack" ref={gridContainerRef}>
        <div className="grid-stack-item" gs-w="1" gs-h="1">
          <div className="grid-stack-item-content">Item 1</div>
        </div>

        <div className="grid-stack-item" gs-w="1" gs-h="1">
          <div className="grid-stack-item-content">Item 2</div>
        </div>

        <div className="grid-stack-item" gs-w="1" gs-h="1">
          <div className="grid-stack-item-content">Item 3</div>
        </div>
      </div>
    </main>
  );
}
