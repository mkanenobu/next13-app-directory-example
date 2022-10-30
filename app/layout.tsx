import { BaseLayout } from "../src/components/BaseLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;
