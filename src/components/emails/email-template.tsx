import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

// this is an example email template
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
