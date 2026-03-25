"use client";

import { useEffect } from "react";

interface SchemaOrgProps {
  schema: Record<string, any>;
}

export const SchemaOrg = ({ schema }: SchemaOrgProps) => {
  useEffect(() => {
    // This component doesn't render anything visible
    // It just adds the schema.org JSON-LD to the page
  }, [schema]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};