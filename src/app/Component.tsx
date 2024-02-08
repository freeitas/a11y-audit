"use client";
import { useEffect, useState } from "react";
import axe from "axe-core";

export function Component(prop: any) {
  const [errors, setErrors] = useState<any>([]);

  useEffect(() => {
    async function axep() {
      axe.run(prop, (err, results) => {
        console.log(results);
      });
    }
    axep();
  }, [prop]);

  return <div></div>;
}
