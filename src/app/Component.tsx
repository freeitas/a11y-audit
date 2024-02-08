"use client";
import { useEffect, useState } from "react";
import axe from "axe-core";

export function Component(prop: any) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function axep() {
      axe.run(prop, (err, results) => {
        console.log(results);
        setErrors(errors => ({...errors, ...results}))
      });
    }
    axep();

  }, [prop]);

  return <div>{errors ? JSON.stringify(errors.violations, null, 3) : 'b'}</div>;
}
